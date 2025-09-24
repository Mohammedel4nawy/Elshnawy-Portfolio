let box = document.querySelectorAll(".box");
let project = document.querySelectorAll(".projects-section .stack");
let skill = document.querySelectorAll(".skills-section .skill-card");
let service = document.querySelectorAll(".services-section .service-container");

let arr1 = Array.from(box);
let arr2 = Array.from(project);
let arr3 = Array.from(skill);
let arr4 = Array.from(service);

arr1.forEach(function (e, i) {
    if(i != 1 && i!=2){
        e.style.cssText = ` z-index: ${i}; position : sticky ; top :0px ; background-color : var(--color-1);`;
    }else{
        e.style.cssText = ` z-index: ${i}; background-color : var(--color-1);`;
    }
});
arr2.forEach(function (e, i) {
        e.classList.add("wow","animate__jackInTheBox")
        e.setAttribute("data-wow-delay", `${i*.1}s`)
        
});
arr3.forEach(function (e, i) {
        e.classList.add("wow","animate__jackInTheBox")
        e.setAttribute("data-wow-delay", `${i*.1}s`)
        
});
arr4.forEach(function (e, i) {
        e.classList.add("wow","animate__slideInDown")
        e.setAttribute("data-wow-delay", `${i*.05}s`)
        
});
