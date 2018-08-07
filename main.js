const searchForm = document.querySelector('form');
const userInput = document.querySelector('input');
const API_URL ='https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY';

searchForm.addEventListener('submit', submitted);

function submitted(e){
  event.preventDefault();
  const search = userInput.value;
  
  userSearch(search);
}

function userSearch(search){
  const url = `${API_URL}$term=${search}`;
  fetch(url)
    .then(rersponse => response.json())
    .then(result => {
      console.log(result);
    });
}