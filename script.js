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
    
    if(searchEl.value == ''){
        alert("Please enter a movie name first!");
    } else{
        fetch(`https://imdb-api.com/API/SearchMovie/k_fp9014yi/${searchEl.value}`, 
        requestOptions)
        .then(response => {console.log(response); return response.json()})
        .then(result => console.log(result));
        renderResults()
    }
    
}

submitButton.addEventListener('click', submitSearch);

let renderResults = async function(result){
    // const queryJson = result
    // const queryObj = JSON.parse(queryJson)
    console.log(result[0].title)
    // var listItem = document.createElement('li')
    // listItem.textContent = result."title"
    // listEl.appendChild(listItem)
}

// .then(result => console.log(result["title"]))