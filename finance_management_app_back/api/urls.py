from django.urls import path
from api.views import (category_list, category_detail, transaction_list, transaction_detail)

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('transactions/', transaction_list),
    path('transactions/<int:pk>/', transaction_detail)

]