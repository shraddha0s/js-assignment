var userName=prompt("Enter User Name");
        console.log(userName);
        document.write("Welcome");
        const t=document.getElementById('time');
        function clock()
        {
            let date=new Date();
            let time=date.toLocaleTimeString();
            t.innerText=time;
        }

setInterval(clock,1000);        
const att=document.getElementById('attribute');
console.log(att);
att.classList.add('blue');
att.classList.add('bgyellow');
att.classList.remove('blue');
att.classList.toggle('blue');