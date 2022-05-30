var searchEl = document.querySelector('#search')
var submitButton = document.querySelector('#submit')
var searchFormEl = document.querySelector('#search-form')
var listEl = document.querySelector('#list')
var baseUrl = 'https://imdb-api.com'

// boilerplate request options for imbd api
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// api search event
var submitSearch = (event) => {
    event.preventDefault()
    
    if(searchEl.value == ''){ //will become a modal
        alert("Please enter a movie name first!");
    } else{ //search, then log response, take the response and run renderResults function
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
    var listItem = document.createElement('h1');
    var posterItem = document.createElement('img');
    var descItem = document.createElement('p');
    posterItem.className = "poster";
    listItem.className = "movietitle";
    descItem.className = "description";


    
    // poster
    posterItem.src = result.results[0].image
    listEl.appendChild(posterItem)

    // title
    listItem.textContent = result.results[0].title
    listEl.appendChild(listItem)

    // Description
    descItem.textContent = result.results[0].description
    listEl.appendChild(descItem)


    // console.log(result.results[0].title);
    console.log(result);
}