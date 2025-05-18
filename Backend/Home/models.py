from django.db import models
from django.utils.text import slugify

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=255)
    content=models.TextField()
    image = models.ImageField(upload_to="images")
    author=models.CharField(max_length=300)
    slug=models.SlugField(max_length=255, unique=True, blank=True)
    tags=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  

    def save(self, *args, **kwargs):
        if not self.slug:
            #generating unique slug based on title
            slug=slugify(self.title)
            unique_slug=slug
            number=1
            while Blog.objects.filter(slug=unique_slug).exists():
                unique_slug=f"{slug}-{number}"
                number+=1
            self.slug=unique_slug
        super().save(*args, **kwargs)
    def __str__(self):
        return self.title