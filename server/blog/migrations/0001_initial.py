# Generated by Django 4.2.2 on 2023-06-07 08:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('headline', models.CharField(max_length=255)),
                ('slug', models.SlugField(unique=True)),
                ('body', models.TextField(blank=True, null=True)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='blog-thumbnails')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('published', models.DateTimeField(blank=True, null=True)),
                ('views', models.PositiveIntegerField(blank=True, default=0)),
                ('pin_to_top', models.BooleanField(default=False)),
                ('status', models.CharField(blank=True, choices=[('published', 'Published'), ('scheduled', 'Scheduled'), ('draft', 'Draft'), ('deleted', 'Deleted')], default='draft', max_length=20, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='service.category')),
                ('comments', models.ManyToManyField(blank=True, to='service.comment')),
                ('tags', models.ManyToManyField(blank=True, to='service.tag')),
            ],
            options={
                'verbose_name': 'blog',
                'ordering': ['-published', '-updated', '-created'],
            },
        ),
    ]