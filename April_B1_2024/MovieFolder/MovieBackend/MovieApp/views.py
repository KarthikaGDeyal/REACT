from django.shortcuts import render
from rest_framework import viewsets
from MovieApp.models import MovieDb
from MovieApp.serializers import MovieSerializer

# Create your views here.
class MovieViewset(viewsets.ModelViewSet):
    serializer_class=MovieSerializer
    queryset=MovieDb.objects.all()
    model=MovieDb
