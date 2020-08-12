from rest_framework import serializers
from learn.models import Assignment, Question, Choice, GradedAssignment
from django.contrib.auth.models import User


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class QuestionSerializer(serializers.ModelSerializer):
    choices = StringSerializer(many=True)

    class Meta:
        model = Question
        fields = ("__all__")


class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    teacher = StringSerializer(many=False)

    class Meta:
        model = Assignment
        fields = ('__all__')

    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many=True).data
        return questions

    def create(self, request):
        data = request.data
        print(request.data)

        assignment = Assignment()
        teacher = User.objects.get(username=data['teacher'])
        assignment.teacher = teacher
        assignment.title = data['title']
        assignment.save()

        order = 1
        for q in data['questions']:
            question = Question()
            question.question = q['question']
            question.order = order
            question.save()

            for c in q['choices']:
                choice, _ = Choice.objects.get_or_create(title=c)
                choice.save()
                question.choices.add(choice)

            question.answer = Choice.objects.get(title=q['answer'])
            question.assignment = assignment
            question.save()
            order += 1
        return assignment


class GradedAssignmentSerializer(serializers.ModelSerializer):
    assignment = StringSerializer(many=False)
    student = StringSerializer(many=False)

    class Meta:
        model = GradedAssignment
        fields = ("__all__")

    def create(self, request):
        data = request.data
        print(data)
        graded_assignment = GradedAssignment()

        graded_assignment.student = User.objects.get(username=data['student'])
        assignment = Assignment.objects.get(id=data["asstID"])
        graded_assignment.assignment = assignment

        answers = [data['answers'][a] for a in data['answers']]
        questions = assignment.questions.all()

        correct_answers = 0
        # empty answer case is not covered
        for question, answer in zip(questions, answers):
            if question.answer.title == answer:
                correct_answers += 1

        grade = round(100 * correct_answers/len(questions))
        graded_assignment.grade = grade
        graded_assignment.save()
        return graded_assignment
