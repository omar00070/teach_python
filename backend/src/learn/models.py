from django.db import models
from django.contrib.auth.models import User


class Assignment(models.Model):
    title = models.CharField(max_length=50)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class GradedAssignment(models.Model):
    student = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()

    def __str__(self):
        return self.title


class Choice(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=200)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name="answer", null=True, blank=True)
    choices = models.ManyToManyField(Choice)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.CASCADE, related_name="questions", null=True, blank=True)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question
