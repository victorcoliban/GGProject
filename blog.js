console.log("****** Ex 2 ******")

let blogItems = [
    {
        id: "card-body-1",
        title: "Cocker Spaniel",
        description: "Cocker Spaniels are dogs belonging to two breeds of the spaniel dog type: the American Cocker Spaniel and the English Cocker Spaniel, both of which are commonly called simply Cocker Spaniel in their countries of origin.",
        date: "01/02/2022",
        image: "media/cocker.jpg"
    },
    {
        id: "card-body-2",
        title: "Basset Hound",
        description: "Bassets are large, short, solid and long, with curved sabre tails held high over their long backs. An adult dog weighs between 20 and 35 kilograms (44 and 77 lb). This breed, relative to its size, is heavier-boned than any other.",
        date: "01/03/2022",
        image: "media/basset.jpg"
    },
    {
        id: "card-body-3",
        title: "Black Golden Retriever",
        description: "The Black Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        date: "01/04/2022",
        image: "media/retriever.jpeg"
    },
    {
        id: "card-body-4",
        title: "Beagle",
        description: "The origin of the beagle is not known. In the 11th century, William the Conqueror brought the St. Hubert Hound and the Talbot hound to Britain.",
        date: "01/05/2022",
        image: "media/beagle.jpg"
    },
    {
        id: "card-body-5",
        title: "German Sheperd",
        description: "German Shepherds are medium to large-sized dogs. The breed standard height at the withers is 60–65 cm (24–26 in) for males, and 55–60 cm (22–24 in) for females.",
        date: "01/06/2022",
        image: "media/germanSheperd.jpg"
    },
    {
        id: "card-body-6",
        title: "Golden Retriever",
        description: "The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.",
        date: "01/07/2022",
        image: "media/goldenRetriever.jpg"
    },
];

console.log(blogItems);

// // 3
// // Create a method addPost(){} and here try to add 2 more post object to original blogItems. console.log the blogItems
// // after this change. Should have 7 items now. 

console.log("****** Ex 3 ******")

// const addPost = () => {
//     let newblogItems = [...blogItems];
//     newblogItems.push({id: "6", title: "post01", description: "description of post01", date: "31/01/2022", image: "post01.jpg"},
//                   {id: "7", title: "post02", description: "description of post02", date: "01/02/2022", image: "post02.jpg"});
//     console.log(newblogItems)
// }

// addPost()

// // 4. Create a method changePost(){} 
// // and change the title for second post in the blogItems to "Second blog post". console.log the list after. 
// // Should have the name changed for second post. 

console.log("****** Ex 4 ******")

// const changePost = () => {
//     let newblogItems = [...blogItems];
//     newblogItems[1].title = "Second blog post";
//     console.log(newblogItems)
// }

//   changePost()

// 5
// Create a method selectOddPost(){} and return the odd posts here. For example the posts 
// with id: 1,3,5. console.log the list after that. 

console.log("****** Ex 5 ******")

// const selectOddPost = () => {
//     let oddItems = blogItems.filter(function(element, index, blogItems) {
//         return (index % 2 === 0);
//     });
//     console.log(oddItems);
// }

// selectOddPost()

// const selectOddPost = () => {
//     let oddItems = blogItems.filter((eleent, index, blogItems) => index % 2 === 0);
//     console.log(oddItems)
// }
// selectOddPost()

// // // 6 
// // Create a method showRecentPost(){} and return here the post 
// // with the most recent date. console.log the post at the end. 

console.log("****** Ex 6 ******")

// const showRecentPost = () => {
//     console.log(blogItems.map(function(element) { return element.date; }).sort().reverse()[0]);
// }

// showRecentPost()

showRecentPost = () => {
    blogItems.sort(function(a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
    console.log(blogItems[0])
}

// ****** TASK 11 ******

// ******* Ex 4 *******

// showRecentPost()

// ******* Ex 2 & 5*******

for(i = 0; i < blogItems.length; i++) {

    let newDiv = document.createElement('div');
    newDiv.className = 'card-body text-center col-lg-4 col-md-6 col-xs-12';
    document.getElementById('card-id').appendChild(newDiv);
    newDiv.setAttribute('id', blogItems[i].id);

    let postDate = document.createElement('date'); // might need to change date with input 
    postDate.setAttribute('value', blogItems[i].date);
    newDiv.appendChild(postDate);

    let image = document.createElement('img');
    image.classList.add('img-fluid');
    image.setAttribute('src', blogItems[i].image);
    image.append(blogItems[i].image);
    newDiv.appendChild(image);

    let header = document.createElement('h2');
    header.className = 'card-title mb-3 pb-3';
    newDiv.appendChild(header);
    header.append(blogItems[i].title);

    let paragraph = document.createElement('p');
    paragraph.className = 'lead card-text container-fluid';
    newDiv.appendChild(paragraph);
    paragraph.append(blogItems[i].description);

    // let btnGroup = document.createElement('div');
    // btnGroup.className = 'btn-group';
    // document.getElementById('card-id').appendChild(btnGroup);

    // let btnGroup = document.getElementById('btn-group-id');
    // document.getElementById('card-id').innerHTML += "something";

    // btnGroup.innerHTML = newDiv.innerHTML + btnGroup;
    // newDiv.appendChild(btnGroup);
    // console.log(newDiv);
    // newDiv.appendChild(x);
    // document.getElementById('card-id').appendChild(btnGroup);

    let btnReadMore = document.createElement('button');
    btnReadMore.innerHTML = "Read more";
    btnReadMore.className = 'btn btn-outline-secondary';
    newDiv.appendChild(btnReadMore);

    let btnEdit = document.createElement('button');
    btnEdit.innerHTML = "Edit";
    btnEdit.className = 'btn btn-outline-secondary';
    newDiv.appendChild(btnEdit);

    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = "Delete";
    btnDelete.className = 'btn btn-outline-secondary';
    newDiv.appendChild(btnDelete);

}

// ******* 3 *******

// $('.navbar-toggler').click(function() {
//     $('.collapse').toggleClass('show');
// })

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.collapse').classList.toggle('show');
})



