from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import status
from django.db.models import  Q

from authentication.serializer import UserSerializer
from authentication.decorators import admin_only
from blog.models import Blog
from blog.utils import get_blog_list_data


from service.models import (
    Faq,
    Image,
    Category,
    Tag,
    Image,
    Contact,
)

from service.serializer import (
    CategorySerializer,
    TagSerializer,
    ContactSerializer,
    SubscriberSerializer,
    FaqSerializer,
)

@api_view(['GET'])
def searchItems(request):
    if not "search" in request.GET:
        return Response({}, status=status.HTTP_200_OK)

    search = request.GET["search"]
    serialized_data = {}

    blogs = Blog.objects.order_by("-published").filter(
        Q(category__name__icontains=search) |
        Q(title__icontains=search) |
        Q(headline__icontains=search) |
        Q(body__icontains=search),
    )
    serialized_data["blogs"] = get_blog_list_data(request, blogs)

    if request.user.is_superuser:
        users = User.objects.filter(
            Q(first_name__icontains=search) |
            Q(last_name__icontains=search) |
            Q(username__icontains=search)
        )
        serialized_data["users"] = UserSerializer(users, many=True).data

    return Response(serialized_data, status=status.HTTP_200_OK)

# =================================================================================

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@admin_only
def removeImage(request):
    image = Image.objects.get(id=request.data.get("id"))
    image.delete()
    return Response({"success": "image is deleted"}, status=status.HTTP_202_ACCEPTED)

# =================================================================================
@api_view(['GET'])
def categories(request):
    categories = CategorySerializer(Category.objects.all(), many=True).data
    return Response(categories, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@admin_only
def addCategory(request):
    category_serializer = CategorySerializer(data=request.data)
    if category_serializer.is_valid():
        category = category_serializer.save()
        serialized_data = CategorySerializer(category).data
        return Response(serialized_data, status=status.HTTP_201_CREATED)
    return Response(category_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST', 'PUT'])
@permission_classes([IsAuthenticated])
@admin_only
def updateCategory(request):
    category = Category.objects.get(id=request.data.get("id"))
    category_serializer = CategorySerializer(data=request.data, instance=category)
    if category_serializer.is_valid():
        category = category_serializer.save()
        serialized_data = CategorySerializer(category).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(category_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@admin_only
def deleteCategory(request):
    category = Category.objects.get(id=request.data.get("id"))
    category.delete()
    return Response({"success": "deleted successful"}, status=status.HTTP_202_ACCEPTED)

# =================================================================================
@api_view(['GET'])
def tags(request):
    tags = TagSerializer(Tag.objects.all(), many=True).data
    return Response(tags, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@admin_only
def addTag(request):
    tag_serializer = TagSerializer(data=request.data)
    if tag_serializer.is_valid():
        tag = tag_serializer.save()
        serialized_data = TagSerializer(tag).data
        return Response(serialized_data, status=status.HTTP_201_CREATED)
    return Response(tag_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


@api_view(['POST', 'PUT'])
@permission_classes([IsAuthenticated])
@admin_only
def updateTag(request):
    tag = Tag.objects.get(id=request.data.get("id"))
    tag_serializer = TagSerializer(data=request.data, instance=tag)
    if tag_serializer.is_valid():
        tag = tag_serializer.save()
        serialized_data = TagSerializer(tag).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(tag_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@admin_only
def deleteTag(request):
    tag = Tag.objects.get(id=request.data.get("id"))
    tag.delete()
    return Response({"success": "deleted successful"}, status=status.HTTP_202_ACCEPTED)
# =================================================================================

@api_view(['GET'])
@admin_only
def getAllContacts(request):
    contacts = ContactSerializer(Contact.objects.all(), many=True).data
    return Response(contacts, status=status.HTTP_200_OK)



@api_view(['POST'])
def addContact(request):
    contact_serializer = ContactSerializer(data=request.data)
    if contact_serializer.is_valid():
        contact = contact_serializer.save()
        serialized_data = ContactSerializer(contact).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(contact_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getFaq(request):
    faq = FaqSerializer(Faq.objects.all(), many=True).data
    return Response(faq, status=status.HTTP_200_OK)


@api_view(['POST'])
@admin_only
def addFaq(request):
    faq_serializer = FaqSerializer(data=request.data)
    if faq_serializer.is_valid():
        faq = faq_serializer.save()
        serialized_data = FaqSerializer(faq).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(faq_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','POST'])
@admin_only
def updateFaq(request):
    faq = Faq.objects.get(id=request.data.get("id"))
    faq_serializer = FaqSerializer(data=request.data, instance=faq)
    if faq_serializer.is_valid():
        faq = faq_serializer.save()
        serialized_data = FaqSerializer(faq).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(faq_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@admin_only
def deleteFaq(request):
    faq = Faq.objects.get(id=request.data.get("id"))
    faq.delete()
    return Response({"success": "deleted"}, status=status.HTTP_202_ACCEPTED)


@api_view(['POST'])
def addSubscriber(request):
    subscriber_serializer = SubscriberSerializer(data=request.data)
    if subscriber_serializer.is_valid():
        subscriber = subscriber_serializer.save()
        serialized_data = SubscriberSerializer(subscriber).data
        return Response(serialized_data, status=status.HTTP_202_ACCEPTED)
    return Response(subscriber_serializer.errors, status=status.HTTP_400_BAD_REQUEST)