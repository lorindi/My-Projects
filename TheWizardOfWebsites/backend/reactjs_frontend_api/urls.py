from django.urls import path

from reactjs_frontend_api.views import ProfileApiView

urlpatterns = [
 path('api', ProfileApiView.as_view()),

]
