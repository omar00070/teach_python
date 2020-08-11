from django.db import models


class TimelineItem(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=300)
    content = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title
