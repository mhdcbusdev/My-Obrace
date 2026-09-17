/* =========================================================
   config.js  —  My-O Therapy Activities (permintaan akses)
   Satu-satunya file yang perlu diedit di sisi front-end.
   ========================================================= */

window.MYOBRACE_CONFIG = {

  /* URL Web App Apps Script.
     Ambil dari: Deploy > Manage deployments > (salin Web app URL).
     JANGAN buat "New deployment" saat update kode — pakai pensil > New version. */
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxq8eZ2w84i_D4bkokIJA7HkURvvXj8YrqrdL7GwJSjzORrWrL5YlIl_Q8TAC7pSusbOw/exec",

  /* Daftar cabang klinik untuk dropdown.
     PENTING: setiap nama di sini WAJIB punya nomornya di Code.gs (objek KLINIK_WA),
     dengan tulisan PERSIS sama. Kalau nama beda satu huruf, notifikasi WA tidak terkirim
     (akan jatuh ke nomor cadangan/CRO). */
  CLINICS: [
     "Medikids Test",
    "MHDC Bulog",
    "MHDC Kalibata City",
    "MHDC Menara Sentraya",
    "MHDC Wisma 46",
    "Medikids BSD",
    "Medikids Batam",
    "Medikids Bekasi",
    "Medikids Bintaro",
    "Medikids Bogor",
    "Medikids Cibinong",
    "Medikids Cibubur",
    "Medikids Cikarang",
    "Medikids Cikupa",
    "Medikids Cilegon",
    "Medikids Cipondoh",
    "Medikids Dago",
    "Medikids Depok",
    "Medikids Grand Wisata",
    "Medikids Green Terrace",
    "Medikids JGC",
    "Medikids Kalimalang",
    "Medikids Karawaci",
    "Medikids Karawang",
    "Medikids Kebon Jeruk",
    "Medikids Kemang",
    "Medikids Lebak Bulus",
    "Medikids Makassar",
    "Medikids Malang",
    "Medikids Padang",
    "Medikids Palembang",
    "Medikids Pancoran Mas",
    "Medikids Pekanbaru",
    "Medikids Pondok Indah",
    "Medikids RSBL",
    "Medikids Rawamangun",
    "Medikids Rempoa",
    "Medikids Sawangan",
    "Medikids Semarang",
    "Medikids Serpong",
    "Medikids Solo",
    "Medikids Sunter",
    "Medikids Surabaya"
  ]
};
