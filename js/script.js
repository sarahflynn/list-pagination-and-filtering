// global variables
const students = document.querySelectorAll('.student-item');
const pagination = document.querySelector('.pagination');

// add and remove classes to toggle student visibility
function showPage(pageNumber) {
   const firstStudentIndex = pageNumber * 10 - 10;

   for(let i = 0; i < students.length; i++) {
      if (i >= firstStudentIndex && i < (firstStudentIndex + 10)) {
         students[i].classList.add('visible');
         students[i].classList.remove('hidden');

      } else {
         students[i].classList.remove('visible');
         students[i].classList.add('hidden');
      }
   }
}

// create and append page link buttons
function appendPageLinks() {
   const numberOfPages = Math.ceil(students.length / 10);
   let html = '';
   
   for(let i = 0; i < numberOfPages; i++) {
      html += `<button className='page-link' onclick="showPage(${i + 1})">${i + 1}</button>`
   }

   const pageNav = document.createElement('div');
   pageNav.classList.add('page-nav');
   pageNav.innerHTML = html;
   pagination.appendChild(pageNav);
}


// call showPage() and appendPageLinks() on page load, default to page 1
window.onload = () => {
   showPage(1);
   appendPageLinks();
}


