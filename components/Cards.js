// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardSpot = document.querySelector('.cards-container');

// axios pull
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((resp) => {
        const article =resp.data.articles;
        const arrayOne = article.javascript;
        const arrayTwo = article.bootstrap;
        const arrayThree = article.jquery;
        const arrayFour = article.node;
        const arrayFive = article.technology;
        const masterArray = arrayOne.concat(arrayTwo, arrayThree, arrayFour, arrayFive);
        console.log(masterArray);
        masterArray.forEach((item) => {
            const authorCard = articleMaker(item);
            cardSpot.append(authorCard);
        });//end of forEach
        
    })//then end
    .catch((err) => {
        console.log(err)
        debugger;
    });//end of catch


function articleMaker(obj) {
    // Create element
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const contain = document.createElement('div');
    const pict = document.createElement('img');
    const name = document.createElement('span');

    // appending
    card.append(headline);
    card.append(author);
    author.append(contain);
    contain.append(pict);
    author.append(name);

    //Classname
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    contain.classList.add('img-container');
    
    //Text addition
    headline.textContent = `${obj.headline}`
    pict.src = obj.authorPhoto
    name.textContent = `By: ${obj.authorName}`

    //EventListener
    card.addEventListener('click', (e) => {
        console.log(obj.headline)
    });

    //return
    return card
}//end of function