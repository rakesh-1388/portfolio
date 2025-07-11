const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const barsBox  = document.querySelector('.bars-box');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
         menuIcon.classList.toggle('bx-x');
         navbar.classList.toggle('active');
});


const activePage = () => {
    navLinks.forEach(link => {
       link.classList.remove('active');
    });
    
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

     sections.forEach(section => {
       section.classList.remove('active');
    });

      menuIcon.classList.remove('bx-x');
         navbar.classList.remove('active');
}


navLinks.forEach((link, idx) => {
      link.addEventListener('click', () =>{
        if (!link.classList.contains('active')){
         activePage();
       
         link.classList.add('active');
         setTimeout(() => {
             sections[idx].classList.add('active');
         },1100);

        }
      });
});

logoLink.addEventListener('click', () => {
     if ( !navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active'); 
         
         setTimeout(() => {
             sections[0].classList.add('active');
         },1100);

     }
});

const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetail = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        
        });
         btn.classList.add('active');

         resumeDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

//project-part 

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;
const activeproject = () => {
    const imgSlide = document.querySelector('.project-carousel .img-slide');

    const projectDetails = document.querySelectorAll('.project-detail')

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    projectDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
         arrowRight.classList.add('disabled');
    }

    activeproject();
}); 

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
       arrowRight.classList.remove('disabled'); 
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeproject();
}); 

activeproject();


