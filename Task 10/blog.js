// 2

console.log("****** Ex 2 ******")

let blogItems = [
    {
        id: "1",
        title: "Cocker Spaniel",
        description: "description of Cocker Spaniel",
        date: "02/01/2022",
        image: "cocker.jpg"
    },
    {
        id: "2",
        title: "Basset Hound",
        description: "description of Basset Hound",
        date: "03//01/2022",
        image: "basset.jpg"
    },
    {
        id: "3",
        title: "Black Golden Retriever",
        description: "description of Black Golden Retriever",
        date: "04/01/2022",
        image: "retriever.jpeg"
    },
    {
        id: "4",
        title: "Beagle",
        description: "description of Beagle",
        date: "05/01/2022",
        image: "beagle.jpg"
    },
    {
        id: "5",
        title: "German Sheperd",
        description: "description of German Sheperd",
        date: "06/01/2022",
        image: "germanSheperd.jpg"
    },
];

console.log(blogItems);

// // 3
// // Create a method addPost(){} and here try to add 2 more post object to original blogItems. console.log the blogItems
// // after this change. Should have 7 items now. 

console.log("****** Ex 3 ******")

const addPost = () => {
    let newblogItems = [...blogItems];
    newblogItems.push({id: "6", title: "post01", description: "description of post01", date: "31/01/2022", image: "post01.jpg"},
                  {id: "7", title: "post02", description: "description of post02", date: "01/02/2022", image: "post02.jpg"});
    console.log(newblogItems)
}

addPost()

// // 4. Create a method changePost(){} 
// // and change the title for second post in the blogItems to "Second blog post". console.log the list after. 
// // Should have the name changed for second post. 

console.log("****** Ex 4 ******")

const changePost = () => {
    let newblogItems = [...blogItems];
    newblogItems[1].title = "Second blog post";
    console.log(newblogItems)
}

  changePost()

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

const selectOddPost = () => {
    let oddItems = blogItems.filter((eleent, index, blogItems) => index % 2 === 0);
    console.log(oddItems)
}
selectOddPost()

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

showRecentPost()