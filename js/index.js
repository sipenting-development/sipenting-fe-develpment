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
                <h5 class="card-title jenis-artikel fs-7 fw-semibold">${article.jenisArtikel}</h5>
                <h4 class="card-title ">${article.judulArtikel}</h4>
                <p class="card-text">${article.rangkuman}</p>
                <div class="text-end linkaertikel">
                  <a href="isianArtikel.html?id=${article.id}" class="btn fs-5 selengkapnya fw-semibold">Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        `;
      articleList.innerHTML += articleCard;
    });
  })
  .catch((error) => console.log(error));
