const btns=document.querySelectorAll("button");
//console.log(btns);
btns.forEach(show);
var j=0;
function show(btn,i)
{   
    
    var s="";
    btns[i].addEventListener("click",function (e)
    {   
        console.log(btns[i].id);
        if(btns[i].id=="c")
        {   j=0;
            document.getElementById('output').innerHTML="";
            document.getElementById('equal').innerHTML='=';
        }
        else if(btns[i].id=="eq")
        {
            document.getElementById('equal').innerHTML='=';
            s=document.getElementById('output').innerHTML;
            console.log(s);
            document.getElementById('output').innerHTML=eval(s);
            j=1;
        }
        else if(btns[i].id=="delete")
        {   
            j=0;
            document.getElementById('output').innerHTML=(document.getElementById('output').innerHTML).slice(0,(document.getElementById('output').innerHTML).length-1);
        }
        else
        {
            console.log("j= ",j)
            if (j==1)
                document.getElementById('output').innerHTML="";
            if(btns[i].id=="divide") 
                document.getElementById('output').innerHTML+="/";
            else 
                document.getElementById('output').innerHTML+=btns[i].innerHTML;
        document.getElementById('equal').innerHTML='';
        j=0;
        }
        
    }
    );
    
}


