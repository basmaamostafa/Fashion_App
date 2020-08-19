function card_animation() {
    let card = document.getElementById('cardanimation');
    let btn=document.getElementById('btn');
    let p=document.getElementById('text_form');

        document.body.style.backgroundImage="url('../img/bg2.jpg')";
        card.className="card2";
        document.getElementById("title").innerHTML="log In";
        p.parentNode.removeChild(p); 
        btn.parentNode.removeChild(btn); 
        
        function myform(){
    
            let form = document.createElement("div"); 
            let email = document.createElement("input"); 
            let pass = document.createElement("input"); 
            let submit = document.createElement("input"); 
            let br = document.createElement("br");  
        
            form.setAttribute("class", "form-group");
        
            email.setAttribute("type", "text"); 
            email.setAttribute("name", "emailID"); 
            email.setAttribute("class", "form-control");
            email.setAttribute("id", "exampleInputEmail1");
            email.setAttribute("placeholder", "E-Mail ID"); 
        
            pass.setAttribute("type", "password"); 
            pass.setAttribute("name", "password"); 
            pass.setAttribute("class", "form-control");
            pass.setAttribute("id", "exampleInputPassword1");
            pass.setAttribute("placeholder", "Password"); 
        
            submit.setAttribute("type", "submit"); 
            submit.setAttribute("value", "Log In");
            submit.setAttribute("class", "card-link1 , btn");
            submit.setAttribute("onclick", "card_animatio2()");
        
            form.appendChild(email);  
            form.appendChild(br.cloneNode());  
            form.appendChild(pass);  
            form.appendChild(br.cloneNode());  
            form.appendChild(submit);
            document.getElementById("myform").appendChild(form);
        };
        myform();

}


function card_animatio2(){
    let cardd = document.getElementById('cardanimation');
    let deltit= document.getElementById('title');
    let delform=document.getElementById('myform');
    let Pdiv=document.getElementById("cardbody");
    let parg= document.createElement("p");
    let pargtxt=document.createTextNode("Please verify your account to be able to purchase");
    let btnlink= document.createElement("a");
    let txt= document.createTextNode("Done");

    document.body.style.backgroundImage="url('../img/bg3.jpg')";
    cardd.className="card3";
    deltit.parentNode.removeChild(deltit);
    delform.parentNode.removeChild(delform);
    parg.setAttribute("class","card-text");
    parg.setAttribute("id","text_form");
    parg.appendChild(pargtxt);
    Pdiv.appendChild(parg);
    btnlink.setAttribute("class","card-link");
    btnlink.setAttribute("id","btn");
    btnlink.setAttribute("href","html/home.html");
    btnlink.appendChild(txt);
    Pdiv.appendChild(btnlink);
}
card_animatio2();


