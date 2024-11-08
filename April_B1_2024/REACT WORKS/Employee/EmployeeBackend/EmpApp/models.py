from django.db import models

# Create your models here.
class EmpDb(models.Model):
    Name=models.CharField(max_length=100)
    Position=models.CharField(max_length=100)
    Location=models.CharField(max_length=100)
    Age=models.CharField(max_length=100)

    def __str__(self):
        return self.Name
