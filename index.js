// Sample data (replace with your anime data)
const animeData = [
    {
        title: "One Piece",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
        imdb: "https://www.imdb.com/title/tt0388629/"
    },
    {
        title: "Solo Leveling",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
        imdb: "https://www.imdb.com/title/tt21209876/"
    },
    {
        title: "Mashle: Magic and Muscles",
        poster: "https://m.media-amazon.com/images/M/MV5BZDE0ZTRhMTQtMTIzNC00NjY4LTllMmEtYjY4Y2ZlZmZlODU0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UY2184_.jpg",
        imdb: "https://www.imdb.com/title/tt21209804/"
    },
    {
        title: "Jujutsu Kaisen",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
        imdb: "https://www.imdb.com/title/tt12343534/"
    },
    {
        title: "Tokyo Revengers",
        poster: "https://m.media-amazon.com/images/M/MV5BMTdmYmVlODktNWM0Yi00NDNlLWJhMjQtMzg1MzVhYzU1N2IwXkEyXkFqcGdeQXVyMTcxNDcyNDA4.jpg",
        imdb: "https://www.imdb.com/title/tt13196080/"
    },
    {
        title: "The Seven Deadly Sins",
        poster: "https://m.media-amazon.com/images/M/MV5BM2NhNjliY2YtYTZlOS00MzZmLWFlYzAtYWZlNjVjMjZlZmNmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@.jpg",
        imdb: "https://www.imdb.com/title/tt3909224/"
    },
    {
        title: "Baki",
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p0Jz2IQ12YqKwHwzD00KpXjidn8.jpg",
        imdb: "https://www.imdb.com/title/tt6357658/"
    },
    {
        title: "Baki Hanma",
        poster: "https://m.media-amazon.com/images/M/MV5BZTE5ZjJmOTMtNzgwZS00NjI0LWEwYzItNDhiNmU5MTc0NTM5XkEyXkFqcGdeQXVyMTM1MjI2OTYx._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt13357140/"
    },
    {
        title: "My Hero Academia",
        poster: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt5626028/"
    },
    {
        title: "Hunter x Hunter",
        poster: "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt2098220/"
    },
    {
        title: "Naruto",
        poster: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0409591/"
    },
    {
        title: "Naruto Shippuden",
        poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0988824/"
    },
    {
        title: "Demon Slayer",
        poster: "https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt9335498/"
    },
    {
        title: "Death Note",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0877057/"
    },
    {
        title: "One Punch Man",
        poster: "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt4508902/"
    },
    {
        title: "Mob Psycho 100",
        poster: "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt5897304/"
    },
    {
        title: "Blue Lock",
        poster: "https://m.media-amazon.com/images/M/MV5BODBmM2JmY2EtMzRlZC00Njk0LTg5NGMtZjdjMjQ5ZTJhYWQ3XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt15222080/"
    },
    {
        title: "Spy x Family",
        poster: "https://m.media-amazon.com/images/M/MV5BZDY5NTI3ZjUtNGY5ZC00MmE1LWI0ZTUtNDI3YTQ0NGFkMWJlXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt13706018/"
    },
    {
        title: "Hell's Paradise: Jigokuraku",
        poster: "https://m.media-amazon.com/images/M/MV5BYmU0YjMyNDctNWZhYS00ZGNiLThlNWYtN2FiNTQ1NWM4YWFjXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt13911284/"
    },
    {
        title: "Yasuke",
        poster: "https://m.media-amazon.com/images/M/MV5BZjI2OGIwNWMtNDdmZS00NzgyLTkwOTctNGRmNmUyNGY3NjNiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt9310330/"
    },
    {
        title: "The Seven Deadly Sins: Four Knights of the Apocalypse",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY3NTI1YTUtM2FlZC00N2FiLWI5OGYtZTQ3OWI5MjA0M2M0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt20228550/"
    },
    {
        title: "Dragon Ball",
        poster: "https://m.media-amazon.com/images/M/MV5BYzI0YjYxY2UtNzRjNS00NTZiLTgzMDItNGEzMjU5MmE0ZWJmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0088509/"
    },
    {
        title: "Dragon Ball Z",
        poster: "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0214341/"
    },
    {
        title: "Dragon Ball Super",
        poster: "https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt4644488/"
    },
    // Add more anime objects as needed
    
];

// Sort alphabetically 
animeData.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
});

// Function to generate anime cards
function generateAnimeCards() {
    const animeList = document.getElementById("animeList");
    animeList.innerHTML = ""; // Clear existing content

    animeData.forEach(anime => {
        const card = document.createElement("div");
        card.classList.add("anime-card");

        const poster = document.createElement("img");
        poster.classList.add("anime-poster");
        poster.src = anime.poster;
        poster.alt = anime.title;

        // Open IMDb link when the poster is clicked
        poster.addEventListener("click", function() {
            window.open(anime.imdb, "_blank");
        });

        const details = document.createElement("div");
        details.classList.add("anime-details");

        const title = document.createElement("h2");
        title.classList.add("anime-title");
        title.textContent = anime.title;

        details.appendChild(title);

        card.appendChild(poster);
        card.appendChild(details);

        animeList.appendChild(card);
    });
}

// Generate anime cards when the page loads
window.addEventListener("load", generateAnimeCards);
