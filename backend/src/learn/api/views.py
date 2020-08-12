from learn.models import Assignment, Question, GradedAssignment
from .serializer import AssignmentSerializer, GradedAssignmentSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateAPIView, ListCreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import (HTTP_201_CREATED, HTTP_400_BAD_REQUEST)
from .serializer import QuestionSerializer


class AssignmentView(ListCreateAPIView):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()

    def get_queryset(self):
        queryset = Assignment.objects.all()
        username = self.request.query_params.get('username', None)
        graded_assignments_query = GradedAssignment.objects.filter(
            student__username=username)
        graded_assignments = [q.assignment for q in graded_assignments_query]
        filtered_queryset = [
            a for a in queryset if not a in graded_assignments]
        return filtered_queryset

    def create(self, request):
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            assignment = serializer.create(request)
            if assignment:
                return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)


class AssignmentDetailView(RetrieveUpdateAPIView):
    serializer_class = AssignmentSerializer
    queryset = Assignment.objects.all()


class QuestionsView(ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class GradedAssignmentsView(ListAPIView):
    serializer_class = GradedAssignmentSerializer
    queryset = GradedAssignment.objects.all()

    def get_queryset(self):
        queryset = GradedAssignment.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(student__username=username)
        return queryset


class GradedASsignmentsCreateView(CreateAPIView):
    serializer_class = GradedAssignmentSerializer
    queryset = GradedAssignment.objects.all()

    def create(self, request):
        print(request.data)
        serializer = GradedAssignmentSerializer(data=request.data)
        serializer.is_valid()
        graded_assignment = serializer.create(request)
        if graded_assignment:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)
