document.getElementById("cekstunting1").addEventListener("click", function () {
  event.preventDefault();
  console.log("cekstunting");
  const nama = document.getElementById("nama").value;
  const jk = document.getElementById("jk").value;
  const bb = parseInt(document.getElementById("bb").value);
  const tl = new Date(document.getElementById("tl").value);
  const umur = parseInt(document.getElementById("umur").value);
  const tinggi = parseInt(document.getElementById("tinggi").value);

  const tgl_lahir = tl.getDate();
  const bln_lahir = tl.getMonth() + 1;
  const thn_lahir = tl.getFullYear();
  const today = new Date();
  const umur_bulan = (today.getFullYear() - thn_lahir) * 12 + today.getMonth() - bln_lahir;

  const zbb = Math.pow(bb / 6, 0.483);
  const tbu = 61.4 + 3.191 * umur + 0.025 * Math.pow(umur, 2);
  const ztb = (tinggi - tbu) / 4.083;

  const stunting = ztb < -2 && umur_bulan >= 24 ? "Ya" : "Tidak";

  // document.getElementById("namahasil").textContent = ` ${nama}`;
  // document.getElementById("jkhasil").textContent = ` ${jk}`;
  // document.getElementById("bbhasil").textContent = ` ${bb} kg`;
  // document.getElementById("tthasil").textContent = ` ${tinggi} cm`;
  // document.getElementById("stunting").textContent = ` ${stunting}`;

  let result = "";
  result = "<h3>" + nama + "</h3>" + "<h3>" + jk + "</h3>";
  document.getElementById("result").innerHTML = result;

  // document.getElementById("namahasil").innerHTML = "Nama: " + nama;
  // document.getElementById("jkhasil").innerHTML = "Jenis Kelamin: " + jk;
  // document.getElementById("bbhasil").innerHTML = "Berat Badan: " + bb;
  // document.getElementById("tthasil").innerHTML = "Tinggi Badan: " + tinggi;
  // document.getElementById("stunting").innerHTML = "satutus " + stunting;
  document.querySelector("#result").style.display = "block";
});
