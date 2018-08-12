/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
JS code by Rob Sherman 8/12/2018
******************************************/

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
function buildLibrary(); {
    for (i = 0; i < studentSource.length; i++) {
        studentLibrary.push({link: studentLinks[i].getAttribute("src"), name: studentNames[i].textContent, email: studentEmails[i].textContent, 
                            date: studentDates[i].textContent });
    }
}


console.log(studentLibrary);

const studentTemplate = 
`<div class="student-details">
    <img class="avatar" src=${studentLibrary[0].link}>
    <h3>${studentLibrary[0].name}</h3>
    <span class="email">${studentLibrary[0].email}</span>
</div>
<div class="joined-details">
   <span class="date">${studentLibrary[0].date}</span>
</div>`;

studentElement.innerHTML = studentTemplate;
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four




// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






