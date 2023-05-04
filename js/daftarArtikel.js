fetch('https://berita-indo-api.vercel.app/v1/suara/health')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data["data"]);
        for (i = 0; i < data["data"].length; i++) {
            temp = document.createElement('div');
            temp.className = 'results';
            temp.innerHTML = '<div class="card col-lg-12">' +

                '<div class="row">' +
                '<div class="col-lg-5">' +
                'div class="card-image">' +
                '<img src="' + data["data"][i]["image"][0] + '" ' +
                '</div>' +
                '</div>' +

                '<div class="col-lg-7">' +
                '<div class="card-body">' +
                '<h4 class="text-warna jenis-artikel">' + "Pencegahan" + '</h4>' +
                '<h6 class="card-title">' + data["data"][i]["title"] + '</h6>' +
                '<p class="card-text">' + data["data"][i]["contentSnippet"] + '</p>' +
                '</div>' +
                '<div class="card-footer text-end">' +
                '<a href="#" style="text-decoration: none;"  class="text-warna card-link fw-semibold">Selengkapnyaa</a>' +
                '</div>' +
                '</div>' +

                document.getElementsByClassName('artikel-list')[0].appendChild(temp);
        }
    });