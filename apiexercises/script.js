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
