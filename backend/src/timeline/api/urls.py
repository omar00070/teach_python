from rest_framework.routers import DefaultRouter
from .views import TimelineView

router = DefaultRouter()
router.register(r'', TimelineView)

urlpatterns = router.urls

