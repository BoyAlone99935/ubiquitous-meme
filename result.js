document.addEventListener("DOMContentLoaded", () => {
  const movie = JSON.parse(localStorage.getItem("selectedMovie"));
  if (!movie) {
    console.log("No movie found in local storage.");
    return;
  }

  console.log(movie);
  const generalcontainer = document.querySelector(".generalcontainer");
  const api_key = "994eaa52";
  const movie_title = movie.Title;

  fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${movie_title}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const image = document.createElement("img");
      image.classList.add("detailsimage");
      image.src = data.Poster;

      const title = document.createElement("p");
      title.classList.add("title");
      title.textContent = data.Title;

      const genre = document.createElement("p");
      genre.classList.add("genre");
      genre.textContent = `Genre: ${data.Genre}`;

      const plot = document.createElement("div");
      plot.classList.add("plot");

      const plotp = document.createElement("p");
      plotp.textContent = data.Plot;

      plot.append(plotp);

      const runtime = document.createElement("div");
      runtime.classList.add("runtime");

      const country = document.createElement("p");
      country.textContent = `Country: ${data.Country}`;

      const runtimep = document.createElement("p");
      runtimep.textContent = `Runtime: ${data.Runtime}`;

      runtime.append(country, runtimep);

      const castcontainer = document.createElement("div");
      castcontainer.classList.add("castcontainer");

      const cast = document.createElement("div");
      cast.classList.add("cast");

      const text = document.createElement("p");
      text.classList.add("actors");
      text.textContent = "ACTORS";
      
      const actor = document.createElement("p");
      actor.classList.add("actor");
      actor.textContent = data.Actors;

      cast.append(text, actor);
      castcontainer.append(cast);

      const specialdetails = document.createElement("div");
      specialdetails.classList.add("specialdetails");

      const year = document.createElement("p");
      const boxoffice = document.createElement("p");
      const rating = document.createElement("p"); //  Fixed typo `ratiing` → `rating`
      const releasedate = document.createElement("p");
      const director = document.createElement("p");

      year.textContent = `Year: ${data.Year}`;
      boxoffice.textContent = `Box Office: ${data.BoxOffice}`;
      rating.textContent = `IMDb Rating: ${data.imdbRating}`;
      releasedate.textContent = `Released: ${data.Released}`;
      director.textContent = `Director: ${data.Director}`;

      specialdetails.append(year, boxoffice, rating, releasedate, director);
      generalcontainer.append(image, title, genre, plot, runtime, castcontainer, specialdetails);
    })
    .catch(error => console.log(error));
});