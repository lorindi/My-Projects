from django.db import models
from users.models import UserProfile
from django.core.validators import MinLengthValidator


class CysticFibrosis(models.Model):
    CHOICES = (
        ('How is cystic fibrosis diagnosed?','How is cystic fibrosis diagnosed?'),
        ('How is cystic fibrosis treated?','How is cystic fibrosis treated?'),
        ('How does cystic fibrosis affect the body?','How does cystic fibrosis affect the body?'),
        ('What are the causes of cystic fibrosis?','What are the causes of cystic fibrosis?'),
        ('Frequently Asked Questions?','Frequently Asked Questions?'),
        ('Cystic fibrosis in fiction?','Cystic fibrosis in fiction?'),
        ('Cystic fibrosis for teachers?','CF for teachers?'),
        ('Life with cystic fibrosis?','Life with cystic fibrosis?'),
        ('Hobbies with cystic fibrosis?','Hobbies with cystic fibrosis?'),
        ('Everyday life with cystic fibrosis?','Everyday life with cystic fibrosis?'),
        ('Physical activity with cystic fibrosis?','Physical activity with cystic fibrosis?'),
        ('Optimal nutrition in cystic fibrosis?','Optimal nutrition in cystic fibrosis?'),
        ('Career with cystic fibrosis?','Career with cystic fibrosis?'),
        ('Young people with cystic fibrosis?','Young people with cystic fibrosis?'),
        ('Variety in treatment?','Variety in treatment?'),
        ('Parents and children with cystic fibrosis?','Parents and children with cystic fibrosis?'),
        ('Psychological health with cystic fibrosis?','Psychological health with cystic fibrosis?'),
    )
    title = models.CharField(
        verbose_name='Title',
        max_length=100,
        unique=True,
        choices=CHOICES,
        null=False,
        blank=False,
    )
    cover_image = models.ImageField(
        verbose_name='Cover image',
        upload_to='donation_covers/',
        null=False,
        blank=False,
    )
    description = models.TextField(
        verbose_name='Description',
        max_length=5000,
        validators=[MinLengthValidator(1)],
        null=False,
        blank=False,
    )
    image = models.ImageField(
        verbose_name='Image',
        upload_to='donation_covers/',
        blank=True,
        null=True,
    )
    youtube_link = models.URLField(null=True, blank=True)

    creation_time = models.DateTimeField(auto_now_add=True, )
    date_modified = models.DateTimeField(auto_now=True, )

    creator = models.ForeignKey(
        UserProfile,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.title