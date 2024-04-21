from django.urls import path
from api.views import (category_list, category_detail, category_transactions,
                       TransactionListAPIView, TransactionDetailAPIView, UserSignUpAPIView)
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/transactions/', category_transactions),
    path('transactions/', TransactionListAPIView.as_view()),
    path('transactions/<int:pk>/', TransactionDetailAPIView.as_view()),
    path('signup/', UserSignUpAPIView.as_view()),
]