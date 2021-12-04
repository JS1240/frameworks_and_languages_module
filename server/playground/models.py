from django.db import models
# WE define models classes for the app
# We use model classes to pull out data from the database and present it to user
# Create your models here.

class Item(models.Model):
    user_id = models.CharField(max_length=120)
    keywords = models.CharField(max_length=120)
    description = models.CharField(max_length=250)
    image = models.URLField('https://placekitten.com/200/300')

    def _str_(self):
        return self.user_id
