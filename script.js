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
    var newContainer = document.createElement('div'); //creates a container for query
    var listItem = document.createElement('h1'); //creates an h1 for the title
    var posterItem = document.createElement('img'); //creates an img for the poster
    var descItem = document.createElement('p'); // creates a p for the description
    var linkItem = document.createElement('a');// creates a link when clicked on poster
    //sets the class of the elements
    linkItem.id = result.results[0].id; //sets the id of the link to the movie id
    newContainer.className = "newMovieItem";
    posterItem.className = "poster"; 
    listItem.className = "movietitle";
    descItem.className = "description";
    // adds the query container to the #list parent
    listEl.appendChild(newContainer)
    // sets poster source to the first of the response array, then adds it to the new container
    newContainer.appendChild(linkItem)
    // sets the title to the text of the first response array, then adds it to the new container
    listItem.textContent = result.results[0].title
    newContainer.appendChild(listItem)
    // sets the description to the text of the first array, then adds it to the new container
    descItem.textContent = result.results[0].description
    newContainer.appendChild(descItem)
    // makes the link a child of the img
    posterItem.src = result.results[0].image
    linkItem.appendChild(posterItem)
    
    // fetches the YoutubeTrailer URL for the searched movie.
    fetch(`https://imdb-api.com/API/YoutubeTrailer/k_fp9014yi/${result.results[0].id}`,requestOptions)
    .then(response => {console.log(response); return response.json()})
    .then((result) => {
        this.trailerAddition(result);
    })
}

function trailerAddition(result){
    // appends the poster to link to the searched movies YoutubeTrailer Url on another tab
    var posterId = document.querySelector('#'+`${result.imDbId}`)
    posterId.href = result.videoUrl
    posterId.target = "_blank"
    // console.log(result.videoUrl)
    // console.log(result.imDbId)
}