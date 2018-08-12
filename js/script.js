/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
JS code by Rob Sherman 8/12/2018
******************************************/

//user updatable variables that change page function
const resultsPerPage = 10;

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
    if ( library.length > 10) {
        message = message + addPagination(page, library.length);
    }
    studentElement.innerHTML = message;
}

//Add the page number buttons and returns the HTML as a string.
function addPagination(page, length) {
    const numPages = Math.ceil(length/10);
    console.log('Length:' + length + ' page:' + page + ' Number of pages:' + numPages);
    message = `<div class="pagination"><ul>`;
    for ( i = 1; i <= numPages; i++ ) {
        if ( (page + 1) === i ) {
            message = message +
                      '<li><a class="active" href="javascript:printStudents(studentLibrary,' + (i - 1) + ')">' + i + '</a></li>';
        }
        else {
            message = message +
                      '<li><a href="javascript:printStudents(studentLibrary,' + (i - 1) + ')">' + i + '</a></li>';
        }
    }
    message = message + '</ul></div>'
    return(message);
}

buildLibrary("");
printStudents(studentLibrary, 0);






