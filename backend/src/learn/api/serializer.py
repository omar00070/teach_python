from rest_framework import serializers
from learn.models import Assignment, Question, Choice
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
    # questions = serializers.SerializerMethodField()
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
                choice = Choice()
                choice.title = c
                choice.save()
                question.choices.add(choice)

            question.answer = Choice.objects.get(title=q['answer'])
            question.assignment = assignment
            question.save()
            order += 1
        return assignment
