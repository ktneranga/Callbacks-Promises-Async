/* 
async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/

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

//Async / Await
async function init(){
    await createPost({title : 'Post 3', body : 'This is post three'});
    getPost();
}

init();

// createPost({title : 'Post 3', body : 'This is post three'}).then(getPost)
// .catch(err=>console.log(err));


async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    let output = '';
   data.forEach(user=>{
        output += `<li>${user.name}</li>`
   })
   document.querySelector('body').innerHTML=output;
}

fetchUsers();

