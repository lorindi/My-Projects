from django.contrib.auth import get_user_model
from django.db import models

from users.models import UserProfile

UserModel = get_user_model()

class Campaign(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='campaign_covers/')
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    creation_time = models.DateTimeField(auto_now_add=True, )
    youtube_link = models.URLField(null=True, blank=True)

    creator = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title
