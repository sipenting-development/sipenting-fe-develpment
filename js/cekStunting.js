// document.getElementById("cekstunting1").addEventListener("click", function() {
//     event.preventDefault();
//     // console.log("cekstunting");
//     const nama = document.getElementById("nama").value;
//     const jk = document.getElementById("jk").value;
//     const bb = parseFloat(document.getElementById("bb").value);
//     const tl = new Date(document.getElementById("tl").value);
//     const umur = parseFloat(document.getElementById("umur").value);
//     const tinggi = parseFloat(document.getElementById("tinggi").value);
//     console.log(jk);
//     console.log(bb);
//     console.log(umur);
//     console.log(tinggi);
//     const tgl_lahir = tl.getDate();
//     const bln_lahir = tl.getMonth() + 1;
//     const thn_lahir = tl.getFullYear();
//     const today = new Date();
//     const umur_bulan = (today.getFullYear() - thn_lahir) * 12 + today.getMonth() - bln_lahir;

//     //pengecek jika nilai dari yang diinputkan kosong
//     if (!nama) {
//         alert("Nama tidak boleh kosong!");
//     } else if (!jk) {
//         alert("Jenis kelamin tidak boleh kosong!");
//     } else if (!tl) {
//         alert("Berat badan tidak boleh kosong!");
//     } else if (!bb) {
//         alert("Tanggal lahir tidak boleh kosong!");
//     } else if (!umur) {
//         alert("Umur tidak boleh kosong!");
//     } else if (!tinggi) {
//         alert("Tinggi tidak boleh kosong!");
//     } else if (!tinggi) {
//         alert("Tinggi tidak boleh kosong!");
//     }

//     function isStunted(ageMonths, sex, heightCm, weightKg) {
//         // Convert age from months to years
//         const ageYears = ageMonths / 12;

//         // Calculate the child's BMI-for-age Z-score
//         const bmi = weightKg / Math.pow(heightCm / 100, 2);
//         const bmiAgeZScore = calculateBMIAgeZScore(ageYears, sex, bmi);

//         // Calculate the child's height-for-age Z-score
//         const heightAgeZScore = calculateHeightAgeZScore(ageMonths, sex, heightCm);

//         //
//         //return heightAgeZScore < -2 || bmiAgeZScore >= -2 || bmiAgeZScore <= 2;
//         let result = heightAgeZScore < -2 || bmiAgeZScore >= -2 || bmiAgeZScore <= 2;
//         console.log(result);
//     }

//     //const hasil = isStunted ? "stunting" : "tidak stunting";

//     function calculateBMIAgeZScore(ageYears, sex, bmi) {
//         // BMI-for-age Z-score calculation
//         const l = sex === "male" ? -1.644853626 : -1.927400206;
//         const m = sex === "male" ? 16.96254855 : 16.71561517;
//         const s = sex === "male" ? 0.081464455 : 0.09218391;
//         const zScore = (Math.pow(bmi / m, 0.986) - 1) / (s * 0.146) + (l - 0.5) * Math.log(ageYears * 12);
//         console.log(zScore.toFixed(4));
//         return zScore;
//     }

//     function calculateHeightAgeZScore(ageMonths, sex, heightCm) {
//         // Height-for-age Z-score calculation
//         const l = sex === "male" ? -0.3520329 : -0.3818979;
//         const m = sex === "male" ? 75.58436 : 73.80789;
//         const s = sex === "male" ? 0.08113633 : 0.07988437;
//         const zScore = (Math.pow(heightCm / m, 0.969) - 1) / (s * 0.142) + (l - 0.5) * Math.log(ageMonths);
//         console.log(zScore.toFixed(4));
//         return zScore;
//     }
//     isStunted(umur, jk, tinggi, bb);
//     // const zbb = Math.pow(bb / 6, 0.483);
//     // const tbu = 61.4 + 3.191 * umur + 0.025 * Math.pow(umur, 2);
//     // const ztb = (tinggi - tbu) / 4.083;

//     // const stunting = ztb < -2 && umur_bulan > 24 ? "tidak " : "iya";

//     // document.getElementById("namahasil").textContent = ` ${nama}`;
//     // document.getElementById("jkhasil").textContent = ` ${jk}`;
//     // document.getElementById("bbhasil").textContent = ` ${bb} kg`;
//     // document.getElementById("tthasil").textContent = ` ${tinggi} cm`;
//     // document.getElementById("stunting").textContent = ` ${stunting}`;

//     let result = "";
//     result =
//         "<h2 style='text-align:center; font-weight:bold;' >" +
//         " Hasil Perhitungan " +
//         "</h2>" +
//         "<h3 style='margin :30px; padding:5px'; font-size:24px; >" +
//         "Nama = " +
//         nama +
//         "</h3>" +
//         "<h3 style='margin :30px; padding:5px; font-size:24px;'>" +
//         "Jenis Kelamin = " +
//         jk +
//         "</h3>" +
//         "<h3  style='margin :30px; padding:5px; font-size:24px'>" +
//         "Berat Badan = " +
//         bb +
//         "</h3>" +
//         "<h3  style='margin :30px; padding:5px; font-size:24px'>" +
//         "umur = " +
//         umur +
//         "</h3>" +
//         "<h3  style='margin :30px; padding:5px; font-size:24px'>" +
//         "tinggi = " +
//         tinggi +
//         "</h3>" +
//         "<h3  style='margin :30px; padding:5px; font-size:24px; '>" +
//         "Status = " +
//         hasil +
//         "</h3>";

