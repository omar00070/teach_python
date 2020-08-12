from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/timeline/', include('timeline.api.urls')),
    path('api/learngrid/', include('learnGrid.api.urls')),
    path('api/user/', include('user.urls')),
    path('api/assignments/', include('learn.api.urls')),
    path('api/graded/', include('learn.api.GradedAssignments.urls'))
]
