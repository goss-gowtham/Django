from django.db import models

# Create your models here.
class School(models.Model):
    school_name = models.CharField(max_length=200)
    school_code = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    started_date = models.DateField(auto_now_add=False)
    number_of_students = models.IntegerField()

def __str__(self):
        return '%s' % (self.school_name)
