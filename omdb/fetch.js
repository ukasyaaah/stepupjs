const button = document.querySelector(".search-button");

button.addEventListener("click", function () {
  const inputKey = document.querySelector(".keyword");
  fetch("http://www.omdbapi.com/?apikey=5a7a8f9a&s=" + inputKey.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));

      const movCont = document.querySelector(".movie-container");
      movCont.innerHTML = cards;

      // utk tombol detail
      const detailButton = document.querySelectorAll(".detail-button");
      detailButton.forEach((button) => {
        button.addEventListener("click", function () {
          const imdb = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=5a7a8f9a&i=" + imdb)
            .then((respon) => respon.json())
            .then((respon) => {
              const detailMov = showMovieDetail(respon);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = detailMov;
            });
        });
      });
    });
});

function showCards(m) {
  return ` <div class="col-md-4 my-3">
          <div class="card" ">
            <img src="${m.Poster}" class="card-img-top" alt="Poster" />
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
               <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
              <a href="#" data-imdbid="${m.imdbID}"  data-bs-toggle="modal"
        data-bs-target="#movieDetailModal" class="btn detail-button btn-primary">Show Details</a>
            
            </div>
          </div>
        </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" alt="" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <h4>${m.Title} (${m.Year})</h4>
                      </li>
                      <li class="list-group-item">
                        <strong>Director : </strong>${m.Director}
                      </li>
                       <li class="list-group-item">
                        <strong>Writer : </strong>${m.Writer}
                      </li>
                      <li class="list-group-item">
                        <strong>Genre : </strong>${m.Genre}
                      </li>
                      <li class="list-group-item">
                        <strong>Released : </strong>${m.Released}
                      </li>
                      <li class="list-group-item">
                        <strong>Plot : </strong><br />
                        ${m.Plot}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>`;
}
