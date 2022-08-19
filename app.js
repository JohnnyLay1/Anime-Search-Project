// https://api.jikan.moe/v4/anime?q=naruto&sfw

const anime = localStorage.getItem("mal_id")

async function renderAnime (anime) {
    const animes = await fetch (`https://api.jikan.moe/v4/anime?q=dragonball&sfw`)
    const animeData = await animes.json();
    const animeListEl = document.querySelector(".container")
    console.log (animeData)

    // animeListEl.innerHTML = animeData.map((anime) => animeHTML(anime)).join("");
    animeListEl.innerHTML = animeData.map((anime) => animeHTML(anime)).join("");
}

// async function onSearchChange(event) {
//     const anime = event.target.value;

//     setTimeout(() => {
//         renderAnime(anime)
//     }, 1000)
// }

renderAnime(anime)

function animeHTML(anime) {
    return `<div class="anime">
        <div class="anime-img">${anime.images.jpg}</div>
        <h1>${anime.title}</h1>
    </div>`;
}


// const postListEl = document.querySelector(".container")
// const id = local

// async function main() {
//     const users = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const usersData = await users.json();

// }

// main()