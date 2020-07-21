console.log("Promises");
let users = [{
    name : 'India',
    email: 'b@gmail.com',
},
{
    name : 'Rusiaa',
    email: 'r@gmail.com',
},
{
    name : 'Japan',
    email: 'j@gmail.com',
},
]
function getUser(){
    setTimeout(()=>{
        let result='';
        users.forEach(user=>{
            result +=`The user in ${user.name} \n`;
        });
        console.log(result);
    },3000);
}
function createUser(user,callback){
    setTimeout(()=>{
        users.push(user);
        callback();
    },3000);
}
getUser();
createUser({name :'Us',email:'u@gmail.com'},getUser);

//Primse
/*function createUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(user);
            const error=false;
           if(!error){
             resolve();
           }
           else{
               reject("OOps an error occured");
           }
        },3000);
    })
}
createUser({name :'Us',email:'u@gmail.com'})
.then(getUser)
.catch(error=>console.log(error));*/

//2)
const userData =new Promise((resolve,reject)=>{
    const error =false;
    if(error)
    {
        reject("An errror occured");
    }
    else
    {
        resolve({
            firstname: 'Om',
            age:24,
            class: '12th'
        })
    }
});
userData
.then(data=>console.log(data))
.catch(error=>console.log(error));

//Async await
const photos =[];
async function photoUpload(){
    let status=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            photos.push('Komal');
            resolve('Profile Updated');
        },3000)
    })
    let result= await status;
    console.log(photos.length);
}
photoUpload();
photoUpload();

//fetch

const result= fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json())
.then(data=>console.log(data))


//MAke Post Requset
fetch('https://jsonplaceholder.typicode.com/posts',
{
    method:'POST',
    body: JSON.stringify({
        userId:345,
        title:"Some Title",
        body:'lorem iukji',
    })
}).then(response=>response.json())
.then(data=>console.log(data))


















