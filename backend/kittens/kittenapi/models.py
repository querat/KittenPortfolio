from django.db import models


class Kitten(models.Model):
    name = models.TextField(unique=True)
    breed = models.TextField()
