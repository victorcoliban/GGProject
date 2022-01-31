// 2

const array = [
    {id: "1"},
    {title: "Global Grads"},
    {description: "Blog"},
    {date: "26/01/2022"},
    {image: "dog.png"}
];

console.log(array);

// 3
// Create a method addPost(){} and here try to add 2 more post object to original array. console.log the array
// after this change. Should have 7 items now. 

const addPost = (a) => {
    array.push(a);
    console.log(array)
}

addPost({post01: "something"})
addPost({post02: "something else"})



// 4. Create a method changePost(){} 
// and change the title for second post in the array to "Second blog post". console.log the list after. 
// Should have the name changed for second post. 

const changePost = (index) => {
    let result = array[index]['title'] = "Second blog post";
    console.log(result);
}

 changePost(1)

// 5
// Create a method selectOddPost(){} and return the odd posts here. For example the posts 
// with id: 1,3,5. console.log the list after that. 

const selectOddPost = () => {
    let result = array.filter(function(element, index, array) {
        return (index % 2 === 0);
    });
    console.log(result);
}

selectOddPost()

// // 6 
// Create a method showRecentPost(){} and return here the post 
// with the most recent date. console.log the post at the end. 