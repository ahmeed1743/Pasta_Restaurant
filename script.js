/*
    Branches-Section
 */

let branch_img = document.querySelector(".branch-img");
let branch_heading = document.querySelector(".branch-heading");
let branch_p = document.querySelector(".branch-p");
let family_btn = document.getElementById("family");
let special_btn = document.getElementById("special");
let social_btn = document.getElementById("social");




family_btn.addEventListener("click" , ()=>{
    branch_p.innerHTML =" We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    branch_heading.innerHTML = "Family Gathering"
    branch_img.src = "images/homepage/family-gathering-desktop.jpg"
})


special_btn.onclick = function(){
    branch_heading.innerHTML="Special Events"
    branch_p.innerHTML="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
    branch_img.src = "images/homepage/social-events-desktop.jpg"
}
social_btn.onclick = function(){
    branch_heading.innerHTML="Social Events"
    branch_p.innerHTML="Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
    branch_img.src = "images/homepage/special-events-desktop.jpg"
}


/*
    Branches-Section
 */


/*
    Gsap 
*/





