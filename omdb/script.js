$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=5a7a8f9a&s=" + $('.form-control').val(),
    success: (m) => {
      const movie = m.Search;
      let cards = "";

      movie.forEach((m) => {
        cards += showCards(m);
      });

      $(".movie-container").html(cards);
      $(".detail-button").on("click", function () {
        $.ajax({
          url:
            `http://www.omdbapi.com/?apikey=5a7a8f9a&i=` +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },

          error: (e) => {
            e.responseText;
          },
        });
      });
    },
    error: (e) => {
      e.responseText;
    },
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
