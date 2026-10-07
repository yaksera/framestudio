from django.urls import path

from . import views

urlpatterns = [
    path('works/', views.WorkListView.as_view()),
    path('faqs/', views.FaqListView.as_view()),
    path('inquiries/', views.InquiryCreateView.as_view()),
    path('subscribe/', views.SubscribeView.as_view()),
]
