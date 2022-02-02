from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    biography = models.TextField(null=True)
    image = models.CharField(max_length=300, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'biography': self.biography,
            'image': self.image
        }

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
    category = models.ManyToManyField(Category, null=True)
    year = models.FloatField()
    likes = models.FloatField()
    description = models.TextField()
    image = models.CharField(max_length=300, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'author': self.author.name,
            'genre': self.category.name,
            'year': self.year,
            'description': self.description,
            'likes': self.likes,
            'image': self.image
        }