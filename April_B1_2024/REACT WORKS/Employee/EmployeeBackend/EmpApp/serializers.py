from rest_framework import serializers
from EmpApp.models import EmpDb

class EmpSerializer(serializers.ModelSerializer):
    class Meta:
        model=EmpDb
        fields="__all__"
        read_only_fields=["id"]