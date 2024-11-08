from django.db import models

# Create your models here.
class MovieDb(models.Model):
    Title=models.CharField(max_length=100)
    Director=models.CharField(max_length=100)
    Language=models.CharField(max_length=100)
    Year=models.CharField(max_length=100)

    def __str__(self):
        return self.Title




