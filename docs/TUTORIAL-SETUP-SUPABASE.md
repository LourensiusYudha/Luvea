# Tutorial Setup Supabase — FORM MR HOREKA

Panduan lengkap dari nol sampai database siap dihubungkan ke Next.js.

| Item | Nilai |
|------|--------|
| Produk | FORM MR HOREKA Web (SurveyMR) |
| Skema SQL | `supabase/migrations/20260715_form_mr_horeka.sql` |
| PRD | `PRD-Indomaret-Member-Survey.md` |
| Estimasi waktu | 20–40 menit |

---

## Daftar isi

1. [Persiapan](#1-persiapan)
2. [Buat akun & project Supabase](#2-buat-akun--project-supabase)
3. [Jalankan skema SQL](#3-jalankan-skema-sql)
4. [Verifikasi tabel, enum, storage](#4-verifikasi-tabel-enum-storage)
5. [Aktifkan Authentication](#5-aktifkan-authentication)
6. [Buat user Advisor & SPV](#6-buat-user-advisor--spv)
7. [Set role di tabel profiles](#7-set-role-di-tabel-profiles)
8. [Ambil API keys untuk Next.js](#8-ambil-api-keys-untuk-nextjs)
9. [Uji cepat di Table Editor](#9-uji-cepat-di-table-editor)
10. [Checklist selesai](#10-checklist-selesai)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. Persiapan

Siapkan:

- [ ] Akun email (sebaiknya email kerja, bukan pribadi jika kebijakan IT mengharuskan)
- [ ] Browser Chrome/Edge
- [ ] File SQL: `supabase/migrations/20260715_form_mr_horeka.sql`
- [ ] Daftar nama Advisor yang akan dibuatkan akun (contoh: Galuh, Hendra, Roby, Adam)
- [ ] 1 akun untuk SPV uji coba
- [ ] Approval IT (jika wajib) bahwa data boleh di cloud Supabase

**Catatan free tier:**
- Project bisa **pause** jika lama tidak dipakai → tinggal restore
- Storage & database terbatas → foto wajib di-compress di aplikasi

---

## 2. Buat akun & project Supabase

### 2.1 Daftar / login

1. Buka: [https://supabase.com](https://supabase.com)
2. Klik **Start your project** / **Sign in**
3. Login dengan GitHub atau email (pilih yang mudah diingat untuk maintenance)

### 2.2 Buat Organization (jika belum ada)

1. Masuk Dashboard
2. Buat Organization (contoh nama: `Indogrosir-Horeka` atau `IT-Cabang`)
3. Plan: **Free**

### 2.3 Buat Project

1. Klik **New project**
2. Isi:

| Field | Contoh / saran |
|-------|----------------|
| **Name** | `form-mr-horeka` |
| **Database Password** | Buat password kuat → **SIMPAN di password manager** |
| **Region** | Pilih terdekat (mis. `Southeast Asia (Singapore)`) |
| **Pricing Plan** | Free |

3. Klik **Create new project**
4. Tunggu 1–2 menit sampai status **Project is ready**

> Password database ini untuk akses Postgres langsung (bukan untuk login Advisor di aplikasi). Jangan hilangkan.

---

## 3. Jalankan skema SQL

Ini langkah paling penting: membuat tabel, enum, RLS, storage, trigger.

### 3.1 Buka SQL Editor

1. Di sidebar kiri: **SQL** → **SQL Editor**
2. Klik **New query**

### 3.2 Paste & Run migrasi

1. Buka file lokal:
   ```
   supabase/migrations/20260715_form_mr_horeka.sql
   ```
2. **Select All** → Copy
3. Paste ke SQL Editor Supabase
4. Klik **Run** (atau `Ctrl/Cmd + Enter`)

### 3.3 Hasil yang diharapkan

Di bagian bawah SQL Editor muncul status sukses (hijau), misalnya:

- `Success. No rows returned`
- atau beberapa notice tanpa error merah

Jika ada **error merah**, lihat [Troubleshooting](#11-troubleshooting). Jangan lanjut sebelum SQL sukses.

---

## 4. Verifikasi tabel, enum, storage

### 4.1 Cek tabel

Sidebar → **Table Editor**

Harus ada minimal:

| Tabel | Isi awal |
|-------|----------|
| `profiles` | Kosong (terisi otomatis saat user dibuat) |
| `visits` | Kosong |
| `visit_photos` | Kosong |

### 4.2 Cek Storage bucket

Sidebar → **Storage**

Harus ada bucket:

| Bucket | Public | Keterangan |
|--------|--------|------------|
| `visit-photos` | **No** (private) | Untuk foto toko |

Klik bucket → pastikan tidak di-set Public.

### 4.3 Cek RLS aktif

Sidebar → **Authentication** belum dulu; cek via SQL:

1. SQL Editor → New query
2. Jalankan:

```sql
select tablename, rowsecurity
from pg_tables
where schemaname = 'public'
  and tablename in ('profiles', 'visits', 'visit_photos');
```

Hasil yang benar: `rowsecurity = true` untuk ketiga tabel.

### 4.4 Cek enum (opsional)

```sql
select t.typname as enum_name, e.enumlabel as value
from pg_type t
join pg_enum e on t.oid = e.enumtypid
join pg_catalog.pg_namespace n on n.oid = t.typnamespace
where n.nspname = 'public'
order by t.typname, e.enumsortorder;
```

Pastikan ada enum seperti: `visit_type`, `get_keterangan`, `rkm_keterangan`, `review_status`, dll.

---

## 5. Aktifkan Authentication

### 5.1 Email / Password

1. Sidebar → **Authentication** → **Providers**
2. Buka **Email**
3. Pastikan **Enable Email provider** = ON
4. Rekomendasi untuk internal MVP:

| Setting | Saran MVP |
|---------|-----------|
| Confirm email | **OFF** dulu (lebih mudah uji internal) |
| Secure email change | ON |
| Secure password change | ON |

5. **Save**

> Jika Confirm email ON, setiap user baru harus klik link email dulu. Untuk tim internal sering lebih ribet di awal.

### 5.2 URL konfigurasi (penting nanti saat Next.js)

1. **Authentication** → **URL Configuration**
2. Isi sementara:

| Field | Nilai awal |
|-------|------------|
| Site URL | `http://localhost:3000` |
| Redirect URLs | `http://localhost:3000/**` |

Setelah deploy Vercel, tambahkan juga:

```
https://NAMA-PROJECT-ANDA.vercel.app/**
```

---

## 6. Buat user Advisor & SPV

Ada 2 cara. Untuk MVP, paling mudah lewat Dashboard.

### 6.1 Cara A — Create user di Dashboard (disarankan)

1. **Authentication** → **Users**
2. Klik **Add user** → **Create new user**
3. Isi contoh:

| Field | Contoh Advisor | Contoh SPV |
|-------|----------------|------------|
| Email | `galuh.horeka@email.com` | `spv.horeka@email.com` |
| Password | Password sementara kuat | Password sementara kuat |
| Auto Confirm User | ✅ centang | ✅ centang |

4. Klik **Create user**
5. Ulangi untuk Advisor lain (Hendra, Roby, Adam, …)

> Catat email + password sementara, serahkan ke masing-masing user untuk diganti nanti.

### 6.2 Cara B — Sign up dari aplikasi (nanti)

Setelah Next.js punya halaman register/login, user bisa daftar sendiri. Role default di trigger = `advisor`. SPV tetap harus diubah manual di `profiles`.

### 6.3 Pastikan profile otomatis terbuat

Setelah create user:

1. Buka **Table Editor** → `profiles`
2. Harus muncul 1 baris per user (id sama dengan Auth Users)

Jika `profiles` kosong padahal user sudah ada, lihat Troubleshooting (trigger `handle_new_user`).

---

## 7. Set role di tabel profiles

Default role saat user baru = **`advisor`**. SPV/Admin harus diubah manual.

### 7.1 Via Table Editor (paling mudah)

1. **Table Editor** → `profiles`
2. Klik baris user SPV
3. Edit:

| Column | Nilai SPV | Nilai Admin | Nilai Advisor |
|--------|-----------|-------------|---------------|
| `role` | `spv` | `admin` | `advisor` |
| `full_name` | nama lengkap | nama IT | nama Advisor |
| `advisor_code` | boleh kosong | kosong | `GALUH` / `HENDRA` / `ROBY` / `ADAM` |
| `is_active` | `true` | `true` | `true` |

4. Save

### 7.2 Via SQL (lebih cepat untuk banyak user)

Ganti email sesuai yang kamu buat:

```sql
-- SPV
update public.profiles p
set
  role = 'spv',
  full_name = 'SPV Horeka',
  advisor_code = null,
  is_active = true
from auth.users u
where p.id = u.id
  and u.email = 'spv.horeka@email.com';

-- Advisor contoh
update public.profiles p
set
  role = 'advisor',
  full_name = 'Galuh',
  advisor_code = 'GALUH',
  is_active = true
from auth.users u
where p.id = u.id
  and u.email = 'galuh.horeka@email.com';

update public.profiles p
set
  role = 'advisor',
  full_name = 'Hendra',
  advisor_code = 'HENDRA',
  is_active = true
from auth.users u
where p.id = u.id
  and u.email = 'hendra.horeka@email.com';
```

### 7.3 Verifikasi role

```sql
select
  u.email,
  p.full_name,
  p.role,
  p.advisor_code,
  p.is_active
from public.profiles p
join auth.users u on u.id = p.id
order by p.role, p.full_name;
```

Pastikan minimal ada:
- 1+ baris `advisor`
- 1 baris `spv`

---

## 8. Ambil API keys untuk Next.js

### 8.1 Buka Project Settings

1. Sidebar bawah → ikon **Project Settings** (gear)
2. Menu **API**

### 8.2 Copy nilai berikut

| Nama di Supabase | Dipakai di Next.js sebagai | Boleh di client? |
|------------------|----------------------------|------------------|
| **Project URL** | `NEXT_PUBLIC_SUPABASE_URL` | Ya |
| **anon public** key | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Ya |
| **service_role** key | `SUPABASE_SERVICE_ROLE_KEY` | **TIDAK** (server only) |

> Jangan commit `service_role` ke GitHub. Key ini bypass RLS.

### 8.3 Buat file `.env.local` di project Next.js

Di root project Next.js (bukan di repo publik tanpa ignore):

```env
NEXT_PUBLIC_SUPABASE_URL=https://XXXXXXXX.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Pastikan `.env.local` ada di `.gitignore`.

### 8.4 Di Vercel (saat deploy nanti)

Project Vercel → **Settings** → **Environment Variables** → isi 3 variabel yang sama untuk Production + Preview.

---

## 9. Uji cepat di Table Editor

Ini uji **tanpa** Next.js dulu, hanya memastikan struktur DB benar.

### 9.1 Siapkan UUID Advisor

```sql
select id, full_name, role
from public.profiles
where role = 'advisor'
limit 1;
```

Copy `id` hasil query.

### 9.2 Insert contoh visit GET (opsional)

Ganti `GANTI_UUID_ADVISOR` dengan id dari langkah 9.1:

```sql
insert into public.visits (
  survey_date,
  created_by,
  advisor_name,
  visit_type,
  member_code,
  store_name,
  get_keterangan,
  get_conclusion,
  get_conclusion_note,
  review_status
) values (
  current_date,
  'GANTI_UUID_ADVISOR',
  'GALUH',
  'GET',
  '01',
  'Toko Contoh ABC',
  'NOK',
  'TERTARIK MASIH RAGU',
  'Owner masih bandingkan harga',
  'pending'
)
returning id, visit_type, review_status;
```

Jika sukses, muncul 1 row. Cek di **Table Editor** → `visits`.

### 9.3 Insert contoh visit RKM (opsional)

```sql
insert into public.visits (
  survey_date,
  created_by,
  advisor_name,
  visit_type,
  member_code,
  rkm_keterangan,
  rkm_klik,
  rkm_conclusion,
  rkm_conclusion_note,
  rkm_produk_pareto,
  rkm_order_belanja,
  rkm_tindak_lanjut,
  review_status
) values (
  current_date,
  'GANTI_UUID_ADVISOR',
  'GALUH',
  'RKM',
  'MBR00123',
  'BELUM BELANJA',
  'NON KLIK',
  'HARGA TIDAK COCOK',
  'Minta follow up minggu depan',
  'Minyak goreng 2L',
  'TIDAK ORDER BELANJA',
  'Edukasi produk / Harga',
  'pending'
)
returning id, visit_type, rkm_keterangan;
```

### 9.4 Uji constraint (harus GAGAL)

Coba insert GET tanpa `store_name` — harus error constraint. Itu tanda validasi DB bekerja.

```sql
-- Sengaja invalid: visit_type GET tapi field GET kosong
insert into public.visits (
  survey_date, created_by, advisor_name, visit_type, review_status
) values (
  current_date, 'GANTI_UUID_ADVISOR', 'GALUH', 'GET', 'pending'
);
```

### 9.5 Hapus data uji (opsional)

```sql
delete from public.visits
where store_name = 'Toko Contoh ABC'
   or member_code in ('01', 'MBR00123');
```

---

## 10. Checklist selesai

Tandai jika sudah:

- [ ] Project Supabase Free sudah dibuat (region Singapore/terdekat)
- [ ] Password database disimpan aman
- [ ] File SQL migrasi **berhasil Run** tanpa error
- [ ] Tabel `profiles`, `visits`, `visit_photos` ada
- [ ] Bucket `visit-photos` ada & **private**
- [ ] RLS aktif di 3 tabel
- [ ] Email Auth provider ON
- [ ] Site URL lokal sudah diisi
- [ ] User Advisor + SPV sudah dibuat
- [ ] Role di `profiles` sudah benar
- [ ] `NEXT_PUBLIC_SUPABASE_URL` sudah dicatat
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` sudah dicatat
- [ ] `SUPABASE_SERVICE_ROLE_KEY` sudah dicatat (rahasia)
- [ ] Insert uji GET/RKM berhasil (opsional tapi disarankan)

Jika semua centang → **Supabase siap** untuk development Next.js.

---

## 11. Troubleshooting

### Error saat Run SQL: `type already exists` / `relation already exists`

Artinya skema pernah dijalankan. Aman diabaikan jika memakai `if not exists` / `exception when duplicate_object`.

Kalau ingin **reset total** (HATI-HATI: hapus semua data):

```sql
-- HANYA untuk development / project kosong
drop view if exists public.visit_analytics_daily;
drop table if exists public.visit_photos cascade;
drop table if exists public.visits cascade;
drop table if exists public.profiles cascade;

-- Lalu jalankan ulang file migrasi penuh
```

Bucket storage mungkin perlu dihapus manual di UI Storage jika ingin bersih total.

### User Auth ada, tapi `profiles` kosong

Jalankan backfill:

```sql
insert into public.profiles (id, full_name, role)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'full_name', u.email, 'User'),
  'advisor'
from auth.users u
left join public.profiles p on p.id = u.id
where p.id is null;
```

Lalu set role SPV lagi seperti §7.

### Tidak bisa login dari Next.js nanti

Cek:

1. Email Confirm: user sudah confirmed?
2. URL Configuration mengandung `localhost:3000` / domain Vercel
3. Env URL & anon key benar (tanpa spasi)
4. `is_active = true` di profiles

### Upload foto gagal (nanti di app)

Cek:

1. Bucket nama persis `visit-photos`
2. Path diawali `{user_id}/...`
3. File ≤ 2 MB setelah compress
4. MIME jpeg/png/webp
5. User sudah login (policy butuh `authenticated`)

### Project paused (free tier)

Dashboard akan bilang project paused. Klik **Restore project**, tunggu beberapa menit.

### Lupa database password

**Project Settings** → **Database** → reset password (simpan yang baru).

---

## Ringkasan alur (cheat sheet)

```
1. supabase.com → New Project (Free, Singapore)
2. SQL Editor → paste 20260715_form_mr_horeka.sql → Run
3. Cek Table Editor + Storage visit-photos (private)
4. Auth → Email ON (confirm OFF untuk MVP)
5. Auth → Users → Add Advisor & SPV
6. Table profiles → set role advisor/spv + advisor_code
7. Settings → API → copy URL + anon + service_role
8. Simpan ke .env.local Next.js
9. (Opsional) insert uji GET/RKM
10. Mulai coding / connect Next.js
```

---

## Langkah berikutnya

Setelah tutorial ini selesai, lanjut:

1. Buat project Next.js
2. Install `@supabase/supabase-js` + helper SSR
3. Halaman login
4. Form multi-step GET/RKM + upload foto
5. Dashboard SPV

Kalau mau, minta saja tutorial lanjutan: **Connect Supabase ke Next.js (App Router) dari nol**.
