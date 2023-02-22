const btn = document.querySelector(".next");
const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");
const facebook = document.querySelector(".facebook"); 
const author = document.querySelector(".author .name");
const qoute = document.querySelector(".qoute");


//generating new quotes

btn.addEventListener("click", ()=>{

    btn.innerHTML= "loading quotes"
    fetch("https://api.quotable.io/random")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        qoute.innerHTML = data.content;
        author.innerHTML = data.author;
        btn.innerHTML = "New Quote"
    })
});


//speech buton

sound.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${qoute.innerHTML} by ${author.innerHTML}`)
    //speech method
    speechSynthesis.speak(utterance);
});

//copying the qoute text on click of the copy button

copy.addEventListener("click", ()=>{

    navigator.clipboard.writeText(qoute.innerHTML);
});

//sharing on tweeter

twitter.addEventListener("click", ()=>{
    let twitterUrl = `https://twitter.com/intent/tweet?url=${qoute.innerHTML}`;

    //opening the link in another tab
    window.open(twitterUrl, "_blank");
})

//sharing on facebook

facebook.addEventListener("click", ()=>{
    let facebookUrl = `https://web.facebook.com/help/668969529866328/?helpref=uf_share=${qoute.innerHTML}`;
    window.open(facebookUrl, "_blank");
})