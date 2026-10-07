from django.core.management.base import BaseCommand

from studio.models import Faq, Work

WORKS = [
    ('The Coastal Vows — Brittany Coast', 'Documentary elopement on rugged cliffs • France', 'weddings', '/images/coastal-vows.png'),
    ('Minimalist Atelier / Director Series', 'Fine art portrait series • London', 'portraits', '/images/director-series.png'),
    ('The Olive Grove Table — Puglia', 'Long-table celebration at golden hour • Italy', 'weddings', '/images/olive-grove.png'),
    ('Pottery', 'Studio studies of hands and clay • Florence', 'portraits', '/images/pottery.png'),
    ('Interior Home Design', 'Architectural publication & foundation campaign • Basel', 'editorial', '/images/interior.png'),
    ('Studio Studies with Clara M.', 'Architect at work, natural light • Paris', 'editorial', '/images/clara-m.png'),
]

FAQS = [
    ('How much will my visit cost?', 'Commissions begin with a private conversation about your vision. Wedding and elopement collections, portrait sessions and editorial assignments are each quoted individually. Request the studio dossier for current rates.'),
    ('Do you travel for commissions?', 'Yes. We are based between Paris and London and are available globally, including Nepal, the USA and Turkey this season.'),
    ('How far ahead should I book?', 'Dates for 2025 / 2026 are filling steadily. We recommend reaching out as soon as you have a projected season or venue.'),
    ('What do I receive at handover?', 'An heirloom folio: individually graded digital images, analog lab scans and a bound physical edition.'),
]


class Command(BaseCommand):
    help = 'Load the initial portfolio works and FAQs.'

    def handle(self, *args, **options):
        Work.objects.all().delete()
        Faq.objects.all().delete()
        for i, (title, desc, cat, img) in enumerate(WORKS):
            Work.objects.create(title=title, description=desc, category=cat, image=img, order=i)
        for i, (q, a) in enumerate(FAQS):
            Faq.objects.create(question=q, answer=a, order=i)
        self.stdout.write(self.style.SUCCESS('Seeded works and FAQs.'))
