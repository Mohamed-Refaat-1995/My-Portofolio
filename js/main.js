var homePosition=document.getElementById('home').scrollHeight;
var aboutPosition=document.getElementById('about').scrollHeight+homePosition;
var educationPosition=document.getElementById('education').scrollHeight+aboutPosition
var skillsPosition=document.getElementById('skills').scrollHeight+educationPosition;
const navCollection=document.getElementsByClassName('nav-item');
var scrollPosition;
const array = [...navCollection];
window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    console.log(`home=${homePosition}`);
    console.log(`about=${aboutPosition}`);
    console.log(`edu=${educationPosition}`);
    console.log(`skill=${skillsPosition}`);
    console.log(`scrollPosition=${scrollPosition}`);
    if(scrollPosition<=homePosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        document.getElementById('nav-home').classList.add('active');
    }
    if(scrollPosition<=aboutPosition&&scrollPosition>homePosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        document.getElementById('nav-about').classList.add('active');
    }
    if(scrollPosition<=educationPosition+100&&scrollPosition>aboutPosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        document.getElementById('nav-education').classList.add('active');
    }
    if(scrollPosition<=skillsPosition&&scrollPosition>educationPosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        document.getElementById('nav-skill').classList.add('active');
    }
  });
