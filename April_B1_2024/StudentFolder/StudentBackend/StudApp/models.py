from django.db import models
class StudentDb(models.Model):
    Name=models.CharField(max_length=100)
    Age=models.CharField(max_length=100)
    Place=models.CharField(max_length=100)
    MobileNo=models.CharField(max_length=100)
    Course = models.CharField(max_length=100)
    College = models.CharField(max_length=100)
    def __str__(self):
        return self.Name