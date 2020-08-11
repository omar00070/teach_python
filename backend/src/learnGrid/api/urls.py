from rest_framework.routers import DefaultRouter
from .views import LearnItemView, ListItemView
from django.urls import path

router = DefaultRouter()
router.register(r"", LearnItemView)

urlpatterns = [path('listitem/', ListItemView.as_view())] + router.urls
