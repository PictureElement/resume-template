// MY CHANGES

/*
var email = "marios.sofokleous@yandex.com";
var newEmail = email.replace("yandex", "google");
console.log(email);
console.log(newEmail);
*/

/*
var awesomeThoughts = "My name is Marios and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts);
*/

/*
var name = "Marios sofokleous";
// JS replace() method
var formattedName = HTMLheaderName.replace("%data%", name);
// jQuerry's append() method
$("#header").append(formattedName);
var role = "Front-end Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
*/

/*
var skills = ["HTML", "CSS", "JS"];
$("#main").append(skills);
*/

//*********************************** DATA ************************************

/// Work object 
var work = {
    "jobs": [{
            "employer": "Google",
            "title": "Front-end Developer",
            "location": "Mountain View, CA, United States",
            "dates": "July 2014 - Aug. 2017",
            "description": "Design & implement new user-facing features in Google’s products."
        },
        {
            "employer": "Yandex",
            "title": "Front-end Developer",
            "location": "Moscow, Russia",
            "dates": "Oct. 2017 - May 2019",
            "description": "Informant, providing privileged information about Google."
        }
    ]
}

// Projects object
var projects = {
    "projects": [{
            "title": "basic-keylogger-c-plus-plus",
            "dates": "Nov. 2016 - Mar. 2017",
            "description": "A basic Windows keylogger in C++ for US standard keyboards.",
            "images": ["http://via.placeholder.com/200x100", "http://via.placeholder.com/200x100"]
        },
        {
            "title": "html5tech-html5",
            "dates": "Feb. 2016 - Present",
            "description": "Website dedicated to front-end fundamentals.",
            "images": ["http://via.placeholder.com/200x100", "http://via.placeholder.com/200x100"]
        }
    ]
}

// Bio object
var bio = {
    "name": "Marios Sofokleous",
    "role": "Web Developer",
    "sex": "Male",
    "nationality": "Cypriot",
    "birthday": "17/12/1990",
    "welcomeMessage": "Hi, folks. Welcome to my online resume!",
    "contacts": {
        "phone": "(+357) 99 111 844",
        "email": "marios.sofokleous@yandex.com",
        "github": "@PictureElement",
        "skype": "@sofokleousmarioscy",
        "address": "14 Georgiou Christoforou, 8046 Pafos (Cyprus)"
    },
    "biopic": "./images/id.jpg"
};

// Education object
var education = {
    "schools": [{
            "name": "University of Cyprus",
            "location": "Nicosia, Cyprus",
            "degree": "BEng",
            "dates": "Sept. 2011 - June 2016",
            "major": "Computer Engineering",
            "url": "http://www.ucy.ac.cy"
        },
        {
            "name": "University of California, Berkeley",
            "location": "Berkeley",
            "degree": "MSc",
            "dates": "Sept. 2017 - Sept. 2018",
            "major": "Computer Science",
            "url": "http://www.berkeley.edu/"
        }
    ],
    "onlineCourses": [{
            "title": "Introduction to Linux",
            "school": "edX",
            "dates": "Jan. 2016 - Dec. 2016",
            "url": "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1"
        },
        {
            "title": "Ethical Hacking",
            "school": "Udemy",
            "dates": "Jan. 2015 - May 2016",
            "url": "https://www.udemy.com/penetration-testing/"
        }
    ]
}

//******************************* HEADER BUILD ********************************

// Append name
// JS replace() method
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
// jQuerry's append() method
$("#header").append(formattedHeaderName);

// Append role
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedHeaderRole);

// Append header-entry
$("#header").append(HTMLheaderStart);

// Append pic-wrapper
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$(".header-entry").append(formattedBioPic);

// Append summary-wrapper
$(".header-entry").append(HTMLsummaryStart);

// Append welcome-message
var formattedSummaryWelcomeMsg = HTMLsummaryWelcomeMsg.replace("%data%", bio.welcomeMessage);
$(".summary-wrapper").append(formattedSummaryWelcomeMsg);

// Append address
var formattedSummaryAddress = HTMLsummaryAddress.replace("%data%", bio.contacts.address);
$(".summary-wrapper").append(formattedSummaryAddress);

// Append phone
var formattedSummaryPhone = HTMLsummaryPhone.replace("%data%", bio.contacts.phone);
$(".summary-wrapper").append(formattedSummaryPhone);

// Append Email
var formattedSummaryEmail = HTMLsummaryEmail.replace("%data%", bio.contacts.email);
$(".summary-wrapper").append(formattedSummaryEmail);

// Append GitHub
var formattedSummaryGithub = HTMLsummaryGithub.replace("%data%", bio.contacts.github);
$(".summary-wrapper").append(formattedSummaryGithub);

// Append Skype
var formattedSummarySkype = HTMLsummarySkype.replace("%data%", bio.contacts.skype);
$(".summary-wrapper").append(formattedSummarySkype);

// Append Sex, Birthday and Nationality
var formattedSummaryMore = HTMLsummaryMore.replace("%data1%", bio.sex);
var formattedSummaryMore = formattedSummaryMore.replace("%data2%", bio.birthday);
var formattedSummaryMore = formattedSummaryMore.replace("%data3%", bio.nationality);
$(".summary-wrapper").append(formattedSummaryMore);

//************************** SKILLS(DENDROGRAM) BUILD *************************



/*
function displayWork() {
    for (var job of work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        // Select the last work-entry element
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates + "<br>");
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}

displayWork();

// 1. Encapsulate display() function within the projects object.
// 2. By invoking projects.display(), all of your projects information should
// be appended to the projects section.
// Hint: You'll need to start each new project with a HTMLprojectStart

// Function within object (function encapsulation)
projects.display = function() {

    for (var project of projects.projects) {

        // Project entry
        $("#projects").append(HTMLprojectStart);

        // Entry title
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        // Entry dates
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        // Entry description
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        // Append entry information
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        // Check for entry images and append them
        if (project.images.length > 0) {
            for (var image of project.images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
}

// Invoke function (append all projects information to the projects section)
projects.display();

// Add an interactive Google map to the resume
//
// There are two more steps required to make the map work properly:
//
// 1. Uncomment the last block of code in helper.js. The code you need starts
// with window.addEventListener('load', initializeMap); and goes until the end 
// of the file.
//
// 2. Uncomment the <script> tag for Google Maps API in the <head> of
// index.html.
$("#mapDiv").append(googleMap);
*/