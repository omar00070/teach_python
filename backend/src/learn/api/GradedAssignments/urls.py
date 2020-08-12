from django.urls import path
from learn.api.views import GradedAssignmentsView, GradedASsignmentsCreateView


urlpatterns = [
    path('', GradedAssignmentsView.as_view()),
    path('create/', GradedASsignmentsCreateView.as_view())
]
