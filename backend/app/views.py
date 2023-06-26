from django.shortcuts import render
from .serializers import answerSerializer 
from rest_framework import viewsets      
from .models import answerModel                 

class answerView(viewsets.ModelViewSet):  
    serializer_class = answerSerializer   
    queryset = answerModel.objects.all() 