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
      '<i class="bi bi-facebook "></i>' +
      '</a>' +
      '<a href="# " class="me-3 text-decoration-none">' +
      '<i class="bi bi-instagram "></i>' +
      '</a>' +
      '<a href="# " class="text-decoration-none">' +
      '<i class="bi bi-whatsapp "></i>' +
      '</a>' +
      '</div>' +
      '</div>' +
      '<div class="col-lg-10 isi-artikel">' +

      '<p class="text-warna jenis-artikel fw-semibold">' + data["jenisArtikel"] + '</p>' +
      '<h1 class="judul-artikel mt-3 fw-semibold ">' + data["judulArtikel"] + '</h1>' +
      '<h6 class="tinjauan mt-3">Ditinjau oleh: <span class="text-warna"> dr. Fadhli Rizal Makarim </span> : 15 Juli 2021 </h6>' +

      '<div class="mt-3">' +
      '<p class="text-justify"> ' + data["content1"] + '</p>' +
      '<p class="text-justify"> ' + data["content2"] + '</p>' +
      '<p class="text-justify"> ' + data["content3"] + '</p>' +
      '<p class="text-justify"> ' + data["content4"] + '</p>' +

      '<p class="text-justify"> ' + data["content1"] + '</p>' +
      '<p class="text-justify"> ' + data["content2"] + '</p>' +
      '<p class="text-justify"> ' + data["content3"] + '</p>' +
      '<p class="text-justify"> ' + data["content4"] + '</p>' +

      '<p class="text-justify"> ' + data["content1"] + '</p>' +
      '<p class="text-justify"> ' + data["content2"] + '</p>' +
      '<p class="text-justify"> ' + data["content3"] + '</p>' +
      '<p class="text-justify"> ' + data["content4"] + '</p>' +

      '<p class="text-justify"> ' + data["content1"] + '</p>' +
      '<p class="text-justify"> ' + data["content2"] + '</p>' +
      '<p class="text-justify"> ' + data["content3"] + '</p>' +
      '<p class="text-justify"> ' + data["content4"] + '</p>' +

      '</div>' +
      '</div>';
    '</div>' +
      '</div>';

    document.getElementsByClassName('isi-artikel')[0].appendChild(temp);


  });

const articleList = document.querySelector("#article-list");

fetch("https://64539f69c18adbbdfea29dd5.mockapi.io/artikel")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      const articleCard = `
              <div class="col-md-4 ">
                <div class="card mb-4 shadow-sm mb-md-5" ">
                  <img src="${article.gambar}" class="card-img-top" alt="${article.judul}">
                  <div class="card-body artikel ">
                    <h5 class="card-title jenis-artikel-card fs-7 fw-semibold">${article.jenisArtikel}</h5>
                    <h4 class="card-title ">${article.judulArtikel}</h4>
                    <p class="card-text">${article.rangkuman}</p>
                    <div class="text-end linkaertikel">
                      <a href="${article.selengkapnya}" class="btn fs-5 selengkapnya fw-semibold">Selengkapnya</a>
                    </div>
                  </div>
                </div>
              </div>
            `;
      articleList.innerHTML += articleCard;
    });
  })
  .catch((error) => console.log(error));