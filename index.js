const movies = [
    { 
        title: "Dune: Part Two", 
        poster: "6izwz7rsy95ARzTR3poZ8H6c5pp.webp", 
        plot: "Paul Atreides continues his journey with the Fremen, facing difficult choices about his destiny.", 
        triller : "https://www.youtube.com/results?search_query=dune+part+two+trailer"
    },
    { 
        title: "Deadpool & Wolverine", 
        poster: "Deadpool And Wolverine Movie Poster.jpeg", 
        plot: "Deadpool and Wolverine team up in a chaotic mission full of humor and action." ,
        triller: "https://www.youtube.com/results?search_query=deadpool+and+wolverine+trailer"
    },
    { 
        title: "Captain America: Brave..", 
        poster: "marvel-captain-america-brave-new-world-red-hulk_u-L-FAGZZB0.jpg", 
        plot: "Sam Wilson struggles with his new role as Captain America amidst growing global threats." ,
        triller: "https://www.youtube.com/results?search_query=captain+america+brave+new+world+trailer"
    },
    { 
        title: "The Batman: Part II", 
        poster: "The Batman - 2022.jpeg", 
        plot: "Bruce Wayne faces new enemies while continuing his crusade in Gotham City." 
        
    },
    { 
        title: "Avatar 3", 
        poster: "avaterimage.jpg", 
        plot: "Jake Sully and Neytiri explore new regions of Pandora while confronting a dangerous new force." ,
        triller : "https://www.youtube.com/results?search_query=avatar+2+trailer"
    },
    { 
        title: "Inside Out 2", 
        poster: "insideoutposter.jpeg", 
        plot: "Riley navigates teenage life with the arrival of new emotions.",
        triller : "https://www.youtube.com/results?search_query=inside+out+2+trailer" 
    },
    { 
        title: "The Lord of the Rings", 
        poster: "LOTR_The_War_of_the_Rohirrim_poster.jpg", 
        plot: "Helm Hammerhand, the legendary king of Rohan, defends his people in an epic battle.", 
        triller : "https://www.youtube.com/results?search_query=lord+of+the+rings+trailer"
    },
    { 
        title: "Borderlands", 
        poster: "borderlands.webp", 
        plot: "A group of misfits embarks on a chaotic adventure on the planet Pandora." ,
        triller : "https://www.youtube.com/watch?v=lU_NKNZljoQ"
    },
    { 
        title: "Beetlejuice 2", 
        poster: "beetlejuice.jpeg", 
        plot: "Beetlejuice returns to stir up supernatural chaos once more." ,
        triller : "https://www.youtube.com/watch?v=As-vKW4ZboU"
    },
    { 
        title: "Venom 3", 
        poster: "Venom_The_Last_Dance_Poster.jpg", 
        plot: "Eddie Brock and Venom face a formidable new enemy." ,
        triller : "https://www.youtube.com/watch?v=__2bjWbetsA"
    },
    { 
        title: "Twisters", 
        poster: "twisters.jpg", 
        plot: "A new generation of storm chasers encounters record-breaking tornadoes.",
        triller : "https://www.youtube.com/watch?v=wdok0rZdmx4" 
    },
    { 
        title: "The Fantastic Four", 
        poster: "fantsatic4.jpeg", 
        plot: "Marvel’s first family embarks on an adventure to save the universe." ,
        triller : "https://www.youtube.com/watch?v=pAsmrKyMqaA"
    },
    { 
        title: "Kingdom of the Planet of the Apes", 
        poster: "apes.webp", 
        plot: "The rise of a new ape civilization post-Caesar's reign." ,
        triller : "https://www.youtube.com/watch?v=XtFI7SNtVpY"
    },
    { 
        title: "A Quiet Place: Day One", 
        poster: "A_Quiet_Place_Day_One_(2024)_poster.jpg", 
        plot: "Survivors experience the terrifying first day of the alien invasion." ,
        triller : "https://www.youtube.com/watch?v=YPY7J-flzE8"
    },
    { 
        title: "Moana 2", 
        poster: "moana.jpeg", 
        plot: "Moana sets off on a new adventure to discover her ancestors' secrets." ,
        triller : "https://www.youtube.com/watch?v=hDZ7y8RP5HE"
    },
    { 
        title: "Superman: Legacy", 
        poster: "superman.jpeg", 
        plot: "Clark Kent struggles to balance his Kryptonian heritage and human identity." ,
        triller : "https://www.youtube.com/watch?v=uhUht6vAsMY"
    },
    { 
        title: "Spider-Man: Beyond the Spider-Verse", 
        poster: "spiderverse.jpeg", 
        plot: "Miles Morales embarks on a multiversal mission to save his friends." ,
        triller : "https://www.youtube.com/watch?v=CPV0--fgbbw"
    },
    { 
        title: "Alien: Romulus", 
        poster: "Alien_Romulus_2024_(poster).jpg", 
        plot: "Explorers encounter a terrifying extraterrestrial threat in deep space." ,
        triller : "https://www.youtube.com/watch?v=OzY2r2JXsDM"
    },
    { 
        title: "The Lion King Prequel: Mufasa", 
        poster: "Mufasa_The_Lion_King_Movie_2024.jpeg", 
        plot: "The origins of Mufasa are explored in a visually stunning prequel." ,
        triller : "https://www.youtube.com/watch?v=o17MF9vnabg"
    },
    { 
        title: "Mission: Impossible – Dead Reckoning Part Two", 
        poster: "tom-cruise.jpeg", 
        plot: "Ethan Hunt faces his most dangerous mission yet, filled with high-stakes espionage and daring stunts." ,
        triller : "https://www.youtube.com/watch?v=fsQgc9pCyDU"
    },
    { 
        title: "Ghostbusters: Frozen Empire", 
        poster: "ghostbusters.webp", 
        plot: "The Ghostbusters uncover a chilling mystery that threatens the world with supernatural forces." ,
        triller : "https://www.youtube.com/watch?v=HpOBXh02rVc"
    },
    { 
        title: "The Fall Guy", 
        poster: "The_Fall_Guy_(2024)_poster.jpg", 
        plot: "A retired stuntman is pulled back into action after being framed for a crime." ,
        triller : "https://www.youtube.com/watch?v=j7jPnwVGdZ8"
    },
    { 
        title: "Kung Fu Panda 4", 
        poster: "Kungfupanda.jpg", 
        plot: "Po embarks on a thrilling new adventure, facing new enemies and discovering secrets of his past." ,
        triller : "https://www.youtube.com/watch?v=_inKs4eeHiI"
    },
    { 
        title: "The Watchers", 
        poster: "The_Watchers_film_poster.jpg", 
        plot: "A woman stranded in a mysterious forest finds herself being watched by unknown creatures." ,
        triller : "https://www.youtube.com/watch?v=dYo91Fq9tKY"
    },
    { 
        title: "Godzilla x Kong: The New Empire", 
        poster: "godzilla.jpg", 
        plot: "Titans collide once again in an epic battle that shakes the planet." ,
        triller : "https://www.youtube.com/watch?v=qqrpMRDuPfc"
    },
    { 
        title: "The Hunger Games: The Ballad of Songbirds & Snakes", 
        poster: "hunger.jpg", 
        plot: "A young Coriolanus Snow mentors a tribute in the 10th Hunger Games, shaping his future as the infamous President Snow." ,
        triller : "https://www.youtube.com/watch?v=RDE6Uz73A7g"
    },
    { 
        title: "Wonka", 
        poster: "Wonka_2023_film_poster.jpg", 
        plot: "The origin story of Willy Wonka, showcasing his rise to become the world’s greatest chocolatier." ,
        triller : "https://www.youtube.com/watch?v=otNh9bTjXWg"
    },
    { 
        title: "Napoleon", 
        poster: "Napoleon_Film_poster.jpg", 
        plot: "An epic tale of Napoleon Bonaparte’s rise to power and military genius, starring Joaquin Phoenix.",
        triller : "https://www.youtube.com/watch?v=OAZWXUkrjPc" 
    },
    { 
        title: "The Marvels", 
        poster: "marvels.jpeg", 
        plot: "Captain Marvel teams up with Ms. Marvel and Monica Rambeau to face a powerful cosmic threat." ,
        triller : "https://www.youtube.com/watch?v=wS_qbDztgVY"
    },
    { 
        title: "Aquaman and the Lost Kingdom", 
        poster: "aquaman.webp", 
        plot: "Aquaman must unite forces to protect Atlantis from a new and dangerous enemy." ,
        triller : "https://www.youtube.com/watch?v=UGc5Tzz19UY"
    },
    { 
        title: "The Exorcist: Believer", 
        poster: "exorcist.jpg", 
        plot: "Two families face terrifying supernatural occurrences, leading to a chilling confrontation with evil." ,
        triller : "https://www.youtube.com/watch?v=PIxpPMyGcpU"
    },
    { 
        title: "Transformers: Rise of the Beasts", 
        poster: "Transformers-_Rise_of_the_Beasts.jpg", 
        plot: "Autobots and Maximals join forces to battle a dangerous new enemy threatening Earth." ,
        triller : "https://www.youtube.com/watch?v=itnqEauWQZM"
    },
    { 
        title: "Oppenheimer", 
        poster: "oppie.jpeg", 
        plot: "The story of J. Robert Oppenheimer, the scientist behind the development of the atomic bomb." ,
        triller : "https://www.youtube.com/watch?v=uYPbbksJxIg"
    },
    { 
        title: "Barbie", 
        poster: "barbie.jpeg", 
        plot: "Barbie embarks on a journey of self-discovery after leaving Barbieland for the real world." ,
        triller : "https://www.youtube.com/watch?v=eQfMbSe7F2g"
    },
    { 
        title: "Indiana Jones and the Dial of Destiny", 
        poster: "jones.jpeg", 
        plot: "Indiana Jones returns for one last adventure, uncovering secrets of an ancient artifact.",
        triller : "https://www.youtube.com/watch?v=eQfMbSe7F2g"
    }

];
   

    const container = document.querySelector(".container");

    //  Create ONE modal outside the loop (to be used for all movies)
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.display = "none"; // Hide by default

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.textContent = "×";

    const modalPoster = document.createElement("img");
    modalPoster.classList.add("modal-poster");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");

    const modalPlot = document.createElement("p");
    modalPlot.classList.add("modal-plot");

    const trailerBtn = document.createElement("button");
    trailerBtn.classList.add("triller");
    trailerBtn.textContent = "Watch Trailer";

    modalContent.append(closeBtn, modalPoster, modalTitle, modalPlot, trailerBtn);
    modal.append(modalContent);
    document.body.append(modal); // Append modal to body

    //  Close modal when 'X' is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    //  Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    //  Loop through movies & create cards
    movies.forEach((movieCurrent) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const poster = document.createElement("img");
        poster.classList.add("image");
        poster.src = movieCurrent.poster;

        const title = document.createElement("p");
        title.classList.add("name");
        title.textContent = movieCurrent.title;

        card.append(poster, title);
        container.append(card);

        //  Add event listener to open modal
        card.addEventListener("click", () => {
            modal.style.display = "block"; // Show modal
            modalPoster.src = movieCurrent.poster;
            modalTitle.textContent = movieCurrent.title;
            modalPlot.textContent = movieCurrent.plot;
            trailerBtn.onclick = () => {
                window.location.href = movieCurrent.triller;
            };
        });
    });


    const general = document.querySelector('.generalcontainer');
