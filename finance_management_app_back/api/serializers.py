from rest_framework import serializers
from .models import Category, Transaction


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'type', 'img']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'category', 'amount', 'date', 'type']
        read_only_fields = ['id']

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than zero.")
        return value


# class CategorySerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField(max_length=100)
#     type = serializers.ChoiceField(choices=[('income', 'Income'), ('expense', 'Expense')])
#     img = serializers.CharField(max_length=100, allow_blank=True, required=False)
#
#     def create(self, validated_data):
#         return Category.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.type = validated_data.get('type', instance.type)
#         instance.img = validated_data.get('img', instance.img)
#         instance.save()
#         return instance
#
#     def validate_type(self, value):
#         if value not in ['income', 'expense']:
#             raise serializers.ValidationError("Type must be 'income' or 'expense'.")
#         return value
#
#
# class BudgetSerializer(serializers.Serializer):
#     amount = serializers.DecimalField(max_digits=10, decimal_places=2)
#     period = serializers.ChoiceField(choices=[('daily', 'Daily'), ('weekly', 'Weekly'), ('monthly', 'Monthly')])
#
#     def create(self, validated_data):
#         return Budget.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.amount = validated_data.get('amount', instance.amount)
#         instance.period = validated_data.get('period', instance.period)
#         instance.save()
#         return instance
#
#
# class TransactionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Transaction
#         fields = ['id', 'category', 'amount', 'date', 'type']
#         read_only_fields = ['id']
#
#     def validate_amount(self, value):
#         if value <= 0:
#             raise serializers.ValidationError("Amount must be greater than zero.")
#         return value
