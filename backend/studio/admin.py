from django.contrib import admin

from .models import Faq, Inquiry, Subscriber, Work


@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order', 'is_published')
    list_editable = ('order', 'is_published')
    list_filter = ('category',)


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
    list_display = ('question', 'order')
    list_editable = ('order',)


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'nature', 'date_or_season', 'created_at')
    list_filter = ('nature',)
    readonly_fields = ('created_at',)


admin.site.register(Subscriber)
