var sections = document.querySelectorAll('section');
var toTop = document.getElementById('go-to-top');  
var current = '';    
var active_nav = '';
window.addEventListener('scroll', ()=>{
        sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        var sectionBottom  = sectionTop + sectionHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/2)) {
            current = section.getAttribute('id');

            if(active_nav != "") {
                var element = document.getElementById(active_nav);
                element.classList.remove("active");
            }

            if(current === "Home") {
                active_nav = "nav_home"
                toTop.style.display='none';
            } 
            else if(current === "About") {
                active_nav = "nav_about"
                toTop.style.display='block';
            } 
            else if(current === "Education") {
                active_nav = "nav_education"
            } 
            else if(current === "Skills") {
                active_nav = "nav_skills"
            } 
            else if(current === "Projects") {
                active_nav = "nav_projects"
            } 
            else if(current === "Achievements") {
                active_nav = "nav_achiev"
            } 
            else if(current === "Contact") {

                active_nav = "nav_contact"
            }

            if(active_nav != "") {
                var element = document.getElementById(active_nav);
                element.classList.add("active");
            }
        }
    })
})

// goto top on refresh page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 