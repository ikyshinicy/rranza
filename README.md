# Iky Shinicy — Portfolio Website

Website portofolio + admin panel. Deploy otomatis via **Vercel** setiap push ke branch `main`.

## Struktur

```
/
├── index.html              ← beranda
├── pages/                  ← semua halaman lain (about, projects, galleryprompt, service, jasa-*, harga-*, admin)
├── data.js                 ← ⭐ sumber semua konten (ditulis oleh admin / api/publish.js)
├── css/style.css           ← CSS halaman jasa, harga, service
├── js/colorizer.js         ← efek warna dinamis
├── components/support-section.html   ← footer support, di-inject via fetch()
├── api/                    ← Vercel functions (publish.js, share.js)
├── assets/
│   ├── img/                ← favicon & ikon
│   └── audio/              ← musik latar
├── docs/                   ← catatan (PATCH-admin.js)
├── _arsip/                 ← file cadangan / tidak terpakai (aman dihapus)
├── sitemap.xml
└── vercel.json
```

## Cara update

- **Konten**: lewat `admin.html` → Publish, atau edit `data.js` langsung.
- **Tampilan halaman jasa/harga**: `css/style.css`.
- **Halaman baru**: taruh di `pages/`, tambahkan rewrite + redirect `.html` di `vercel.json`, dan masukkan ke `sitemap.xml`.
- **URL publik tetap bersih** (`/about`, `/projects`, ...); `vercel.json` memetakannya ke `pages/*.html`, dan URL lama `*.html` di-redirect 301.
- **Gambar**: disimpan di Cloudinary / `img.ikyshinicy.xyz`, bukan di folder lokal.

> `data.js` sengaja tetap di root karena path-nya dipakai `admin.html`, `api/publish.js` (`GITHUB_PATH`) dan `api/share.js`.
