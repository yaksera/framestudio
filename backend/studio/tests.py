from django.core.management import call_command
from rest_framework.test import APITestCase

from .models import Inquiry, Subscriber


class ApiTests(APITestCase):
    def test_works_filter(self):
        call_command('seed', verbosity=0)
        self.assertEqual(len(self.client.get('/api/works/').json()), 6)
        data = self.client.get('/api/works/?category=weddings').json()
        self.assertTrue(data and all(w['category'] == 'weddings' for w in data))

    def test_faqs(self):
        call_command('seed', verbosity=0)
        self.assertTrue(self.client.get('/api/faqs/').json())

    def test_inquiry(self):
        r = self.client.post('/api/inquiries/', {
            'name': 'Clara & Julian', 'email': 'clara@domain.com',
            'nature': 'wedding', 'date_or_season': 'September 2025'}, format='json')
        self.assertEqual(r.status_code, 201)
        self.assertEqual(Inquiry.objects.count(), 1)

    def test_inquiry_invalid(self):
        r = self.client.post('/api/inquiries/', {'name': 'x', 'email': 'bad'}, format='json')
        self.assertEqual(r.status_code, 400)

    def test_subscribe_idempotent(self):
        for _ in range(2):
            r = self.client.post('/api/subscribe/', {'email': 'A@b.com'}, format='json')
            self.assertEqual(r.status_code, 201)
        self.assertEqual(Subscriber.objects.count(), 1)
