// This file contains all of the code running in the background that makes
// resumeBuilder.js possible. We call these helper functions because they
// support your code in this course.

// These are HTML strings. As part of the course, you'll be using JavaScript
// functions to replace the %data% placeholder text you see in them.

// Header
var HTMLheaderStart1 = '<div class="header-entry-1"></div>';
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span>';
var HTMLheaderStart2 = '<div class="header-entry-2"></div>';
var HTMLbioPic = '<div class="pic-wrapper"><img width="150" src="%data%" class="biopic"></div>';
var HTMLsummaryWelcomeMsg = '<div class="welcome-message">%data%</div>';
var HTMLsummaryStart = '<ul class="summary-list"></ul>';
var HTMLsummaryLocation = '<li><span>Location</span> %data%</li>';
var HTMLsummaryPhone = '<li><span>Phone</span> %data%</li>';
var HTMLsummaryEmail = '<li><span>Email</span> %data%</li>';
var HTMLsummaryWebsite = '<li><span>Website</span> %data%</li>';
var HTMLsummaryGithub = '<li><span>GitHub</span> %data%</li>';
var HTMLsummarySkype = '<li><span>Skype</span> %data%</li>';
var HTMLsummaryMessenger = '<li><span>Messenger</span> %data%</li>';
var HTMLsummaryMore = '<li><span>Sex</span> %data1% | <span>Birthday</span> %data2% | <span>Nationality</span> %data3%</li>';
var internationalizeButton = '<div class="button-wrapper"><button>Internationalize</button></div>';

// Work Experience
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="clear-float">%data%</p>';

// Projects
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="clear-float">%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

// Education
var HTMLschoolsStart = '<div id="schools-wrapper"><h3>Formal Education</h3></div>';
var HTMLschoolEntry = '<div class="school-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="clear-float"><em>Major: %data%</em></div>';
var HTMLonlineCoursesStart = '<div id="online-courses-wrapper"><h3>Online Courses</h3></div>';
var HTMLonlineCourseEntry = '<div class="online-course-entry"></div>';
var HTMLonlineCourseTitle = '<a href="#">%data%';
var HTMLonlineCourseSchool = ' - %data%</a>';
var HTMLonlineCourseDates = '<div class="date-text">%data%</div>';
var HTMLonlineCourseUrl = '<a class="clear-float" href="#">%data%</a>';

// Map
var googleMap = '<div id="map"></div>';

// Let's Connect
var HTMLletsConnectSocialRow = '<div class="lets-connect-social-row row"></div>';
var HTMLletsConnectPhone = '<div class="social-row-entry c-6"><i class="social-icon fa fa-phone-square" aria-hidden="true"></i><span class="social-description">%data%</span></div>';
var HTMLletsConnectEmail = '<div class="social-row-entry c-6"><i class="social-icon fa fa-envelope" aria-hidden="true"></i><span class="social-description">%data%</span></div>';
var HTMLletsConnectWebsite = '<div class="social-row-entry c-6"><i class="social-icon fa fa-globe" aria-hidden="true"></i><span class="social-description">%data%</span></div>';
var HTMLletsConnectGithub = '<div class="social-row-entry c-6"><i class="social-icon fa fa-github" aria-hidden="true"></i><span class="social-description">%data%</span></div>';
var HTMLletsConnectSkype = '<div class="social-row-entry c-6"><i class="social-icon fa fa-skype" aria-hidden="true"></i><span class="social-description">%data%</span></div>';
var HTMLletsConnectMessenger = '<div class="social-row-entry c-6"><i class="social-icon fa fa-facebook-official" aria-hidden="true"></i><span class="social-description">%data%</span></div>';

// Footer
var HTMLfooterCopyrightWrapper = '<div class="footer-copyright-wrapper row"></div>';
var HTMLfooterCopyright = '<div class="c-12 copyright-text">&copy; 2017 <a href="mailto:marios.sofokleous@yandex.com">Marios Sofokleous</a>. Design and code are <a href="https://github.com/PictureElement/resume-template-html5">open source</a>.</div>';

// This helper function hooks up inName() function (located in
// resumeBuilder.js) to the button you'll be appending.
$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

// $(document).click() is a jQuery method (event handler).
//
// "document" refers to the entire web page (DOM).
//
// The anonymous function that gets passed into .click() method runs every
// time a user clicks on the page.
//
// "loc" is a jQuery event object that contains information about the
// click event.
//
// loc is passed as a parameter to the anonymous function that gets invoked
// whenever the click event is triggered. The anonymous function itself
// invokes a named function (logClicks) to achieve its goal.
//
// Anything that uses an anonymous function could also use a named function.
var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // Function invocation
    logClicks(loc.pageX, loc.pageY);
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});