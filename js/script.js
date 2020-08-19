function card_animation() {
    let card = document.getElementById('cardanimation');
    let btn=document.getElementById('btn');
    let p=document.getElementById('text_form');
    let delP=document.getElementById('delP');
    let form = document.createElement("form"); 

    if(card.className=="card")
    {
        document.body.style.backgroundImage="url('../img/bg2.jpg')";
        card.className="card2";
        document.getElementById("title").innerHTML="log In";
        delP.parentNode.removeChild(delP);
    //  document.getElementById("btn").innerHTML="Log In";
     // document.getElementsByTagName("p")[0].style.display = "none";
     //   document.getElementsByTagName("form")[0].style.visibility="visible";
        p.parentNode.removeChild(p); 
        btn.parentNode.removeChild(btn); 

    }
    else
    {
        card.className="card",btn.className="card-link";
        document.getElementById("title").innerHTML="welcome..";
        document.getElementById("btn").innerHTML="Go"
        document.getElementsByTagName("p")[0].style.display="block";
        document.body.style.backgroundImage="url('../img/bg1.jpg')";
     //   document.getElementsByTagName("form")[0].style.visibility="hidden";


    }
}

function myform(){
    
    let form = document.createElement("div"); 
    let email = document.createElement("input"); 
    let pass = document.createElement("input"); 
    let submit = document.createElement("input"); 

    email.setAttribute("type", "text"); 
    email.setAttribute("name", "emailID"); 
    email.setAttribute("placeholder", "E-Mail ID");

    pass.setAttribute("type", "password"); 
    pass.setAttribute("name", "password"); 
    pass.setAttribute("placeholder", "Password");

    submit.setAttribute("type", "submit"); 
    submit.setAttribute("value", "Submit");
    
    form.appendChild(email);  
    form.appendChild(pass);  
    form.appendChild(submit);
    document.getElementById("myform").appendChild(form);
}