const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// console.log(id);

fetch(`https://64539f69c18adbbdfea29dd5.mockapi.io/artikel/${id}`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);

        temp = document.createElement('div');
        temp.className = 'results';

        temp.innerHTML =

            '<div class="hero-image">' +
            '<img class="img-fluid " src="' + data["gambar"] + '"> ' +
            '</div>' +

            '<div class="container mt-5">' +
            '<div class="row">' +
            '<div class="col-lg-1">' +
            '<div class="d-flex flex-lg-column justify-content icon-artikel mb-3 gap-3 ">' +
            '<a href="# " class="me-3 text-decoration-none">' +
            '<i class="bi bi-facebook fs-2"></i>' +
            '</a>' +
            '<a href="# " class="me-3 text-decoration-none">' +
            '<i class="bi bi-instagram fs-2"></i>' +
            '</a>' +
            '<a href="# " class="text-decoration-none">' +
            '<i class="bi bi-whatsapp fs-2"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-10 isi-artikel">' +

            '<p class="text-warna jenis-artikel">' + data["jenisArtikel"] + '</p>' +
            '<h1 class="judul-artikel mt-3 ">' + data["judulArtikel"] + '</h1>' +
            '<h6 class="tinjauan mt-3">Ditinjau oleh: <span class="text-warna"> dr. Fadhli Rizal Makarim </span> : 15 Juli 2021 </h6>' +

            '<div class="mt-3">' +
            '<p class="text-justify"> ' + data["isiArtikel"] + '</p>' +
            '<p class="text-justify"> ' + data["isiArtikel"] + '</p>' +
            '<p class="text-justify"> ' + data["isiArtikel"] + '</p>' +
            '<p class="text-justify"> ' + data["isiArtikel"] + '</p>' +
            '</div>' +
            '</div>';
        '</div>' +
            '</div>';

        document.getElementsByClassName('isi-artikel')[0].appendChild(temp);


    });