from learn.models import Assignment, Question
from .serializer import AssignmentSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import (HTTP_201_CREATED, HTTP_400_BAD_REQUEST)
from .serializer import QuestionSerializer


class AssignmentView(ModelViewSet):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

    def create(self, request):
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            assignment = serializer.create(request)
            if assignment:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


class QuestionsView(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
