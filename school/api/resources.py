from tastypie.resources import ModelResource
from api.models import School
from tastypie.authorization import Authorization

class SchoolResource(ModelResource):
    class Meta:
        queryset = School.objects.all()
        resource_name = 'school'
        authorization = Authorization()
