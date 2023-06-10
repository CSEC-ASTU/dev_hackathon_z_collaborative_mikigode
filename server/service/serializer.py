from rest_framework import serializers
from django.contrib.auth.models import User
import django.contrib.auth.password_validation as validators


from service.models import (
    Image,
    Category,
    Tag,
    Image,
    Contact,
    Subscriber,
    Faq,
)


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
        max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Image
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"



class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = "__all__"


class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = "__all__"