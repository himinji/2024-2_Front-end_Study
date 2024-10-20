const root = document.getElementById("root");


fetch('https://jsonplaceholder.typicode.com/photos')
 .then((response) => response.json())
 .then((json) => render(json));


function render(photos) {
 data.slice(0, 10).forEach((item) => {
 const h2 = document.createElement("h2");
 h2.textContent = item.title;
 const img = document.createElement("img");
 img.src = item.url;
 img.alt = item.title;
 img.style.width = '300px';
 root.appendChild(h2);
 root.appendChild(img); 
 });

}