from rest_framework import serializers
from learnGrid.models import LearnItem
from learnGrid.models import ListItem


class LearnItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearnItem
        fields = ["id", 'title', 'description']


class ListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListItem
        fields = ["id", "content"]
