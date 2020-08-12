from .views import AssignmentView, QuestionsView, GradedAssignmentsView, AssignmentDetailView
from django.urls import path


urlpatterns = [
    path('', AssignmentView.as_view()),
    path('<pk>/', AssignmentDetailView.as_view())
]
