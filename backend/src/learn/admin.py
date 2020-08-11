from django.contrib import admin
from .models import Assignment, Choice, GradedAssignment, Question

admin.site.register(Assignment)
admin.site.register(GradedAssignment)
admin.site.register(Question)
admin.site.register(Choice)
