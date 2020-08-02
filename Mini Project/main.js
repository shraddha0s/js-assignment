
var inputText=document.getElementById("txt"),
    items=document.querySelectorAll("#list li"),
    tab =[],index;

    for(var i=0;i<items.length;i++){
        tab.push(items[i].innerHTML);

    }

    for(var i=0;i<items.length;i++){
        items[i].onclick=function(){
            index=tab.indexOf(this.innerHTML + "Index: " +index);
            inputText.value=this.innerHTML;
        };
    }

    function refreshArray() {
        tab.length=0;
        items=document.querySelectorAll("#list li");
        for(var i=0;i<items.length;i++){
            tab.push(items[i].innerHTML);
        }
    }

    function addLi() {
        var listNode=document.getElementById("list"),
            textNode=document.createTextNode(inputText.value),
            liNode=document.createElement("LI");
          console.log(typeof(listNode));

            liNode.appendChild(textNode);
            listNode.appendChild(liNode);
           console.log(textNode);
            refreshArray();
            liNode.onclick=function(){
                index=tab.indexOf(liNode.innerHTML);
                console.log(liNode.innerHTML + "Index:" +index);
                inputText.value=liNode.innerHTML;


            };
    }

    function editLi(){
        items[index].innerHTML=inputText.value;
        const x=inputText.value;
        console.log("Edit",x);
        refreshArray();

    }

    function deleteLi(){
        refreshArray();
        if(items.length>0){
            items[index].parentNode.removeChild(items[index]);
            inputText.value="";
            console.log("Delete:",typeof(inputText.value));
        }}

       console.log(localStorage);