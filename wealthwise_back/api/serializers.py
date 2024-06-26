from rest_framework import serializers
from .models import Category, Transaction, User, UserProfile


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'type', 'img']


class TransactionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    date = serializers.DateField()
    type = serializers.ChoiceField(choices=[('income', 'Income'), ('expense', 'Expense')])

    def create(self, validated_data):
        return Transaction.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.category = validated_data.get('category', instance.category)
        instance.amount = validated_data.get('amount', instance.amount)
        instance.date = validated_data.get('date', instance.date)
        instance.type = validated_data.get('type', instance.type)
        instance.save()
        return instance

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than zero.")
        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


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
