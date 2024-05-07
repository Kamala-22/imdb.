async function getData() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1883110a00msh3220c7c04cddc25p1c2be4jsn5e9e91f5fea8',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };



    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON
        localStorage.setItem("movies", JSON.stringify(result)); // Store JSON object as string
    } catch (error) {
        console.error(error);
    }
}

// window.addEventListener("DOMContentLoaded", getData());


showData = () => {
    console.log('showData');
    let movies = JSON.parse(localStorage.getItem("movies"));

    console.log(movies);

    for (let i = 0; i < movies.length; i++) {
        let div = document.createElement("div");

        div.className = "image_1";
        div.setAttribute("id", i)

        div.addEventListener("click", () => {

            window.location.href = "films.html";
            localStorage.setItem("movie", JSON.stringify(movies[i]))
        })

        let html = `<img src="${movies[i].image}" alt="movie image" class="image">
                    <h4>${movies[i].rating}</h4>
                    <h4>${movies[i].title}</h4>
                    <button id="watch">watch</button>
                    <button id="trailer">trailer</button>`;

        div.innerHTML += html;

        document.getElementsByClassName("main")[0].appendChild(div);

        console.log(movies[i]);
    }
}
window.addEventListener("DOMContentLoaded", getData());
