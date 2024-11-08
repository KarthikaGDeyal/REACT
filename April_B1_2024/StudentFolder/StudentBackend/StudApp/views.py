from django.shortcuts import render
from rest_framework import viewsets
from StudApp.models import StudentDb
from StudApp.serializers import StudentSerializer

# Create your views here.
class StudentViewset(viewsets.ModelViewSet):
    serializer_class=StudentSerializer
    queryset=StudentDb.objects.all()
    model=StudentDb
