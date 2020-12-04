// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const tab = document.querySelector('.topics');

function tabMaker(arr) {
            const div = document.createElement('div');
            div.classList.add('tab');
            div.textContent = `${arr}`;
            return div
    }
axios 
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then((topic) => {
        const topics = topic.data.topics
        topics.forEach((lists) => {
            const list = tabMaker(lists)
            tab.append(list);
           // console.log(list);
        });
    })
    .catch((err) => {
           debugger;
           console.log(err);
       })