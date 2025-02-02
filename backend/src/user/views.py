from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer
# from .models import User
from django.contrib.auth.models import User


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
