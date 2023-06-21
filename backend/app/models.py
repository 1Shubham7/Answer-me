from django.db import models

# Create your models here.

class answerModel(models.Model):
    title: models.CharField()
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title