
document.addEventListener('DOMContentLoaded', function() {
    

    const navbar = document.getElementById('navbar');
    

    const navLinks = document.querySelectorAll('.nav-link');
    

    function handleScroll() {
        
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
       
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
          
            navbar.classList.remove('scrolled');
        }
        
        
        updateActiveNavLink();
    }
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100; 
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
              
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    

    window.addEventListener('scroll', handleScroll);
    
   
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    handleScroll();
});
