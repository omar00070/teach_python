from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from learnGrid.models import LearnItem, ListItem
from .serializers import LearnItemSerializer, ListItemSerializer


class LearnItemView(ModelViewSet):
    serializer_class = LearnItemSerializer
    queryset = LearnItem.objects.all()


class ListItemView(ListAPIView):
    serializer_class = ListItemSerializer
    queryset = ListItem.objects.all()
