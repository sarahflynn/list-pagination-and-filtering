// global variables
const students = document.querySelectorAll('.student-item');
const paginationContainer = document.querySelector('.pagination-container');
const messageContainer = document.querySelector('.message-container');

let prevActivePageNum;

// add and remove classes to toggle student visibility
function showPage(pageNumber) {
  const firstStudentIndex = pageNumber * 10 - 10;
  const activePage = document.querySelector(`.page-link-${pageNumber}`);
  const prevActivePage = document.querySelector(
    `.page-link-${prevActivePageNum}`
  );
  console.log(activePage);
  if (activePage) {
    activePage.classList.add('active');
    prevActivePage.classList.remove('active');
  }

  prevActivePageNum = pageNumber;

  for (let i = 0; i < students.length; i++) {
    if (i >= firstStudentIndex && i < firstStudentIndex + 10) {
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
  const message = document.createElement('p');
  message.classList.add('message');

  let messageText;
  if (students.length > 0) {
    messageText = `Number of students: ${students.length}`;
  } else if (students.length === 0) {
    messageText = 'Your search returned no students';
  } else {
    messageText =
      "We're sorry but there has been an error. Please reload the page and try again.";
  }

  message.textContent = messageText;
  messageContainer.appendChild(message);
  console.log('messageText', messageContainer);

  const numberOfPages = Math.ceil(students.length / 10);
  let html = '';

  for (let i = 0; i < numberOfPages; i++) {
    if (i === 0) {
      html += `<button class='page-link-${i + 1} active' onclick="showPage(${i +
        1})">${i + 1}</button>`;
    } else {
      html += `<button class='page-link-${i + 1}' onclick="showPage(${i +
        1})">${i + 1}</button>`;
    }
  }

  const pageNav = document.createElement('div');
  pageNav.classList.add('page-nav');
  pageNav.innerHTML = html;
  paginationContainer.appendChild(pageNav);
}

// call showPage() and appendPageLinks() on page load, default to page 1
window.onload = () => {
  showPage(1);
  appendPageLinks();
};
