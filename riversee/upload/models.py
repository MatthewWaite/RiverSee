from django.db import models

# Create your models here.
class Upload(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    video_link = models.URLField()