from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

from django.conf import settings
import os
# Create your models here.


class Category(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def get_blogs(self):
        return self.blog_set.all()

    def get_published_blogs(self):
        return self.blog_set.filter(status="published")

    def __str__(self):
        return f"{self.name}"


class Tag(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def get_blogs(self):
        return self.blog_set.all()

    def get_published_blogs(self):
        return self.blog_set.filter(status="published")

    def __str__(self):
        return f"{self.name}"



class Image(models.Model):
    image = models.ImageField(null=True, blank=True,
                              upload_to="product-images")
    def delete(self, *args, **kwargs):
        try:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.image.name))
        except:
            pass
        super(Image,self).delete(*args,**kwargs)


    def __str__(self):
        return f"{self.image.name}"


class Comment(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    description = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f'{self.first_name} {self.last_name} -> {self.description}'


class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    description = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    PHONE_REGEX = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(
        validators=[PHONE_REGEX], max_length=17)
    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return f'{self.first_name} {self.last_name} -> {self.description}'


class Faq(models.Model):
    question = models.CharField(max_length=100)
    answer = models.TextField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email}'


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email}'