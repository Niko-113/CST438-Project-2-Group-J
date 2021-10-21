from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    isAdmin = models.BooleanField(default=False)

class Item(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=100, blank=True)

    url = models.CharField(max_length=100, blank=True)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)



class Wishlist(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    item_id = models.ForeignKey(Item, on_delete=models.CASCADE)


   
