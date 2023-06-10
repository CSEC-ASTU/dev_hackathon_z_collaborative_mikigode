from django.http import JsonResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.contrib.auth import update_session_auth_hash
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.models import Avg, Q, Count, Sum
from authentication.serializer import (
    PassChangeFormSerializer,
    RegistrationSerializer,
    UserSerializer,
    UpdateUserFormSerializer,
)
from authentication.decorators import admin_only
from authentication.utils import get_tokens_for_user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        print(token)
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def userRegister(request):
    username = request.data["username"]
    password = request.data["password"]
    users = User.objects.filter(username=username)
    if users.exists():
        return Response({"detail": "user is already exist with this username"}, status.HTTP_400_BAD_REQUEST)
    serializer_register_form = RegistrationSerializer(data=request.data)
    if serializer_register_form.is_valid():
        user = serializer_register_form.save()
        user.set_password(password)
        user.save()
        auth_data = get_tokens_for_user(user)
        auth_data["user"] = UserSerializer(user).data
        return Response(auth_data, status=status.HTTP_201_CREATED)
    return Response(serializer_register_form.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserData(request):
    return Response(UserSerializer(request.user).data, status=status.HTTP_200_OK)


@api_view(['PUT', 'POST'])
@permission_classes([IsAuthenticated])
def updatePersonalInfo(request):
    serializer_user_form = UpdateUserFormSerializer( data=request.data, instance=request.user)
    if not serializer_user_form.is_valid():
        return Response(serializer_user_form.errors, status.HTTP_400_BAD_REQUEST)
    user =  serializer_user_form.save()
    request.user.save()
    return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)


# ===========================================================================
@api_view(['PUT', 'POST'])
@permission_classes([IsAuthenticated])
def updatePassword(request):
    serializer_password_form = PassChangeFormSerializer(
        data=request.data, instance=request.user)
    if serializer_password_form.is_valid():
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")
        if not request.user.check_password(old_password):
            return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
        request.user.set_password(new_password)
        request.user.save()
        userSerializer = UserSerializer(request.user)
        return Response(userSerializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer_password_form.errors, status=status.HTTP_400_BAD_REQUEST)
# ===========================================================================




@api_view(['GET'])
@permission_classes([IsAuthenticated])
@admin_only
def getUsers(request):
    users_data = UserSerializer(User.objects.order_by("-date_joined"), many=True).data
    return Response(users_data, status=status.HTTP_200_OK)
