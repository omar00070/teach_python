from .serializers import TimelineItemSerializer
from timeline.models import TimelineItem
from rest_framework.viewsets import ModelViewSet

class TimelineView(ModelViewSet):
    serializer_class = TimelineItemSerializer
    queryset = TimelineItem.objects.all()
