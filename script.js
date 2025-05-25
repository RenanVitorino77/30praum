const artistas = [
  {
    nome: "Matue",
    imagem: "59de9131-06a4-46c4-acca-eabf5e401b37.jpeg",
    musica: "333",
    spotify: "https://open.spotify.com/intl-pt/track/0qsKefQyXCzaxjHbOcd8IU?si=b0682cd2ef744231",
    instagram: "https://www.instagram.com/matue?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    nome: "Wiu",
    imagem: "ce249847-3a89-42ca-a13e-9638b1fb9972.jpeg",
    musica: "Ruas de Fortal",
    spotify: "https://open.spotify.com/intl-pt/track/3f6sD0ixZTFHToSjAj79jM?si=93e3bd8105c24346",
    instagram: "https://www.instagram.com/hotwiu30?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    nome: "Teto",
    imagem: "4566c122-282d-4a51-9f10-9206bf255cb8.jpeg",
    musica: "Grécia",
    spotify: "https://open.spotify.com/intl-pt/track/66WeFkFXdWoDaKgk8SrnBs?si=14ca6434428342df",
    instagram: "https://www.instagram.com/euteto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    nome: "Brandão",
    imagem: "c3cb9331-f891-427b-b4d8-a7e5d9e97188.jpeg",
    musica: "Espinafre",
    spotify: "https://open.spotify.com/intl-pt/track/4q1E1nS41PGDlgLD0tnWIc?si=cfd8b9d0b2694d2a",
    instagram: "https://www.instagram.com/brandao085?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
];

const container = document.getElementById("artistContainer");

artistas.forEach(artista => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${artista.imagem}" alt="${artista.nome}">
    <div class="info">
      <h3>${artista.nome}</h3>
      <p>Música: ${artista.musica}</p>
    </div>
    <div class="buttons">
      <a href="${artista.spotify}" class="spotify" target="_blank">Spotify</a>
      <a href="${artista.instagram}" class="instagram" target="_blank">Instagram</a>
    </div>
  `;

  container.appendChild(card);
});



// 🔒 Garante que todos os links abram em nova aba com segurança
document.querySelectorAll('a').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

