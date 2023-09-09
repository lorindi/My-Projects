from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    start_hour = models.TimeField()
    end_hour = models.TimeField()
    location = models.CharField(max_length=200)
    organizers = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='event_covers/')
    slide_presentation = models.FileField(upload_to='event_presentations/', null=True, blank=True)
    topics = models.TextField()
    contact_information = models.TextField()
    youtube_link = models.URLField(null=True, blank=True)
    participants = models.ManyToManyField(UserModel, through='EventRegistration')


    def __str__(self):
        return self.title


class EventRegistration(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} registered for {self.event.title}"