 const fromEl=document.querySelector("#form");
//  https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg
 const urlEl=document.querySelector("#url");
 const yourImgEl=document.querySelector("#yourImg");
//  console.log(urlEl,yourUrlEl);

// yourImgEl.style.display="none"
 addEventListener("submit",(e)=>{
e.preventDefault();


function getThumbnail(url){


    const regex=/[?&]v=([^&]+)/;
    const match = url.match(regex);
    if(match){
        return match[1];
    }else{
        alert("Wrong URL!!")
    }
}

const urlProvided=urlEl.value;
const thumbnail=getThumbnail(urlProvided);

const api="https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg";
 const output=api.replace("[VIDEO_ID]",thumbnail);

 const outputEl=document.querySelector("#output");
 outputEl.src=output;

yourImgEl.computedStyleMap.display="block";





 });