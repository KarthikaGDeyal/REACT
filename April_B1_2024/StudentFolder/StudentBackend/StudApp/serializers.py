from rest_framework import serializers
from StudApp.models import StudentDb

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentDb
        fields = "__all__"
        read_only_fields = ["id"]