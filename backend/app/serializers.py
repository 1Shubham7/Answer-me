from rest_framework import serializers
from .models import answerModel

class answerSerializer(serializers.ModelSerializer):
    class Meta:
        model = answerModel
        fields = ('id', 'title', 'description' ,'completed')