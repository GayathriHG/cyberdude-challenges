const ipAddressPlaceholderEl=document.querySelector("#ipAddress")

const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(this.readyState === 4 && this.status === 200){
        
        ipAddressPlaceholderEl.textContent=xhr.responseText;
    }
};

xhr.open("GET","https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/");
xhr.send();


