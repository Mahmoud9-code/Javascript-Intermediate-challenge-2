

const skillsArray = [
  {
    name: 'HTML',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'CSS',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'Javascript',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'React',
    experience: '2016',
    type: 'frontend',
  },
  {
    name: 'Redux',
    experience: '2017',
    type: 'frontend',
  },
  {
    name: 'React Testing Library',
    experience: '2020',
    type: 'frontend',
  },
  {
    name: 'Node.js',
    experience: '2020',
    type: 'backend',
  },
  {
    name: 'Express.js',
    experience: '2020',
    type: 'backend',
  },
  {
    name: 'Mongodb',
    experience: '2020',
    type: 'backend',
  },
];


// console.log(skillsArray)


// Add skills dynamically
const skillsSection = document.getElementById('skills')
const ulList = document.createElement("ul");

let headingText = '';
let spanText = '';

let currentYears = new Date().getFullYear();


function liItem(name, year, type) {
  const liList = document.createElement("li");
  const heading = document.createElement("h2");
  const span = document.createElement("span");
  let myAttr = document.createAttribute('data-type')

  const headingText = document.createTextNode(name)
  const spanText = document.createTextNode(`${currentYears - year} Years`)


  liList.appendChild(heading);
  liList.appendChild(span);

  myAttr.value = type;

  liList.classList.add('skills__column');
  heading.classList.add('skills__title');
  span.classList.add('skills__years');
  
  
  heading.appendChild(headingText);
  span.appendChild(spanText);
  
  liList.appendChild(heading);
  liList.appendChild(span);
  ulList.appendChild(liList);
  liList.setAttributeNode(myAttr);
  return liList;
}

for (let i = 0; i < skillsArray.length; i++) {
  liItem(skillsArray[i].name,skillsArray[i].experience, skillsArray[i].type)
  console.log(skillsArray[i].name)
  console.log(skillsArray[i].experience)
}


ulList.classList.add('skills__list');
skillsSection.appendChild(ulList);



// Calculate years of experience automatically

/* ✨ Bonus ✨ */
// Add filters to skills section


let skillButton = document.querySelectorAll('.skills__button');

skillButton.forEach(function(ele) {
  ele.onclick = function () {
    skillButton.forEach(function (ele) {
      ele.classList.remove('skills__button--isActive');
    });
    this.classList.add('skills__button--isActive')
    ulList.classList = `skills__list ${ele.dataset.type}`
  };
});