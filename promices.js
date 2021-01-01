
/* 

A JavaScript Promise object contains both the producing code and calls to the consuming code:

*/

//setTimeout(function, milliseconds, param1, param2, ...)

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

function getPost(){
    let output = '';
    setTimeout(()=>{
        posts.forEach(post=>{
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('body').innerHTML = output;       
    },1000)
}

const createPost = (post) =>{
    return new Promise((Resolve, Reject)=>{
        setTimeout(()=>{
            posts.push(post);

            let x = 0;

         if(x==0){
             Resolve();
         }else{
             Reject('Error : Something went wrong!');
         }


        },2000)
    })
    
}

createPost({title : 'Post 3', body : 'This is post three'}).then(getPost)
.catch(err=>console.log(err));





//so that's why we need asynchronpus js
//with asynchronous we can have promises
//most of the time we are dealing with promises,  node js and mongoose db library
//we have to response for the promises
