from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .models import Category, Transaction
from .serializers import CategorySerializer, TransactionSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def transaction_list(request):
    if request.method == 'GET':
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def transaction_detail(request, pk):
    try:
        transaction = Transaction.objects.get(pk=pk)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TransactionSerializer(transaction)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TransactionSerializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET', 'POST'])
# def category_list(request):
#     if request.method == 'GET':
#         categories = Category.objects.all()
#         serializer = CategorySerializer(categories, many=True)
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = CategorySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def category_detail(request, pk):
#     try:
#         category = Category.objects.get(pk=pk)
#     except Category.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = CategorySerializer(category)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = CategorySerializer(category, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         category.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#
#
# @api_view(['GET'])
# def category_transactions(request, pk):
#     try:
#         category = Category.objects.get(id=pk)
#     except Category.DoesNotExist as error:
#         return Response({'message': str(error)}, status=status.HTTP_400_BAD_REQUEST)
#
#     transactions = Transaction.objects.filter(category=category)
#     serializer = TransactionSerializer(transactions, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# def transaction_list(request):
#     if request.method == 'GET':
#         transactions = Transaction.objects.all()
#         serializer = TransactionSerializer(transactions, many=True)
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = TransactionSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class TransactionDetailAPIView(APIView):
#     def get_object(self, pk=None):
#         try:
#             transaction = Transaction.objects.get(id=pk)
#             return transaction
#         except Transaction.DoesNotExist as e:
#             return Response({"error": str(e)},
#                             status=status.HTTP_400_BAD_REQUEST)
#
#     def get(self, request, pk=None):
#         transaction = self.get_object(pk)
#         serializer = TransactionSerializer(transaction)
#         return Response(serializer.data)
#
#     def put(self, request, pk=None):
#         transaction = self.get_object(pk)
#         serializer = TransactionSerializer(
#             instance=transaction,
#             data=request.data
#         )
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors,
#                         status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk=None):
#         transaction = self.get_object(pk)
#         transaction.delete()
#         return Response({"deleted": True})
#
#
