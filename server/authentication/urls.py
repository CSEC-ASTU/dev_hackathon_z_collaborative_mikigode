from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
# from api.api import OrderViewSet, ProductViewSet
from authentication import api


urlpatterns = [
    path('token/', api.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path("user", api.getUserData, name="user"),
    path("users/", api.getUsers, name="users"),
    path("register/", api.userRegister, name="register"),

    path('update/', api.updatePersonalInfo, name='update_user'),
    path('password/change/', api.updatePassword, name='update_password'),

]