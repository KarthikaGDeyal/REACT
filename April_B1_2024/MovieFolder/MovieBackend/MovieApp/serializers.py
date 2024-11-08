from rest_framework import serializers
from MovieApp.models import MovieDb

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieDb
        fields = "__all__"
        read_only_fields = ["id"]
