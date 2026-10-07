# Frame Studio

Landing page for Frame Studio, a fine art editorial and documentary photography studio.

- `frontend/`: Next.js (App Router) + GSAP (ScrollTrigger reveals, parallax, hero intro, filter and accordion animations)
- `backend/`: Django + Django REST Framework API for portfolio works, FAQs, commission inquiries and newsletter signups

## Backend

```bash
cd backend
python -m venv .venv
.venv/Scripts/activate        # Windows  (macOS/Linux: source .venv/bin/activate)
pip install -r requirements.txt
python manage.py migrate
python manage.py seed           # loads portfolio works + FAQs
python manage.py createsuperuser
python manage.py runserver 8000
```

Admin: http://localhost:8000/admin (manage works, FAQs, read inquiries and subscribers).

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/works/?category=weddings\|portraits\|editorial` | Portfolio works |
| GET | `/api/faqs/` | FAQ entries |
| POST | `/api/inquiries/` | Commission inquiry form |
| POST | `/api/subscribe/` | Private print drops newsletter |

Production env vars: `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=0`, `DJANGO_ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`.

## Frontend

```bash
cd frontend
cp .env.example .env.local      # NEXT_PUBLIC_API_URL=http://localhost:8000/api
npm install
npm run dev
```

The page ships with bundled copies of the works and FAQs, so it still renders if the API is offline; forms need the API.
