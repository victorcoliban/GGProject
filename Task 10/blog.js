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

const addPost = (a) => {
    array.push(a);
}

addPost({post01: "something"})
addPost({post02: "something else"})

console.log(array)

// 4. Create a method changePost(){} 
// and change the title for second post in the array to "Second blog post". console.log the list after. 
// Should have the name changed for second post. 

 const changePost = (index) => array[index]['title'] = "Second blog post";

 changePost(1)

console.log(array)

// 5

let selectOddPost = array.filter(function(element, index, array) {
    return (index % 2 === 0);
  });

console.log(selectOddPost)

// 6 

