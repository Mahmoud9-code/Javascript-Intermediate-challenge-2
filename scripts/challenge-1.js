/**
 * 1. Update Redux -> Node.js, React Testing Library -> MongoDB ✅
 * 
 * 2. Add new skill -> Typescript, after javascript, 2 years
 * 3. Remove "Download CV" element
 * 4. Personal image: width -> 36rem
 * 5. ✨Bonus✨ Highlight skills items: li -> click -> .underline
 */

// => 1 
const skills = document.querySelector('.skills__list');
// const liItems = document.querySelectorAll('.skills__column');
const heading = document.querySelectorAll('.skills__title');

heading[4].innerText = 'Node.js';
heading[5].innerText = 'MongoDB';


// => 2
const jsSkill = document.querySelector('[data-name="Javascript"]');
const newSkill = `<li data-name="Javascript" class="skills__column">
<h2 class = "skills__title">Typescript</h2>
<span class = "skills__years"> 2 years </span>
</li>` ;

jsSkill.insertAdjacentHTML("afterend", newSkill)


// => 3 

const linkItem = document.querySelector('.find-out-link');

linkItem.remove();

// => 4

const image = document.querySelector('.bio__pic');

image.style.width = '36rem';

// => 5
const liItems = document.querySelectorAll('.skills__column');
liItems.forEach(function (ele) {
    ele.onclick = function () {
        liItems.forEach(function (ele) {
            ele.classList.remove('underline')
        })
        this.classList.remove('underline')
        this.classList.toggle('underline')
    }
})