//     document.getElementById("result").innerHTML = result;
//     document.getElementById("result").style.padding = "40px";
//     document.getElementById("result").style.textAlign = "start";

//     // document.getElementById("namahasil").innerHTML = "Nama: " + nama;
//     // document.getElementById("jkhasil").innerHTML = "Jenis Kelamin: " + jk;
//     // document.getElementById("bbhasil").innerHTML = "Berat Badan: " + bb;
//     // document.getElementById("tthasil").innerHTML = "Tinggi Badan: " + tinggi;
//     // document.getElementById("stunting").innerHTML = "satutus " + stunting;
//     document.querySelector("#result").style.display = "block";
// });
// zbb: z-score untuk berat badan anak berdasarkan formula tertentu.
// tbu: perkiraan tinggi badan anak berdasarkan umur.
// ztb: z-score untuk tinggi badan anak berdasarkan formula tertentu.
// stunting: variabel yang menyimpan hasil analisis stunting pada anak. Jika z-score tinggi badan kurang dari -2 dan usia anak lebih dari atau sama dengan 24 bulan, maka nilai variabel stunting adalah "Ya", jika tidak, maka nilai variabel stunting adalah "Tidak".
// Dalam perhitungan z-score tersebut, nilai rata-rata dan standar deviasi untuk berat badan dan tinggi badan anak pada setiap usia dan jenis kelamin tertentu digunakan sebagai acuan. Formulanya juga berbeda tergantung pada usia dan jenis kelamin anak.

// Untuk menghitung nilai zbb, rumusnya dapat bervariasi, tergantung pada sumber data yang digunakan. Dalam hal ini  , rumus yang digunakan adalah Math.pow(bb / 6, 0.483), yang diperoleh dari hasil analisis data pertumbuhan anak di Indonesia.

// Untuk menghitung nilai tbu, rumus yang digunakan adalah 61.4 + 3.191 * umur + 0.025 * Math.pow(umur, 2). Rumus ini digunakan untuk memperkirakan tinggi badan anak berdasarkan usianya. Angka-angka 61.4, 3.191, dan 0.025 pada rumus tersebut didapatkan dari data standar pertumbuhan WHO.

// Sedangkan untuk menghitung nilai ztb, rumusnya juga dapat bervariasi tergantung pada sumber data yang digunakan. rumus yang digunakan adalah (tinggi - tbu) / 4.083), yang juga diperoleh dari hasil analisis data pertumbuhan anak di Indonesia.

// Kemudian, jika z-score tinggi badan (ztb) kurang dari -2 dan usia anak lebih dari atau sama dengan 24 bulan, maka anak dianggap mengalami stunting (stunting = "Ya"). Sebaliknya, jika z-score tinggi badan tidak kurang dari -2 atau usia anak kurang dari 24 bulan, maka anak dianggap tidak mengalami stunting (stunting = "Tidak"

//imt
document.getElementById("cekstunting1").addEventListener("click", function() {
    event.preventDefault();
    //console.log("cekstunting");
    const nama = document.getElementById("nama").value;
    const jk = document.getElementById("jk").value;
    const bb = parseFloat(document.getElementById("bb").value);
    const tl = new Date(document.getElementById("tl").value);
    const umur = parseFloat(document.getElementById("umur").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (tinggi <= 0 || bb <= 0) {
        alert("input must be positive and not minus");
        return;
        //kenapa  penggunakan tostring kkarena fungsi length hanya dapat digunakan pada objek bertipe string.
        //Kode yang Anda berikan menggunakan fungsi toString() untuk mengkonversi angka menjadi string sehingga dapat memeriksa panjang digit dari angka tersebut.
    } else if (bb.toString().length > 3 || tinggi.toString().length > 3) {
        alert("Input for maximum weight and height of 3 numbers.");
        return;
    }
    let bmi = bb / Math.pow(tinggi / 100, 2);

    //  Hitung IMT (Indeks Massa Tubuh)
    let bmiCategory = "";
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 25) {
        bmiCategory = "Normal Weight";
    } else if (bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    let result = "";
    result =
        "<h2 style='text-align:center; font-weight:bold;' >" +
        " Hasil Perhitungan " +
        "</h2>" +
        "<h3 >" +
        "Nama = " +
        nama +
        "</h3>" +
        "<h3>" +
        "Jenis Kelamin = " +
        jk +
        "</h3>" +
        "<h3>" +
        "Berat Badan = " +
        bb +
        "</h3>" +
        "<h3>" +
        "<h3>" +
        "umur = " +
        umur +
        "</h3>" +
        "<h3>" +
        "tinggi = " +
        tinggi +
        "</h3>" +
        "<h3>" +
        "Status = " +
        bmiCategory +
        "</h3>" +
        '<button type="button" id="reload" class="btn btn-danger p-2 text-center" style="display: block; margin: 0 auto;">Mulai cek lagi</button>';
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.padding = "50px";
    document.querySelector("#result").style.display = "block";
    document.getElementById("reload").addEventListener("click", function() {
        location.reload();
    });
});