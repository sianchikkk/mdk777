const movieTitles = [
  'Космическая станция',
  'Тайна старого дома',
  'Поезд на север',
];
const moviePosters = [
  'covers/space.jpg',
  'covers/house.jpg',
  'covers/train.jpg',
];

const movieList = document.getElementById('movieList');
const nameInput = document.getElementById('movieName');
const posterInput = document.getElementById('moviePoster');
const addButton = document.getElementById('addMovie');

addButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const poster = posterInput.value.trim();
  if (name === '' || poster === '') {
    return;
  }
  movieTitles.push(name);
  moviePosters.push(poster);
  nameInput.value = '';
  posterInput.value = '';
  renderMovies();
}); 

function renderMovies() {
  movieList.innerHTML = '';
  movieTitles.forEach((movieTitle, index) => {
    const item = document.createElement('li');
    const poster = document.createElement('img');
    poster.src = moviePosters[index];
    poster.alt = '';
    poster.width = 64;
    const title = document.createElement('span');
    title.textContent = movieTitle;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', () => {
      movieTitles.splice(index, 1);
      moviePosters.splice(index, 1);
      renderMovies();
    }); 
    item.append(poster, title, removeButton);
    movieList.append(item);
  }); 
} 
renderMovies();