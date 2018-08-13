/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
JS code by Rob Sherman 8/12/2018
******************************************/

/* Coding note:
    A much cleaner method for triggering the pagification buttons is to include the Javascript call right in the href:
    '<li><a href="javascript:printStudents(studentLibrary,' + (i - 1) + ')">' + i + '</a></li>';
    Per the requirements of the project this method has been replaced with the below method to ensure compliance.
*/

//user updatable variables that change page function
const resultsPerPage = 10;


//Creates the pagination section which will be kept empty and thus invisible unless more than 10 students exist.
const pageDiv = document.querySelector('.page');
let paraDiv = document.createElement("div");
paraDiv.className = "pagination";
paraDiv.innerHTML = '<ul class="paginationList"></ul>';
pageDiv.insertBefore(paraDiv, null);
const buttonList = document.querySelector('.paginationList');

// Student constants are used to build the studentLibrary
const studentSource = document.querySelectorAll('.student-item');
const studentLinks = document.getElementsByClassName('avatar');
const studentNames = document.querySelectorAll('.student-details h3');
const studentEmails = document.getElementsByClassName('email');
const studentDates = document.getElementsByClassName('date');

//StudentElement hold the location to be written to.
const studentElement = document.getElementsByClassName('student-list')[0];

let studentLibrary = [];//holds the current Dictionary of students

//builds the studentLibrary dictionary.
function buildLibrary(searchRequest) {
    for (i = 0; i < studentSource.length; i++) {
        if (searchRequest.length > 0) {
            if ( studentNames[i].textContent.search(searchRequest) >= 0 ) {
                studentLibrary.push({link: studentLinks[i].getAttribute("src"), name: studentNames[i].textContent, email: studentEmails[i].textContent, 
                                     date: studentDates[i].textContent });
            }
        }
        else {
            studentLibrary.push({link: studentLinks[i].getAttribute("src"), name: studentNames[i].textContent, email: studentEmails[i].textContent, 
                                date: studentDates[i].textContent });
        }
    }
}

//Updates page HTML index is page 
function printStudents(library, page) {
    let loopLimit = (page + 1) * resultsPerPage;
    if (library.length < loopLimit) {
        loopLimit = library.length;
    }
    let message = "";
    for ( i = page * 10; i < loopLimit; i++ ) {
        message = message + 
        `<li class="student-item cf">
            <div class="student-details">
                <img class="avatar" src=${library[i].link}>
                <h3>${library[i].name}</h3>
                <span class="email">${library[i].email}</span>
            </div>
            <div class="joined-details">
            <span class="date">${library[i].date}</span>
            </div>
        </li>`;
    }
    studentElement.innerHTML = message;
    updatePagination(page, library.length);
}

//Add the page number buttons and returns the HTML as a string.
function updatePagination(page, length) {
    const numPages = Math.ceil(length/10);
    let message = ``;
    for ( i = 1; i <= numPages; i++ ) {
        if ( (page + 1) === i ) {
            message = message +
                      '<li><a class="active ' + i + '" href="#">' + i + '</a></li>';
        }
        else {
            message = message +
                      '<li><a href="#" class="' + i + '">' + i + '</a></li>';
        }
    }
    buttonList.innerHTML = message;    
}

//Watches for any buttons that may be clicked in the <ul>
buttonList.addEventListener('click', (event) => {
    printStudents(studentLibrary, (event.target.textContent - 1));
});


//Initializes the page.
buildLibrary("");
printStudents(studentLibrary, 0);

