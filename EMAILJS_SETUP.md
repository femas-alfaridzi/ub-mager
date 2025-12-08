# Setup EmailJS untuk Form Contact

Berikut langkah-langkah untuk mengintegrasikan EmailJS dengan form contact Anda:

## 1. Daftar di EmailJS

1. Buka website: https://www.emailjs.com/
2. Klik **Sign Up** dan daftar dengan akun gratis
3. Verifikasi email Anda

## 2. Setup Email Service

1. Setelah login, pergi ke **Email Services**
2. Klik **Add New Service**
3. Pilih email provider (Gmail, Outlook, dll)
4. Untuk Gmail:
   - Pilih **Gmail** sebagai service
   - Berikan akses ke akun Gmail Anda
   - Konfirmasi pemberian akses
5. Salin **Service ID** (format: `service_xxxxx`)

## 3. Buat Email Template

1. Pergi ke **Email Templates**
2. Klik **Create New Template**
3. Setup template dengan field berikut:

**Template Content:**
```
From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

4. Salin **Template ID** (format: `template_xxxxx`)

## 4. Dapatkan Public Key

1. Pergi ke **Account Settings**
2. Tab **API Keys**
3. Salin **Public Key** (format: `xxxxx...`)

## 5. Update Credentials di File

Edit file `src/app/contact/page.tsx` dan ganti placeholder berikut:

```tsx
// Prefer using environment variables (recommended for Vercel)
// Add the following environment variables in your Vercel project or local .env:
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// NEXT_PUBLIC_EMAILJS_SERVICE_ID
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
// NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL

// The code in `src/app/contact/page.tsx` will read these env vars and fall back to
// the placeholder values if they are not set. Example (no changes needed if you set env vars):
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key');
```

**Contoh hasil akhir:**
```tsx
emailjs.init('abc123def456xyz789');

await emailjs.send(
  'service_a1b2c3d4e5f6', 
  'template_x1y2z3a4b5c6',
  ...
);
```

## 6. Test Form

1. Jalankan dev server: `npm run dev`
2. Buka halaman Contact: http://localhost:3000/contact
3. Isi form dan kirim
4. Cek email Anda (check juga folder Spam)
5. Email dari form seharusnya masuk!

## 7. Deploy ke Vercel

1. Push code ke GitHub
2. Buka https://vercel.com
3. Klik **New Project**
4. Pilih repository GitHub Anda
5. Deploy otomatis, selesai!

### Menambahkan Environment Variables di Vercel

1. Di dashboard Vercel, buka project Anda → `Settings` → `Environment Variables`.
2. Tambahkan variabel berikut (untuk `Production` dan `Preview`):
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your EmailJS Public Key
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = service_xxxxx
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = template_xxxxx
  - `NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL` = your@email.com
3. Redeploy project (trigger a new deploy) agar variabel baru diterapkan.

---

## Limit Gratis EmailJS
- ✅ 200 email per bulan
- ✅ Unlimited projects
- ✅ Support semua email providers

Jika perlu lebih, upgrade ke plan berbayar.

---

## Troubleshooting

### Email tidak masuk?
- Cek Spam folder
- Pastikan credentials benar di `.tsx` file
- Cek console browser untuk error message

### Credentials error?
- Pastikan Public Key, Service ID, dan Template ID benar
- Tidak ada spasi extra di awal/akhir

### Form tidak submit?
- Buka browser console (F12)
- Lihat error message yang muncul
- Cek apakah semua placeholder sudah diganti

---

Semuanya sudah siap! Package `@emailjs/browser` sudah terinstall. 
Tinggal ikuti langkah di atas untuk mendapatkan credentials dan update file.
