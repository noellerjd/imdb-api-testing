var searchEl = document.querySelector('#search')
var submitButton = document.querySelector('#submit')
var searchFormEl = document.querySelector('#search-form')
var listEl = document.querySelector('#list')
var baseUrl = 'https://imdb-api.com'


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


var submitSearch = (event) => {
    event.preventDefault()
    
    if(searchEl.value == ''){ //will become a modal
        alert("Please enter a movie name first!");
    } else{
        fetch(`https://imdb-api.com/API/SearchMovie/k_fp9014yi/${searchEl.value}`, 
        requestOptions)
        .then(response => {console.log(response); return response.json()})
        .then((result) => {
            this.renderResults(result);
        })
    } 
    
}

submitButton.addEventListener('click', submitSearch);

function renderResults(result) {
    console.log(result);
    console.log(result.results[0].title);
    
    var listItem = document.createElement('li')
    listItem.textContent = result.results[0].title
    listEl.appendChild(listItem)
}