const inputform = document.querySelector('.inputform');
const movieinput = document.querySelector('input');

const api_key = "994eaa52";

inputform.addEventListener('submit', (event) => {
  event.preventDefault(); //  Prevent form reload
  const movie_title = movieinput.value.trim(); // Get input value
  localStorage.setItem("title", JSON.stringify(movie_title))
   movieinput.value = ""
  if (movie_title) {
    fetch(`https://www.omdbapi.com/?apikey=${api_key}&s=${movie_title}`)
      .then(response => response.json())
      .then(data => {
        general.innerHTML = ""; //  Clear previous results
        console.log(data)
        
        if (data.Search) {
          data.Search.forEach((movie) => {
            const searchresult = document.createElement('div');
            searchresult.classList.add("searchresults");
            searchresult.style.display = "flex";

            const name = document.createElement('p');
            name.classList.add("name");
            name.textContent = movie.Title; // Display movie title
            
            const date = document.createElement('span');
            date.classList.add("date");
            date.textContent = movie.Year; // Display movie year
            const image = document.createElement('img')
            image.classList.add('searchimage')
            image.src = movie.Poster
            searchresult.append(image , name, date);
            general.append(searchresult);

            searchresult.addEventListener("click", () => {
                localStorage.setItem("selectedMovie", JSON.stringify(movie)); //  Stores full movie details
                window.location.href = "result.html";
              });
           
          });
        } else {
          general.innerHTML = "<p>No results found.</p>";
        }
      })
      .catch(error => console.error(error));
  }
 
});