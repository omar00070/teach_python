from learn.models import Assignment, Question
from .serializer import AssignmentSerializer
from rest_framework.viewsets import ModelViewSet
from .serializer import QuestionSerializer


class AssignmentView(ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class QuestionsView(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
