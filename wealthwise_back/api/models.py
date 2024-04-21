from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=10, choices=[('income', 'Income'), ('expense', 'Expense')])
    img = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='categories',
        null=True, blank=True
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    type = models.CharField(max_length=10, choices=[('income', 'Income'), ('expense', 'Expense')])

    def __str__(self):
        return f"{self.category}: {self.amount}"

# class Budget(models.Model):
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     period = models.CharField(max_length=10, choices=[('daily', 'Daily'),
#                                               ('weekly', 'Weekly'), ('monthly', 'Monthly')])
#
#     def __str__(self):
#         return f"{self.period}: {self.amount}"
