from email.policy import default
from django.db import models
from django.db.models.fields.files import ImageField
from django.contrib.postgres.fields import ArrayField
# WE define models classes for the app
# We use model classes to pull out data from the database and present it to user
# Create your models here.


class Item(models.Model):
    user_id = models.CharField(max_length=120)
    keywords = models.CharField(max_length=120)
    description = models.CharField()
    image = models.CharField(max_length=500, blank=True,
                             null=True, default="https://placekitten.com/200/300")
    lat = models.DecimalField(max_digits=12, decimal_places=9)
    lon = models.DecimalField(max_digits=12, decimal_places=9)
    date_from = models.DateTimeField()
    date_to = models.DateTimeField()

    def _str_(self):
        return self.user_id
