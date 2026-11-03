const animeList = [
    { title: "Jujutsu Kaisen", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400" },
    { title: "Battle Through the Heavens", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400" },
    { title: "Throne of Seal", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400" },
    { title: "Solo Leveling", img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400" }
];

function renderAnime(data) {
    const grid = document.getElementById('animeGrid');
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="card-title">${item.title}</div>
        `;
        grid.appendChild(card);
    });
}

function searchAnime() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = animeList.filter(anime => anime.title.toLowerCase().includes(query));
    renderAnime(filtered);
}

// Initial Render
renderAnime(animeList);