const apiKey = "GBpcym3fkbvHBo0S1GLHoJsU9CrhgrF3Zc9T0GQFSMuOGmfhTJmJKmTK";

const bottone1 = document.getElementById("carica-img");
bottone1.addEventListener("click", (e) => {
  e.preventDefault();
  const url = "https://api.pexels.com/v1/search?query=summer";

  fetch(url, {
    headers: { Authorization: apiKey },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Errore server");
      return response.json();
    })
    .then((dati) => {
      const immaginihtml = document.querySelectorAll("img");
      immaginihtml.forEach((img, i) => {
        img.src = dati.photos[i].src.medium;
      });

      const small = document.querySelectorAll("small");
      small.forEach((minuti, i) => {
        minuti.innerText = "ID: " + dati.photos[i].id;
      });
    })
    .catch((err) => console.log("errore", err));
});

const different = document.getElementById("query-diversa");
different.addEventListener("click", (e) => {
  e.preventDefault();
  const url2 = "https://api.pexels.com/v1/search?query=sea";

  fetch(url2, {
    headers: { Authorization: apiKey },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Errore!!!");
      return response.json();
    })
    .then((datidelmare) => {
      // 1. Carico le Immagini
      const datimare = document.querySelectorAll("img");
      datimare.forEach((img, i) => {
        img.src = datidelmare.photos[i].src.medium;
      });

      const small = document.querySelectorAll("small");
      small.forEach((minuti, i) => {
        minuti.innerText = "ID: " + datidelmare.photos[i].id;
      });
    })
    .catch((err) => console.log("errorissimo"));
});

const tasto = document.querySelectorAll(".card .btn-group button:last-child");
tasto.forEach((bottone) => {
  bottone.innerText = "Hide";
  bottone.addEventListener("click", (e) => {
    e.preventDefault();
    const colonna = e.target.closest(".col-md-4");
    if (colonna) {
      colonna.remove();
    }
  });
});

const barradiricerca = document.getElementById("search");
barradiricerca.innerHTML = ` <form id="search-form" class="d-flex w-100" >
      <input id= user-query class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button id=form-button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>`;
barradiricerca.style.width = "350px";
barradiricerca.style.display = "block";

const form = document.getElementById("search-form");
const input = document.getElementById("user-query");
const buttonform = document.getElementById("form-button");
buttonform.addEventListener("click", (e) => {
  e.preventDefault();

  const query = input.value;
  if (query) {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: { Authorization: apiKey },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore", response.status);
      }
    });
  } else {
    console.log("barra di ricerca vuota");
  }
});
