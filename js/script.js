// Event listener untuk form submit
document.getElementById("bmiForm").addEventListener("submit", function (e) {
  // Mencegah form dari submit default
  e.preventDefault();

  // Mendapatkan nilai input dari form
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const gender = document.getElementById("gender").value;

  // Memeriksa apakah input valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !gender) {
    alert(
      "Masukkan nilai yang valid untuk berat dan tinggi badan serta pilih jenis kelamin."
    );
    return;
  }

  // Menyembunyikan paragraf di bawah h1 ketika menekan tombol hitung BMI
  const paragraphs = document.querySelectorAll("h1 + p, h1 + p + p");
  paragraphs.forEach((paragraph) => (paragraph.style.display = "none"));

  // Menghitung BMI
  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";
  let explanation = "";

  // Menentukan kategori BMI dan penjelasannya
  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
    explanation =
      "BMI Anda menunjukkan bahwa Anda kekurangan berat badan. Pertimbangkan untuk berkonsultasi dengan penyedia layanan kesehatan untuk menentukan kemungkinan penyebab dan strategi penambahan berat badan yang sehat.";
  } else if (bmi < 24.9) {
    category = "Berat Badan Normal";
    explanation =
      "BMI Anda berada dalam kisaran normal. Pertahankan pola makan yang seimbang dan aktivitas fisik yang teratur untuk menjaga BMI Anda dalam kisaran ini.";
  } else if (bmi < 29.9) {
    category = "Berat Badan Berlebih";
    explanation =
      "BMI Anda menunjukkan bahwa Anda kelebihan berat badan. Pertimbangkan untuk menerapkan pola makan yang lebih sehat dan meningkatkan aktivitas fisik untuk mengurangi berat badan Anda.";
  } else {
    category = "Obesitas";
    explanation =
      "BMI Anda menunjukkan obesitas. Penting untuk berkonsultasi dengan penyedia layanan kesehatan untuk mengatasi potensi risiko kesehatan dan mengembangkan rencana pengelolaan berat badan.";
  }

  // Print out hasil BMI
  document.getElementById("result").innerHTML = `
        <hr>
        <h2>${category}</h2>
        <p>Hasil <b>BMI</b> anda adalah ${bmi}</p>
        <p>${explanation}</p>
        <p>Jenis Kelamin: ${gender}</p>
    `;
});

// Event listener untuk tombol reset
document.getElementById("resetButton").addEventListener("click", function () {
  // Mengosongkan hasil BMI
  document.getElementById("result").innerHTML = "";

  // Menampilkan kembali paragraf di bawah h1
  const paragraphs = document.querySelectorAll("h1 + p, h1 + p + p");
  paragraphs.forEach((paragraph) => (paragraph.style.display = "block"));
});
