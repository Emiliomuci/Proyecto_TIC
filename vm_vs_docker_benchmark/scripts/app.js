document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.getElementById('playlist');
    const toggleBtn = document.getElementById('toggle-playlist');
    const form = document.getElementById('song-form');
    const inputTitle = document.getElementById('title');
    const inputArtist = document.getElementById('artist');
  
    // Obtener canciones de localStorage o devolver array vacío
    const getSongs = () => {
      try {
        const stored = localStorage.getItem('playlist');
        return stored ? JSON.parse(stored) : [];
      } catch (err) {
        console.error('Error leyendo playlist:', err);
        return [];
      }
    };
  
    // Guardar canciones
    const saveSongs = (songs) => {
      localStorage.setItem('playlist', JSON.stringify(songs));
    };
  
    // Mostrar canciones en la lista
    const renderSongs = () => {
      const songs = getSongs();
      playlist.innerHTML = '';
  
      if (songs.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No hay canciones en la playlist.';
        playlist.appendChild(li);
        return;
      }
  
      songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
  
        const delBtn = document.createElement('button');
        delBtn.textContent = '❌';
        delBtn.onclick = () => {
          deleteSong(index);
        };
        delBtn.style.marginLeft = '10px';
  
        li.appendChild(delBtn);
        playlist.appendChild(li);
      });
    };
  
    // Agregar canción
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = inputTitle.value.trim();
      const artist = inputArtist.value.trim();
  
      if (!title || !artist) {
        alert('Completa ambos campos');
        return;
      }
  
      const newSong = { title, artist };
      const songs = getSongs();
      songs.push(newSong);
      saveSongs(songs);
  
      form.reset();
      renderSongs();
      playlist.classList.remove('hidden');
      toggleBtn.textContent = 'Ocultar canciones';
    });
  
    // Eliminar canción
    const deleteSong = (index) => {
      const songs = getSongs();
      songs.splice(index, 1);
      saveSongs(songs);
      renderSongs();
    };
  
    // Mostrar/ocultar lista
    toggleBtn.addEventListener('click', () => {
      playlist.classList.toggle('hidden');
      if (playlist.classList.contains('hidden')) {
        toggleBtn.textContent = 'Mostrar canciones';
      } else {
        toggleBtn.textContent = 'Ocultar canciones';
        renderSongs();
      }
    });
  
    // Mostrar automáticamente si hay canciones guardadas
    if (getSongs().length > 0) {
      renderSongs();
    }
  });
  