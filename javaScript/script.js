document.addEventListener('DOMContentLoaded', function() {
    const tracks = [
        {
            id: '6RJdYpFQwLyNfDc5FbjkgV',
            title: "Stricken",
            artist: "Disturbed",
            image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            duration: "4:05"
        },
        {
            id: '5t1QXsY6FNn42RGHiETiKD',
            title: "I Don't know",
            artist: "Erika",
            image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
            duration: "3:21"
        },
        {
            id: '6tp27J7xy18DQiQXut3GsF',
            title: "Don't Lie",
            artist: "Black Eyed Peas",
            image: "https://i.scdn.co/image/ab67616d00001e029ad3e9959f48d513886b8933",
            duration: "3:39"
        },
        {
            id: '2nLtzopw4rPReszdYBJU6h',
            title: "Numb",
            artist: "Linkin Park",
            image: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
            duration: "3:07"
        }
    ];

    const genres = [
        { name: "Pop", color: "linear-gradient(to bottom right,rgb(248, 14, 14),rgb(193, 249, 40))" },
        { name: "Electronic", color: "linear-gradient(to bottom right,rgb(134, 3, 248),rgb(248, 34, 255))" },
        { name: "Hip-Hop", color: "linear-gradient(to bottom right,rgb(106, 204, 204),rgb(90, 255, 25))" },
        { name: "Rock", color: "linear-gradient(to bottom right,rgb(7, 31, 255),rgb(3, 3, 3))" },
        { name: "Classical", color: "linear-gradient(to bottom right,rgb(14, 147, 187),rgb(81, 233, 127))" }
    ];

const playlists = [
    {
        title: "Today's Top Hits",
        description: "The most popular songs right now",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        title: "Chill Vibes",
        description: "Relaxing tunes for your downtime",
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        title: "Workout Energy",
        description: "Power your exercise routine",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        title: "Focus Flow",
        description: "Music to concentrate",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    }
];

const artists = [
    {
        name: "Creedence Clearwater Revival",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        name: "Coldplay",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        name: "Black Eyed Peas",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    },
    {
        name: "Teriyaki Boyz",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
    }
];

    const trackTitle = document.querySelector('.track-title');
    const trackArtist = document.querySelector('.track-artist');
    const trackImage = document.querySelector('.track-image img');
    const likeBtn = document.querySelector('.like-btn');
    const trackGrid = document.querySelector('.track-grid');
    const genreGrid = document.querySelector('.genre-grid');
    const playlistGrid = document.querySelector('.playlist-grid');
    const artistGrid = document.querySelector('.artist-grid');
    const spotifyPlayer = document.getElementById('spotify-player');
    
    let currentTrackIndex = 0;

    function init() {
        renderTracks();
        renderGenres();
        renderPlaylists();
        renderArtists();
        setupEventListeners();
        setupDarkModeToggle();
    }

    function renderTracks() {
        trackGrid.innerHTML = '';
        tracks.forEach((track, index) => {
            const trackCard = document.createElement('div');
            trackCard.className = 'track-card';
            trackCard.innerHTML = `
                <div class="track-image">
                    <img src="${track.image}" alt="${track.title}">
                    <button class="play-btn"><i class="fas fa-play"></i></button>
                </div>
                <div class="track-info">
                    <span class="track-title">${track.title}</span>
                    <span class="track-artist">${track.artist}</span>
                </div>
                <div class="track-actions">
                    <button class="action-btn"><i class="far fa-heart"></i></button>
                    <button class="action-btn"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            `;
            trackCard.addEventListener('click', () => playTrack(index));
            trackGrid.appendChild(trackCard);
        });
    }

    function renderGenres() {
        genreGrid.innerHTML = '';
        genres.forEach(genre => {
            const genreCard = document.createElement('div');
            genreCard.className = 'genre-card';
            genreCard.style.backgroundImage = genre.color;
            genreCard.innerHTML = `<span class="genre-name">${genre.name}</span>`;
            genreGrid.appendChild(genreCard);
        });
    }

    function renderPlaylists() {
        playlistGrid.innerHTML = '';
        playlists.forEach(playlist => {
            const playlistCard = document.createElement('div');
            playlistCard.className = 'playlist-card';
            playlistCard.innerHTML = `
                <div class="playlist-image">
                    <img src="${playlist.image}" alt="${playlist.title}">
                    <button class="play-btn"><i class="fas fa-play"></i></button>
                </div>
                <div class="playlist-info">
                    <span class="playlist-title">${playlist.title}</span>
                    <span class="playlist-description">${playlist.description}</span>
                </div>
            `;
            playlistGrid.appendChild(playlistCard);
        });
    }

    function renderArtists() {
        artistGrid.innerHTML = '';
        artists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                <div class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </div>
                <span class="artist-name">${artist.name}</span>
            `;
            artistGrid.appendChild(artistCard);
        });
    }

    function playTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        
        spotifyPlayer.src = `https://open.spotify.com/embed/track/${track.id}`;
        
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        
        document.querySelectorAll('.track-card').forEach((card, i) => {
            if (i === index) {
                card.classList.add('playing');
            } else {
                card.classList.remove('playing');
            }
        });
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function setupEventListeners() {
        likeBtn.addEventListener('click', function() {
            this.classList.toggle('far');
            this.classList.toggle('fas');
            this.classList.toggle('liked');
        });

        document.getElementById('next-btn').addEventListener('click', nextTrack);
        document.getElementById('prev-btn').addEventListener('click', prevTrack);

        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'ArrowRight':
                    nextTrack();
                    break;
                case 'ArrowLeft':
                    prevTrack();
                    break;
            }
        });
    }

    function setupDarkModeToggle() {
        const darkModeToggle = document.createElement('div');
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(darkModeToggle);
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                this.innerHTML = '<i class="fas fa-sun"></i>';
                document.documentElement.style.setProperty('--dark-bg', '#f5f5f5');
                document.documentElement.style.setProperty('--dark-secondary', '#ffffff');
                document.documentElement.style.setProperty('--dark-tertiary', '#e0e0e0');
                document.documentElement.style.setProperty('--light-text', '#333333');
                document.documentElement.style.setProperty('--light-secondary', '#666666');
                document.documentElement.style.setProperty('--light-tertiary', '#cccccc');
            } else {
                this.innerHTML = '<i class="fas fa-moon"></i>';
                document.documentElement.style.setProperty('--dark-bg', '#121212');
                document.documentElement.style.setProperty('--dark-secondary', '#181818');
                document.documentElement.style.setProperty('--dark-tertiary', '#282828');
                document.documentElement.style.setProperty('--light-text', '#ffffff');
                document.documentElement.style.setProperty('--light-secondary', '#b3b3b3');
                document.documentElement.style.setProperty('--light-tertiary', '#535353');
            }
        });
    }

    init();
});