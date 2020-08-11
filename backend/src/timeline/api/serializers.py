from rest_framework import serializers
from timeline.models import TimelineItem

class TimelineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimelineItem
        fields = ['id', 'title', 'description', 'content', 'date']