from allauth.account.adapter import get_adapter
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework.authtoken.models import Token


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")


# class CustomRegisterSerializer(RegisterSerializer):
#     is_student = serializers.BooleanField()
#     is_teacher = serializers.BooleanField()

#     class Meta:
#         model = User
#         fields = ('email', 'username', 'password', 'is_student', 'is_teacher')

#     def get_cleaned_data(self):
#         return{
#             'username': self.validated_data.get('username', ''),
#             'password1': self.validated_data.get('password1', ''),
#             'password2': self.validated_data.get('password2', ''),
#             'email': self.validated_data.get('email', ''),
#             'is_student': self.validated_data.get('is_student', ''),
#             'is_teacher': self.validated_data.get('is_teacher', ''),
#         }

#     def save(self, request):
#         adapter = get_adapter()
#         user = adapter.new_user(request)
#         self.cleaned_data = self.get_cleaned_data()
#         user.is_student = self.cleaned_data.get('is_student')
#         user.is_teacher = self.cleaned_data.get('is_teacher')
#         user.save()
#         adapter.save_user(request, user, self)
#         return user


class TokenSerializer(serializers.ModelSerializer):
    # email = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user')

    # def get_email(self, obj):
    #     serializer_data = UserSerializer(obj.user.email).data
    #     return serializer_data
