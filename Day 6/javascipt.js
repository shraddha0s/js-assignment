let arr=['Apple','Mango','Pine-Apple','Grapes','Banana'];
console.log(arr);

const list=document.querySelector(`#list`);
console.log(list);
arr.forEach(fruit=>{
    list.innerHTML +=`<li>${fruit}</li>`;

})
const li=document.getElementById('list');
console.log(li.getAttribute('list'));
li.setAttribute(`style`,`color:red;background-color:yellow;font-size:20px;`);

function changeColor(){
    setTimeout(()=>{
        document.body.style.background='black';
    },300);
}
changeColor();

/*<div>
    <p class="imp">JavaScript is the programming language of HTML and the Web.
       Javascript is dyanamic computer programming language.
       JavaScript is easy to learn.
       This tutorial will teach you JavaScript from basic to advanced.</p>
    </div> */