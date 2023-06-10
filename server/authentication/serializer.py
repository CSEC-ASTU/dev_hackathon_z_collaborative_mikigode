from rest_framework import serializers
from django.contrib.auth.models import User
import django.contrib.auth.password_validation as validators
# ===========================================================================


class RegistrationSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

# ===========================================================================


class PassChangeFormSerializer(serializers.ModelSerializer):
    old_password = serializers.CharField(
        required=True, style={'input_type': 'password'}, write_only=True)
    new_password = serializers.CharField(
        required=True, style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['old_password', 'new_password']
        extra_kwargs = {
            'old_password': {'write_only': True},
            'new_password': {'write_only': True},
        }

# ===========================================================================

class UpdateUserFormSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(allow_blank=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name',"username","email"]

# ===========================================================================

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name',
                  'email', 'is_superuser', 'date_joined']

    # def __init__(self,user, *args, **kwargs):
    #     profile = Profile.objects.get(user=user)
    #     serializer = ProfileSerializer(profile)
    #     self.fields["profile"] = serializer.data
    #     super().__init__(*args, **kwargs)
