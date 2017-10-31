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
            "location": "New York, United States",
            "dates": "July 2014 - Aug. 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit, dolor sit amet vulputate congue, lectus mi pharetra nisi, ac dignissim erat felis vitae nibh. Integer sed consectetur libero. Vestibulum eget nibh sapien. Mauris odio odio, molestie at laoreet ut, fringilla ac eros. Cras est nibh, aliquam non quam quis, lacinia semper neque. Mauris id neque neque. Maecenas arcu sem, dictum sit amet urna ac, iaculis pharetra dolor."
        },
        {
            "employer": "Yandex",
            "title": "Front-end Developer",
            "location": "Moscow, Russia",
            "dates": "Oct. 2017 - May 2019",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit, dolor sit amet vulputate congue, lectus mi pharetra nisi, ac dignissim erat felis vitae nibh. Integer sed consectetur libero. Vestibulum eget nibh sapien. Mauris odio odio, molestie at laoreet ut, fringilla ac eros. Cras est nibh, aliquam non quam quis, lacinia semper neque. Mauris id neque neque. Maecenas arcu sem, dictum sit amet urna ac, iaculis pharetra dolor."
        }
    ]
}

// Projects object
var projects = {
    "projects": [{
            "title": "Project #1",
            "dates": "Nov. 2016 - Mar. 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis porttitor quam. Sed non lacus vitae lacus dapibus auctor. Nullam scelerisque quam lacus, eu aliquet nulla cursus non. Praesent venenatis diam sit amet est eleifend vehicula. Praesent pulvinar neque eu bibendum volutpat. Nunc mattis libero felis, at consectetur mauris porttitor vel. Integer mattis ante id augue semper tempor. Cras turpis nisl, maximus sed lacinia quis, eleifend eget sem. Fusce volutpat enim vitae turpis mattis, faucibus scelerisque tellus posuere. Cras maximus vitae lorem at finibus.",
            "images": ["https://via.placeholder.com/200x100", "https://via.placeholder.com/200x100"]
        },
        {
            "title": "Project #2",
            "dates": "Feb. 2016 - Present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis porttitor quam. Sed non lacus vitae lacus dapibus auctor. Nullam scelerisque quam lacus, eu aliquet nulla cursus non. Praesent venenatis diam sit amet est eleifend vehicula. Praesent pulvinar neque eu bibendum volutpat. Nunc mattis libero felis, at consectetur mauris porttitor vel. Integer mattis ante id augue semper tempor. Cras turpis nisl, maximus sed lacinia quis, eleifend eget sem. Fusce volutpat enim vitae turpis mattis, faucibus scelerisque tellus posuere. Cras maximus vitae lorem at finibus.",
            "images": ["https://via.placeholder.com/200x100", "https://via.placeholder.com/200x100"]
        }
    ]
}

// Bio object
var bio = {
    "name": "Mario Botrini",
    "role": "Web Developer",
    "sex": "Male",
    "nationality": "Greek",
    "birthday": "12/11/1991",
    "welcomeMessage": "Hi, folks. Welcome to my online resume!",
    "contacts": {
        "phone": "(+357) 96 131 844",
        "email": "mario.botrini@yahoo.com",
        "website": "mario-botrini.com",
        "github": "@mario.botrini",
        "skype": "@mario.botrini",
        "messenger": "@mario.botrini",
        "location": "Athens, Greece",
    },
    "biopic": "./images/id.jpg"
};

