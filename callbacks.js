
/*

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

*/

//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

//but in this example we these two functions are synchronous
    //getPost() is not waiting for createPost()
    //but here getPost() function neet to be waited for createPost()

const posts = [
    {
        title : 'Post 1',
        body : 'Post one'
    },
    {
        title : 'Post 2',
        body : 'Post two'
    }
];

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function getPost(){
    let output = '';
    setTimeout(()=>{
        posts.forEach(post=>{
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('body').innerHTML = output;       
    },1000)
}

//When you pass a function as an argument, remember not to use parenthesis.
createPost({title : 'Post 3', body : 'Post three'},getPost );

//so that's why we need asynchronpus js
//with asynchronous we have callbacks




