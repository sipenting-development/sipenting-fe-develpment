// fetch('https://berita-indo-api.vercel.app/v1/suara/health')
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(data["data"]);
//         for (i = 0; i < data["data"].length; i++) {
//             temp = document.createElement('div');
//             temp.className = 'results';
//             temp.innerHTML =
//                 '<div class="card col-lg-12">' +
//                 '<div class="row">' +
//                 '<div class="col-lg-5">' +
//                 '<div class="card-image">' +
//                 '<img class="img-fluid" src="' + data["data"][i]["image.large"] + '"> ' +
//                 '</div>' +
//                 '</div>' +

//                 '<div class="col-lg-7">' +
//                 '<div class="card-body">' +
//                 '<h4 class="text-warna jenis-artikel">' + "Pencegahan" + '</h4>' +
//                 '<h6 class="card-title">' + data["data"][i]["title"] + '</h6>' +
//                 '<p class="card-text">' + data["data"][i]["contentSnippet"] + '</p>' +
//                 '</div>' +
//                 '<div class="card-footer text-end">' +
//                 '<a href="#" style="text-decoration: none;"  class="text-warna card-link fw-semibold">Selengkapnyaa</a>' +
//                 '</div>' +
//                 '</div>' +
//                 '</div>' +
//                 '</div>' +

//                 document.getElementsByClassName('artikel-list')[0].appendChild(temp);
//         }
//     });



fetch('https://64539f69c18adbbdfea29dd5.mockapi.io/artikel')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (i = 0; i < data.length; i++) {
            temp = document.createElement('div');
            temp.className = 'results';
            temp.innerHTML =
                '<div class="card col-lg-12">' +

                '<div class="row">' +

                '<div class="col-lg-5">' +
                '<div class="card-image ">' +
                '<img class="img-fluid " src="' + data[i]["gambar"] + '"> ' +
                '</div>' +
                '</div>' +

                '<div class="col-lg-7">' +
                '<div class="card-body">' +
                '<h4 class="text-warna jenis-artikel">' + data[i]["jenisArtikel"] + '</h4>' +
                '<h6 class="card-title">' + data[i]["judulArtikel"] + '</h6>' +
                '<p class="card-text">' + data[i]["rangkuman"] + '</p>' +
                '</div>' +
                '<div class="card-footer text-end">' +
                '<a href="#" style="text-decoration: none;"  class="text-warna card-link fw-semibold">Selengkapnyaa</a>' +
                '</div>' +
                '</div>' +

                '</div>' +

                '</div>' +

                document.getElementsByClassName('artikel-list')[0].appendChild(temp);
        }
    });

// Path: js\daftarArtikel.js