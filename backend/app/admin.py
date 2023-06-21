from django.contrib import admin
from .models import answerModel

# Register your models here.

class answerAdmin(admin.ModelAdmin):
    list = ("title", "description","completed")
    
admin.site.register(answerModel, answerAdmin)