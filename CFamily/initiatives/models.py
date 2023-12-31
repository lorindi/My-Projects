from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class Initiative(models.Model):
    title = models.CharField(max_length=200, null=False,
                             blank=False)
    description = models.TextField(null=False,
                                   blank=False)
    purpose = models.TextField(null=True,
                               blank=True)
    creation_time = models.DateTimeField(auto_now_add=True, )
    image = models.ImageField(upload_to='initiative_covers/')
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()

    youtube_link = models.URLField(null=True, blank=True)
    creator = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title


class InitiativeRegistration(models.Model):
    initiative = models.ForeignKey('Initiative', on_delete=models.CASCADE)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)

    registration_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Registration by {self.user.username} for {self.initiative.title}"
