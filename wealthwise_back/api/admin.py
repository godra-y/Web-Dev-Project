from django.contrib import admin

from api.models import Category, Transaction


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'type', 'img')
    search_fields = ('name', 'type',)


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'category', 'amount', 'date', 'type')
    search_fields = ('name', 'category', 'amount', 'date', 'type',)
