
document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Fernandinho', image: './img/img1.png' },
        { name: 'Talles Roberto', image: './img/img2.png' },
        { name: 'Anderson Freire', image: './img/img3.png' },
        { name: 'Regis Danese', image: './img/img4.png' },
        { name: 'André Valadão', image: './img/img5.png' },
      
    ]

    const albumsData = [
        { name: 'Venha o Teu Reino', artist: 'Fernandinho', image: './img/album1.png' },
        { name: 'Eu Escolho Deus', artist: 'Talles Roberto', image: './img/album2.png' },
        { name: 'Raridade', artist: 'Anderson Freire', image: './img/album3.png' },
        { name: 'Tu Podes', artist: 'Regis Danese', image: './img/album4.png' },
        { name: 'Pela fé', artist: 'André Valadão', image: './img/album5.png' },
      
    ]

    const artistGrid = document.querySelector(".artists-grid")
    const albumsGrid = document.querySelector(".albums-grid")

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
           <img src="${artist.image}" alt="imagem do ${artist.name}">
           <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
           </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
           <img src="${album.image}" alt="imagem do ${album.name}">
           <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
           </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})





