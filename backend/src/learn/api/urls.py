from .views import AssignmentView, QuestionsView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'questions/questions', QuestionsView, basename="questions")
router.register(r'', AssignmentView, basename="assigments")

urlpatterns = router.urls
