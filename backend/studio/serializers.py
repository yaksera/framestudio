from rest_framework import serializers

from .models import Faq, Inquiry, Subscriber, Work


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ['id', 'title', 'description', 'category', 'image']


class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = ['id', 'question', 'answer']


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['name', 'email', 'nature', 'date_or_season', 'location', 'message']


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ['email']
        extra_kwargs = {'email': {'validators': []}}

    def create(self, validated_data):
        # Subscribing twice is not an error for the visitor.
        obj, _ = Subscriber.objects.get_or_create(email=validated_data['email'].lower())
        return obj
