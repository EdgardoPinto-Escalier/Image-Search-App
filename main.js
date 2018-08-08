const API_URL ='https://pixabay.com/api/?key=YOUR_API_KEY';
const searchForm = document.querySelector('form');
const userInput = document.querySelector('input');
const imgLoading = document.querySelector('#imgLoading');
const imgSection = document.querySelector('.images');
  

imgLoading.style.display = 'none';

searchForm.addEventListener('submit', submitted);

function submitted(e){
  event.preventDefault();
  const search = userInput.value;
  
  userSearch(search)
    .then(imgDisplay);
}

function userSearch(search){
  const url = `${API_URL}$term=${search}`;
  imgLoading.style.display = '';
  imgSection.innerHTML = '';
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.hits;
    });
}

function imgDisplay(images){
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.largeImageURL;
    imgSection.appendChild(imgElement);
  });
  imgLoading.style.display = 'none';
}

