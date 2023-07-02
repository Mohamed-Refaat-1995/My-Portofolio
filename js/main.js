var homePosition=document.getElementById('home').scrollHeight;
var aboutPosition=document.getElementById('about').scrollHeight+homePosition;
var educationPosition=document.getElementById('education').scrollHeight+aboutPosition
var skillsPosition=document.getElementById('skills').scrollHeight+educationPosition;
var protectPosition=document.getElementById('skills').scrollHeight+skillsPosition;
const navCollection=document.getElementsByClassName('nav-item');
var homeNavId=document.getElementById('nav-home')||document.getElementById('nav-home-collapse');
var aboutNavId=document.getElementById('nav-about')||document.getElementById('nav-about-collapse');
var educationNavId=document.getElementById('nav-education')||document.getElementById('nav-education-collapse');
var skillNavId=document.getElementById('nav-skill')||document.getElementById('nav-skill-collapse');
var projectNavId=document.getElementById('nav-projects')||document.getElementById('nav-projects-collapse');
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
        homeNavId.classList.add('active');
    }
    if(scrollPosition<=aboutPosition&&scrollPosition>homePosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        aboutNavId.classList.add('active');
    }
    if(scrollPosition<=educationPosition+100&&scrollPosition>aboutPosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        educationNavId.classList.add('active');
    }
    if(scrollPosition<=skillsPosition&&scrollPosition>educationPosition)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        skillNavId.classList.add('active');
    }
    if(scrollPosition<=protectPosition&&scrollPosition>skillsPosition-50)
    {
        array.forEach(function(item){
            item.classList.remove('active');
        })
        projectNavId.classList.add('active');
    }
  });

//   collapse button
var collapseBtn=document.getElementById('menu-icon');
var collapseNavBar=document.getElementById('menu-btn-collapse');
console.log(collapseNavBar);
collapseBtn.onclick=function()
{
    collapseNavBar.classList.toggle('d-none');
}
