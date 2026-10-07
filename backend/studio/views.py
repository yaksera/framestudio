from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.throttling import ScopedRateThrottle

from .models import Faq, Work
from .serializers import (FaqSerializer, InquirySerializer,
                          SubscriberSerializer, WorkSerializer)


class WorkListView(generics.ListAPIView):
    serializer_class = WorkSerializer
    pagination_class = None

    def get_queryset(self):
        qs = Work.objects.filter(is_published=True)
        category = self.request.query_params.get('category')
        return qs.filter(category=category) if category else qs


class FaqListView(generics.ListAPIView):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    pagination_class = None


class InquiryCreateView(generics.CreateAPIView):
    serializer_class = InquirySerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = 'form'

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return Response({'detail': 'Thank you. We will reply within 24 hours.'},
                        status=status.HTTP_201_CREATED)


class SubscribeView(generics.CreateAPIView):
    serializer_class = SubscriberSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = 'form'

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return Response({'detail': 'You are on the list.'}, status=status.HTTP_201_CREATED)
