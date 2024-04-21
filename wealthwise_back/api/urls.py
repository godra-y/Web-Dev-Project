from django.urls import path
from api.views import (category_list, category_detail, category_transactions,
                       TransactionListAPIView, TransactionDetailAPIView)

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/transactions/', category_transactions),
    path('transactions/', TransactionListAPIView.as_view()),
    path('transactions/<int:pk>/', TransactionDetailAPIView.as_view())
]