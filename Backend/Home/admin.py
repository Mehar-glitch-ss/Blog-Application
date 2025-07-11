from django.contrib import admin

# Register your models here.
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display=('title', 'author', 'created_at', 'updated_at')
    search_fields=('title', 'author', 'content')
    list_filter=('created_at', 'author')
    ordering = ('-created_at',)
    
