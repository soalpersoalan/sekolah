document.addEventListener("DOMContentLoaded", () => {
  const resultCard = document.getElementById("result-card");
  const rawData = localStorage.getItem("exam_finish_result");

  if (!rawData) {
    if (resultCard) {
      resultCard.innerHTML = `
        <div style="padding: 20px; color: #dc2626;">
          <h3>⚠️ Data Hasil Ujian Tidak Ditemukan</h3>
          <p>Silakan login kembali untuk memulai atau memeriksa sesi ujian Anda.</p>
        </div>
      `;
    }
    return;
  }

  try {
    const data = JSON.parse(rawData);

    if (resultCard) {
      resultCard.innerHTML = `
        <div style="text-align: left; background: #f8fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0; margin-top: 15px;">
          <h3 style="color: #0284c7; text-align: center; margin-top: 0; margin-bottom: 15px;">
            🎉 Ujian Selesai Diproses!
          </h3>
          
          <table style="width: 100%; font-size: 0.95rem; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Nama Siswa</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.student_name || '-'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Mata Pelajaran</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.subject || '-'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Judul Ujian</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.exam_title || '-'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Waktu Selesai</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.submitted_at || '-'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Jumlah Soal</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.total_questions || 0} Soal</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 8px 0; color: #64748b;">Jawaban Benar</td>
              <td style="padding: 8px 0; font-weight: bold; color: #16a34a; text-align: right;">${data.correct_count || 0} Soal</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Total Poin Terkumpul</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${data.total_points || 0}</td>
            </tr>
          </table>

          <div style="background: #e0f2fe; border: 2px dashed #0284c7; border-radius: 8px; padding: 15px; text-align: center;">
            <div style="font-size: 0.85rem; color: #0369a1; font-weight: bold; text-transform: uppercase;">Nilai Akhir (Skala 100)</div>
            <div style="font-size: 2.8rem; font-weight: 800; color: #0284c7; margin-top: 5px;">
              ${data.final_score !== undefined ? data.final_score : 0}
            </div>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.error("Gagal membaca data hasil:", err);
  }
});
