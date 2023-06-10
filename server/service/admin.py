from django.contrib import admin

from .models import (
    Category,
    Tag,
    Image,
    Comment,
    Contact,
    Subscriber,
    Faq,
)

# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ( 'name',)
    search_fields = ('name',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ( 'name',)


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('image',)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ( 'first_name','last_name','email', 'description', 'created')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ( 'first_name','last_name','email', 'description', 'created')


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ( 'email',"date")


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
    list_display = ( 'question','answer',"date")