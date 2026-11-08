// ============================================================
// PATCH: Ganti fungsi publishToGitHub() di admin.html
// Cari fungsi lama yang dimulai dari:
//   async function publishToGitHub() {
//     const cfg = JSON.parse(localStorage.getItem('iky_github')
// Ganti SELURUH fungsi itu dengan kode di bawah ini:
// ============================================================

async function publishToGitHub() {
  const btns = document.querySelectorAll('.btn-success');
  btns.forEach(b => { b.textContent = '⏳ Mengirim...'; b.disabled = true; });

  try {
    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: generateDataJs() })
    });

    const result = await res.json();

    if (res.ok && result.success) {
      toast('🚀 Berhasil publish! Website update dalam ~30 detik.', 'success');
      markSaved();
    } else {
      toast('Gagal: ' + (result.error || 'Unknown error'), 'error');
    }
  } catch(e) {
    toast('Error koneksi: ' + e.message, 'error');
  }

  btns.forEach(b => { b.textContent = '🚀 Publish ke GitHub'; b.disabled = false; });
}