// Education object
var education = {
    "schools": [{
            "name": "University of Cyprus",
            "location": "Nicosia, Cyprus",
            "degree": "Bachelor of Engineering",
            "dates": "Sept. 2011 - June 2016",
            "major": "Computer Engineering"
        },
        {
            "name": "University of Washington",
            "location": "Washington, United States",
            "degree": "Master of Science",
            "dates": "Sept. 2017 - Sept. 2018",
            "major": "Computer Science"
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

// Append header-entry-1
$("#header").append(HTMLheaderStart1);

// Append name
// JS replace() method
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
// jQuerry's append() method
$(".header-entry-1").append(formattedHeaderName);

// Append role
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$(".header-entry-1").append(formattedHeaderRole);

// Append header-entry-2
$("#header").append(HTMLheaderStart2);

// Append pic-wrapper
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$(".header-entry-2").append(formattedBioPic);

// Append summary-list
$(".header-entry-2").append(HTMLsummaryStart);

// Append welcome-message
var formattedSummaryWelcomeMsg = HTMLsummaryWelcomeMsg.replace("%data%", bio.welcomeMessage);
$(".summary-list").append(formattedSummaryWelcomeMsg);

// Append location
var formattedSummaryLocation = HTMLsummaryLocation.replace("%data%", bio.contacts.location);
$(".summary-list").append(formattedSummaryLocation);

// Append phone
var formattedSummaryPhone = HTMLsummaryPhone.replace("%data%", bio.contacts.phone);
$(".summary-list").append(formattedSummaryPhone);

// Append Email
var formattedSummaryEmail = HTMLsummaryEmail.replace("%data%", bio.contacts.email);
$(".summary-list").append(formattedSummaryEmail);

// Append Website
var formattedSummaryWebsite = HTMLsummaryWebsite.replace("%data%", bio.contacts.website);
$(".summary-list").append(formattedSummaryWebsite);

// Append GitHub
var formattedSummaryGithub = HTMLsummaryGithub.replace("%data%", bio.contacts.github);
$(".summary-list").append(formattedSummaryGithub);

// Append Skype
var formattedSummarySkype = HTMLsummarySkype.replace("%data%", bio.contacts.skype);
$(".summary-list").append(formattedSummarySkype);

// Append Messenger
var formattedSummaryMessenger = HTMLsummaryMessenger.replace("%data%", bio.contacts.messenger);
$(".summary-list").append(formattedSummaryMessenger);

// Append Sex, Birthday and Nationality
var formattedSummaryMore = HTMLsummaryMore.replace("%data1%", bio.sex);
var formattedSummaryMore = formattedSummaryMore.replace("%data2%", bio.birthday);
var formattedSummaryMore = formattedSummaryMore.replace("%data3%", bio.nationality);
$(".summary-list").append(formattedSummaryMore);

// Append internationalize button
$(".header-entry-2").append(internationalizeButton);

// The function replaces the original name stored in the "bio" object with an
// international version. The function then replaces the content of #name with
// the new formatted name
function inName() {
    // Extract and capitalize first character (first name)
    var char = bio.name.slice(0, 1);
    //console.log(char);
    char = char.toUpperCase();
    //console.log(char);
    // Full name (array)
    var fullName = bio.name.split(" ");
    // First name to lower case
    fullName[0] = fullName[0].toLowerCase();
    // Last name to upper case
    fullName[1] = fullName[1].toUpperCase();
    // Format first name accordingly
    fullName[0] = char + fullName[0].slice(1);
    // Change value stored in the bio object 
    bio.name = fullName[0] + " " + fullName[1];
    // jQuerry's replaceWith() method that replaces the content of the
    // selected element(s).
    $("#name").replaceWith("<h1>" + bio.name + "</h1>");
}

//*************************** WORK EXPERIENCE BUILD ***************************

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
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}

displayWork();

//****************************** PROJECTS BUILD *******************************

// 1. Encapsulate display() function within the projects object.
// 2. By invoking projects.display(), all of your projects information should
// be appended to the projects section.
// Hint: You'll need to start each new project with a HTMLprojectStart

// Function within object (function encapsulation)
projects.display = function() {

    for (var project of projects.projects) {

        // Project entry
        $("#projects").append(HTMLprojectStart);

        // Entry information
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
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

//***************************** EDUCATION BUILD *******************************

//****** DISPLAY SCHOOLS ******
$("#education").append(HTMLschoolsStart);

// Function within object (function encapsulation)
education.displaySchools = function() {

    for (var school of education.schools) {

        // Education entry
        $("#schools-wrapper").append(HTMLschoolEntry);

        // Entry information
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

        // Append entry information
        $(".school-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".school-entry:last").append(formattedSchoolDates);
        $(".school-entry:last").append(formattedSchoolLocation);
        $(".school-entry:last").append(formattedSchoolMajor);

    }
}

education.displaySchools();

//****** DISPLAY ONLINE COURSES ******
$("#education").append(HTMLonlineCoursesStart);

// Function within object (function encapsulation)
education.displayOnlineCourses = function() {

    for (var onlineCourse of education.onlineCourses) {

        // Education entry
        $("#online-courses-wrapper").append(HTMLonlineCourseEntry);

        // Entry information
        var formattedOnlineCourseSchool = HTMLonlineCourseSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineCourseTitle = HTMLonlineCourseTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineCourseDates = HTMLonlineCourseDates.replace("%data%", onlineCourse.dates);

        // Append entry information
        $(".online-course-entry:last").append(formattedOnlineCourseSchool + formattedOnlineCourseTitle);
        $(".online-course-entry:last").append(formattedOnlineCourseDates);
    }
}

education.displayOnlineCourses();

//******************************** MAP BUILD **********************************

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
//
// 3. Google is increasingly requiring an API key to make Google Map requests. // Once obtained, you can add the key to the Google Maps API script request in // index.html: 
// <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=YOUR_API_KEY_HERE"></script>  
$("#mapDiv").append(googleMap);

//**************************** LET'S CONNECT BUILD ****************************

// Append social entry row
$("#lets-connect").append(HTMLletsConnectSocialRow);

// Append phone
var formattedLetsConnectPhone = HTMLletsConnectPhone.replace("%data%", bio.contacts.phone);
$(".lets-connect-social-row:last").append(formattedLetsConnectPhone);
// Append email
var formattedLetsConnectEmail = HTMLletsConnectEmail.replace("%data%", bio.contacts.email);
$(".lets-connect-social-row:last").append(formattedLetsConnectEmail);

// Append social entry row
$("#lets-connect").append(HTMLletsConnectSocialRow);

// Append website
var formattedLetsConnectWebsite = HTMLletsConnectWebsite.replace("%data%", bio.contacts.website);
$(".lets-connect-social-row:last").append(formattedLetsConnectWebsite);
// Append GitHub
var formattedLetsConnectGithub = HTMLletsConnectGithub.replace("%data%", bio.contacts.github);
$(".lets-connect-social-row:last").append(formattedLetsConnectGithub);

// Append social entry row
$("#lets-connect").append(HTMLletsConnectSocialRow);

// Append Skype
var formattedLetsConnectSkype = HTMLletsConnectSkype.replace("%data%", bio.contacts.skype);
$(".lets-connect-social-row:last").append(formattedLetsConnectSkype);
// Append Messenger
var formattedLetsConnectMessenger = HTMLletsConnectMessenger.replace("%data%", bio.contacts.messenger);
$(".lets-connect-social-row:last").append(formattedLetsConnectMessenger);

//******************************* FOOTER BUILD ********************************

// Append footer row
$("#footer").append(HTMLfooterCopyrightWrapper);
// Append copyright
$(".footer-copyright-wrapper").append(HTMLfooterCopyright);