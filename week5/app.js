const root = document.getElementById("root");


fetch('https://jsonplaceholder.typicode.com/users/1/albums')
 .then((response) => response.json())
 .then((json) => render(json));


function render(albums) {
    albums.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");
    const h2 = document.createElement("h2");
    h2.textContent = album.title;
    albumDiv.appendChild(h2);
    root.appendChild(albumDiv);
 });

}