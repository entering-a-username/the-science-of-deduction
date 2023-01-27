(function() {
    let nav_element = document.querySelectorAll(".nav-element");


    nav_element.forEach(elem => { // function() doesnt work???
        elem.addEventListener("click", function() {
            elem.classList.toggle("clicked-nav");
        })
    })
    // how do i do it that if i click one nav the other removes the classes
   


})();