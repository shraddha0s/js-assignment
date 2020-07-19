/*function ask(question,yes,no){
    if(confirm(question)) yes()
        else no();
     }
    ask(
        "Do you agree?",
        function(){alert("You Agree");},
        function(){alert("You cancel the excution");}
) */


let funct=(question,yes,no)=>{
    if(confirm(question)) yes();
    else 
    no();
}
let ask=funct("Do You Agree?",function(){alert("You Agreed")},function() {alert("You Canceled")});