const reviewData=[
    {
        id:1,
        img:"./images/author1.png",
        name:"Sara James",
        job:"ui/ux designer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt temporibus ratione quod modi cumque eos ut assumenda inventore nihil."

    },
    {
        id:2,
        img:"./images/author2.png",
        name:"Sara James",
        job:"ui/ux designer",
        review:"Dolor sit amet consectetur adipisicing elit. Aliquid sunt temporibus ratione quod modi cumque eos ut assumenda inventore nihil."

    },
    {
        id:3,
        img:"./images/author3.png",
        name:"Shane Watson",
        job:"QA Engineer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt temporibus ratione quod modi cumque eos ut assumenda inventore nihil."

    },
    {
        id:4,
        img:"./images/author4.png",
        name:"Roberto Melvine",
        job:"ui/ux designer",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt temporibus ratione quod modi cumque eos ut assumenda inventore nihil."

    }
]
// Select Items
const img=document.getElementById("img");
const author=document.getElementById("name");
const job=document.getElementById("job");
const review=document.getElementById("review");
const card=document.getElementsByClassName("carousel_card");

const prevBtn=document.getElementById("prev_btn");
const nextBtn=document.getElementById("next_btn");

let currentItem =0;
// Initial Load
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});


function showPerson(){
    const item = reviewData[currentItem];
    img.src=item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent=item.review;
    console.log("sets")
}
function autoplay(){
    currentItem++;
    if(currentItem>reviewData.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
}
let inter=setInterval(autoplay,3000);
card[0].addEventListener("mouseover",function(){
    stop();
})
function stop(){
    clearInterval(inter);
    console.log("fuck")
}

// Next Button
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviewData.length-1){
        currentItem=0;
    }
    
    showPerson(currentItem);
})

// Prev Button
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviewData.length-1;
    }
    showPerson(currentItem);
})