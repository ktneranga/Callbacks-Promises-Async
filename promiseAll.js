//promiseAll



const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Good bye');
});

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>console.log(data));

async function myFetch(){
    const promise = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = promise.json();
    return users;
}

myFetch().then(data=>{
    let output = '';
   data.forEach(user=>{
        output += `<li>${user.name}</li>`
   })
   const body = document.querySelector('body').innerHTML=output;
});

// Promise.all([promise1, promise2, promise3, promise4]).then(values=>console.log(values));