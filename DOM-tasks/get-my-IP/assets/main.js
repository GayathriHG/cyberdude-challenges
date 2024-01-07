const xhr=new XMLHttpRequest();
xhr=onreadystatechange=function(){
console.log(this);
};
xhr.open("GET","")
xhr.send();