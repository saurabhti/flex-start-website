function hamburger(){
    var nav=document.querySelector('.navigation');
    nav.classList.toggle('ham-active');
}
document.addEventListener('scroll', function() {
    if(scrollY>=50){
    document.querySelector('.header').style.backgroundColor="White";
    document.querySelector('.header').style.boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px";
}
    else if(scrollY<50){
        document.querySelector('.header').style.backgroundColor="transparent";
        document.querySelector('.header').style.boxShadow="none";
    }
});

var text1= document.getElementById('text1-hide');
var text2= document.getElementById('text2-hide');
var text3= document.getElementById('text3-hide');
var text1Button= document.getElementById('text1')
var text2Button= document.getElementById('text2')
var text3Button= document.getElementById('text3')

function changingText1(){
    text3.classList.remove('text-show');
    text2.classList.remove('text-show');
    text2Button.classList.remove('button-focus')
    text3Button.classList.remove('button-focus')
    text1.classList.add('text-show');
    text1Button.classList.add('button-focus')
}

function changingText2(){
    text3.classList.remove('text-show');
    text1.classList.remove('text-show');
    text1.classList.add('text1-hide');
    text1Button.classList.remove('button-focus');
    text3Button.classList.remove('button-focus')
    text2.classList.add('text-show');
    text2Button.classList.add('button-focus');
}

function changingText3(){
    text1.classList.remove('text-show');
    text2.classList.remove('text-show');
    text1.classList.add('text1-hide');
    text1Button.classList.remove('button-focus')
    text2Button.classList.remove('button-focus')
    text3.classList.add('text-show');
    text3Button.classList.add('button-focus')
}

// function toggleHeaderLink(id, force) {
//     const a = document.querySelector(`[href='#${id}']`);
//     a.firstChild.classList.toggle('active', force);
// }

// const sectionPercentages = new Map();

// let currentObservingElement;

// const observer = new IntersectionObserver(function (sections) {
//     const section = sections[0];
//     sectionPercentages.set(section.target, section.intersectionRatio);
//     let maxRatio = 0;
//     let element;
//     sectionPercentages.forEach((value, key) => {
//         if (value > maxRatio) {
//             element = key;
//             maxRatio = value;
//         }
//     });
//     if (element && element !== currentObservingElement) {
//         if (currentObservingElement) {
//             toggleHeaderLink(currentObservingElement.id, false);
//         }
//         currentObservingElement = element;
//         toggleHeaderLink(element.id);
//     }
// }, { threshold: 0.05 });

// document.querySelectorAll('.navigation > a').forEach(function (a) {
//     const href = a.getAttribute('href');
//     if (href.startsWith('#')) {
//         const id = href.slice(1);
//         observer.observe(document.getElementById(id));
//     }
// });

// let about= document.getElementById('list-id');
//         document.addEventListener('scroll', function(){
//         let active= document.querySelector('#about');
//         let dimensions= active.getBoundingClientRect();
//         if(dimensions.top<470 && dimensions.top>20){
//             about.classList.add("active");
//           }
//           else{
//             about.classList.remove("active");
//           }
//         });


        let sections = document.querySelectorAll(".scroll");
        let navigationLinks = document.querySelectorAll(".navigation > a > li")
                document.addEventListener('scroll', function(){
                    for(let i=0; i<sections.length; i++){
                        let active= sections[i];
                        let dimensions= active.getBoundingClientRect();
                        if(dimensions.top<450 && dimensions.bottom>450){
                            navigationLinks[i+1].classList.add("active");
                          }
                          else{
                            navigationLinks[i+1].classList.remove("active");
                          }
                    }
                });