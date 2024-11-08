from django.shortcuts import render
from rest_framework import viewsets
from EmpApp.models import EmpDb
from EmpApp.serializers import EmpSerializer

# Create your views here.
class EmployeeViewset(viewsets.ModelViewSet):
    serializer_class=EmpSerializer
    queryset=EmpDb.objects.all()
    model=EmpDb

