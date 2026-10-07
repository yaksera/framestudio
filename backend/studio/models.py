from django.db import models


class Work(models.Model):
    class Category(models.TextChoices):
        WEDDINGS = 'weddings', 'Weddings & Elopements'
        PORTRAITS = 'portraits', 'Fine Art Portraits'
        EDITORIAL = 'editorial', 'Editorial & Corporate'

    title = models.CharField(max_length=160)
    description = models.CharField(max_length=240)
    category = models.CharField(max_length=20, choices=Category.choices)
    image = models.CharField(max_length=255, help_text='Path or URL of the image')
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title


class Faq(models.Model):
    question = models.CharField(max_length=240)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'FAQ'

    def __str__(self):
        return self.question


class Inquiry(models.Model):
    class Nature(models.TextChoices):
        WEDDING = 'wedding', 'Wedding / Elopement'
        PORTRAIT = 'portrait', 'Portrait / Artist'
        CORPORATE = 'corporate', 'Corporate / Editorial'

    name = models.CharField(max_length=160)
    email = models.EmailField()
    nature = models.CharField(max_length=20, choices=Nature.choices)
    date_or_season = models.CharField(max_length=120)
    location = models.CharField(max_length=160, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'inquiries'

    def __str__(self):
        return f'{self.name} <{self.email}>'


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
