from django.db import models


class LearnItem(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()

    def __str__(self):
        return self.title


class ListItem(models.Model):
    content = models.TextField()
