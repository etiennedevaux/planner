# README Version Details
README Version: 0048;  
HTML Version: 0223;  
CSS Version: 0315;  
JavaScript Version: 0495;

# 1  UAV Flight Planner Description

## 1.1 Project Summary

The UAV (Unmanned Aerial Vehicles, commonly known as drones) Flight Planner helps remote pilots to understand how to plan flights under the CAA rules introduced at the start of 2021.

The new CAA rules on the use drones are based on the European Legislation, and bring a strong degree of harmonisation and move in a direction that matches the level of regulation to the risks represented by the combination of the drone and the qualifications of the pilot.  However, the new structure is, especially when first reviewed, complex and is further complicated by the addition of transitional arrangements for existing drones.

## 1.2 Project Goals

The goals for the site are to:   

* Provide Easy to Access Information on the New Drone Rules, in particular the flight categories that can be undertaken
* Provide Simple and Relevant Access to Mapping Tools that Assist Flight Planing 
* Engage New and Recent Pilots in a simnple, but structured flight planning process
* Provide Rapid Access to Key Tools that may be of use to pilots at all levels of experience, without the need to follow all steps in the process 

# 2 Responsive Mockup

The site itself will have three main pages, a link to open an external service in a Javascript generated page and a help link that will generated a new page with an embedded  YouTube video that walks a user through the key functionality of the site. 

The three main pages need to be adapted for the different devices.  The two generated pages will open in a small window on the desktop version and will open as separate full screen tabs on tablets and mobile phones.

Desktop use is probably the main means of access to the site, but the site does need to be available on tablets and mobile phones.

The page designs shown below evolved during the development process, with iterative adaptation of the scope.  Earlier versions are on GitHub.  The mockups were created using the [Pencil Project Wireframe Designer](https://pencil.evolus.vn/), the source files are on GitHub should collaborators wish to revisit them.

## 2.1 Desktop Mockups

### 2.1.1 Desktop Home Page

The Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_desktop_v2.png) 

### 2.1.2 Desktop Flight Parameters Page

The flight parameters page aims to keep all of the flight options on a single page and to show the result of those selections alongside.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_desktop_v2.png) 

### 2.1.3 Desktop Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_desktop_v2.png) 

## 2.2 Tablet Mockups

### 2.2.1 Tablet Home Page  
The Tablet version of the Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_tablet_v2.png) 

However in recognition that tablet devices are generally smaller and lower resolution, the overall dimensions are slightly reduced and the text content is shortened.

### 2.2.2 Tablet Flight Parameters Page
The Tablet version of the Flight Parameters page aims to keep all of the flight options on a single page and to show the result of those selections alongside.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_tablet_v2.png) 

However, there is an important balance to draw between minimising scrolling and clarity of text.  User interactions and feedbackm may alter this, but the present page does have some vertical scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.

### 2.2.3 Tablet Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_desktop_v2.png)

To work effectively for a tablet the spacing, fonts and element sizes have been condensed to maintain the single page without scrolling on most tablets.  

## 2.3 Mobile Phone Mockups

### 2.3.1 Mobile Phone Home Page

The Phone version of the Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_phone_v2.png) 

However in recognition that phones are smaller, lower resolution, and often used in portrait mode, the overall dimensions are further reduced, the text content shortened, and margins and padding minimised.  The content on the home page is not extensive, so the user experience is not significantly reduced.

### 2.3.2 Mobile Phone Flight Parameters
The Mobiile Phone version of the Flight Parameters page aims to keep all of the flight options on a single page with vertical only scrolling, and to show the result of the selections below the selectable parameters.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_phone_v2.png) 

User interactions and feedback may alter this, but the present page has extensive vertical scrolling.  In general mobile phone users will be comofrtable with scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.  An alternative approach would be to have multiple sub-pages from a single parent page, and this may be considered for future implementations is user feedback suggests it.

### 2.3.3 Mobile Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_phone_v2.png)

To work effectively on a mobile the key sections have been re-arranged vertically.  This does have the drawback of scrolling, but keeps the information on one page and scrolling is vertical only.
spacing, fonts and element sizes have been condensed, but as the maps have scrolling within them it is necessary to maintain some space around them to aid easy navigation.  

## 2.4 Drone Safety Map

The drone safety map opens in a separate page, created by Javascript and loaded from the location page.

![Drone Safety Map](https://etiennedevaux.github.io/planner/project-documents/wireframes/drone_safety_map.png)

When opening on a desktop device the map opens in a separate window, of a predetermined size that will adjust to match the size of the embedded maps.

When opening on a tablet or mobile phone it will open in a new tab, taking up the full screen space available.

The site itself, prodived by Altitude Angel, is responsive and therefore does not require any additional refactoring for different devices.

## 2.5 Help Page  

The Help Page is available at all times. 

When opening on a desktop device the help page opens in a separate window, of a predetermined size, created in Javascript with the YouTube embed code being added.  The embedded video does a walk-through of a simple flight plan.

![Help Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/help_page.png)

When opening on a tablet or mobile phone it will open in a new tab, taking up the full screen space available.

# 3 Scope of Features

The potential scope for this project was considerable, however the are a number of online services available that provide planning support for drone pilots, e.g. DroneCloud, DroneDesk, SkyDemon.  Having reviewed these they all tend to provide mapping software, some provide risk assessment but none, as yet, assist pilots in the evaluation of their drone and skills to define the open category flights that are available to them.  

The scope for this project was therefore to provide the following:

* An engaging introductory page that starts users on the planning process
* A method of entering relevant qualifications and capabilities alongside the intended category of drone to be flown, to provide the user with information on the types of flights they can conduct.
* Access to mapping resources and data, to enable the user to assess the suitability of the location for the flight.
* To guide the user through a simple planning process.

## 3.1 Project Features

The following features were implemented to achieve the above scope

### 3.1.1 Home Page

The home page brings in a hero image, with navigation, a footer and a link to start the planning process.  This page acts as gateway to the flight planning process.

### 3.1.2 Navigation

The Navigation is provided via a high-contrast area at top of the site, that remains in place for all pages.  Ensuring that the user always has easy access to any part of the site.  

The navigation bar uses simple Javascript routines to show and hide parts of the site, to provide separate pages whilst maintaining the complete site with a single HTML file.

Also on the Navigation bar is a link to a Help section.  

### 3.1.3 Footer

At this stage the footer is not, in itself, functional.  It displays key information at all times.  That information includes contact information, authorship and version numbers for the HTML, CSS and Javascript.  The last of these is important when debugging.

The footer is a fixed translucent  area of the screen, so that when scrolling is required the user can see that content is behind the footer and therefore below the main viewport.

The space in the footer area is also used for fixed buttons, typically NEXT and RESET.  When required these use z-index settings to display over the footer.

### 3.1.4 Help

The Help Page is described in section 1.2.5  

The page is, at this stage, an embedded YouTube video and provides the standard YouTube functionality.  The window can be closed in the usual way, and can be opened via the Navigation bar, which is always visible.

### 3.1.5 Step by Step Instructions

Throughout the planning process there is step by step guidance.  

Each instruction has three styles, one so that it is visible but unobtrusive before it is reached, one to show that that step is active, and a third style to show that it has been completed.

When GET STARTED is selected the first step is highlighted.  As the actions are completed so the highlighting changes to the next step, via Javascript.  

The idea is that the steps are there to guide users, but users can use any of the other functionality at any time, without the need to follow every step in the default process.

#### 3.1.6 Flight Parameters

The Flight Paramters Page needs to represent all of the pilot competencies, those being familiarity, training and qualifications, of which there are five, drone categories, of which there are effectively nine once subcategories are included, and the flight categories, of which there are six if subcategories are included.

The need, that this site will address, is for pilots, or potential pilots, to select their qualification level and the drone they intend to use, and to then apply the CAA rules to show the flight categories that are available.

Each competency and drone category is selected via a checkbox.  

Multiple competencies can be selected.

Only one drone at a time can be selected, this is delivered by making the drone categories a set of link radio buttons.

Flight categories will all be shown, but marked clearly as to whether or not they are available.

Pilots or prospective pilots need an easy way of changing parameters to see what effect that might have on the available flights.

See the post-scoping wireframe ![Flight Parameters Wireframe](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_desktop_v2.png)


### 3.1.7 Flight Location

The Flight Location page has alot of information on a single screen.  This is so that a pilot can see that information together and consider all factors in a single context.  This gives the pilot a feel for the location, almost as if they had visited the location.

#### 3.1.7.1 Flight Description

If a flight category has been selected on the Flight Parameters page then the description of what that flight category permits should be at the top of the Flight Location page, so that the user does not have to change pages to check and be reminded of the restrictions they have, for example the distance they need to maintain from un-involved people or how close they can be to a built-up area.

The flight category described on the location page will be a fuller description of the most exacting of the flight categories available.

If a flight category has not been selected the user will be invited to return to that page to choose a category, but it is not mandated as they may be doing that via other means, such as a paper-based risk assessment.

#### 3.1.7.2 Geo-Location Data 

The site is aimed at users with a wide range of mapping skills.  Even for experienced commercial pilots precise mapping data is often not available for target locations, especially as commissioning clients do not generally know the co-ordinates for the filming locations.  However, all UK locations are covered by a postcode, e.g. SW1A 1AA (Buckingham Palace) or SW19 5AG (Wimbledon All England Lawn Tennis).  The UK Royal Mail manages the postcode database, and makes the information, which in includes latitude and longitude for all postcodes, available via a public API.

Accessing this API so that the user can enter a postcode and be given a mappable latitude and longitude is a key function from which following information draws.

#### 3.1.7.3 Bing Maps

Bing Maps is considered an important tool amongst UK-based UAV pilots, as it provides full UK Ordnance Survey mapping, and is the only mainstream free tool to do so.  So Bing Maps displays immediately to the right of the longitude and latitude.  This is achieved using the Microsoft Bing Maps APIs.  The Bing map defaults to the OS Map view, with other views remaining available via the interface.

#### 3.1.7.4 Google Maps

Google Maps is also considered an important tool amongst UAV pilots as it provides the most up to date and detailed aerial views, plus the ability to select a street level view.  When combined with a traditional map, such as the UK ordnance survey, this provides thorough insite into the environment.  This insight ensures that a drone pilot can become familiar with a location that they have never visited.  Seeing this alongside the OS Map saves switching between maps and helps the pilot to align visual images with mapped features at a glance.

#### 3.1.7.5 Altitude Angel

The above maps are extremely powerful and detailed, but they do not contain any information about the flight restrictions that may apply in an area, for example flight restriction zones, railway lines or nuclear installations.

Altitude Angel produce mapping layers that provide all of this information.  Those are available via APIs and via the freely accessible Drone Safety Map - the APIs were considered and tested as part of the POC for this project but the freely accessible version better met the overall requirements.

This map is incorporated as a layer that goes over the embedded maps, this functionality can be seen by clicing on the link below

[Drone Safety Map](https://youtu.be/tMLuqcFOD-I)

## 3.2 Further Developments  

As stated above the potential scope is huge, but then moves into competition with established online services.

### 3.2.1  API Based Integrations

At present the site uses APIs to draw information from other services.  This integration could be made two way.  One example would be to feed flight locations back into the Altitude Angel flight logs.

### 3.2.2  One Page Summaries

When users have finished the flight planning process it would be good to have a one page summary of their flight plan.  This could be provided as a single web page, a printable page or a rich text formated email.

## 3.3 Out of Scope

An obvious development would be for users to register and store records of their flight plans.

However, this functionality is available though a number of services.  Instead it would be nore productive to use published or private APis to integrate with these services.  This site provides some functionality that those sites do not, and focussing on integrating that functionality would be the most efficient use of time for the most impactful outcome.

# 4 Validator Testing 

## 4.1 HTML W3C Validator

No errors were returned when uploading the html to the official [W3C validator](https://validator.w3.org/).

![W3C Validator](https://etiennedevaux.github.io/planner/project-documents/validators/w3c-html.png) 

## 4.2 CSS
No errors were found when uoloading the CSS to the official ([Jigsaw](https://jigsaw.w3.org/css-validator/)) validator.

![Jigsaw Validator](https://etiennedevaux.github.io/planner/project-documents/validators/jigsaw-css.png) 

There are six warnings, but these are not critical as they relate to external CSS, which is beyond scope to change and use of CSS variables, designed to simplify the management of the colour schemes.

![Jigsaw Validator Warnings](https://etiennedevaux.github.io/planner/project-documents/validators/jigsaw-css-warnings.png) 

## 4.3 Javascript
Ten warnings were found when uoloading the Javascript to the official ([JSHint](https://jshint.com/)) validator.

![JSHint Validator](https://etiennedevaux.github.io/planner/project-documents/validators/jshint-warnings.png) 

The first three relate to the use of callback functions to create event listeners.  These have been checked and work as designed.

The next five are from within the Google Maps code, specifically the initialise function.  As this code is supplied by Google it is out of scope to change it.

The final two relate to the use of the eval command, this is used to ensure that property names, rather than property values are used.  These have been checked and work as designed.

JSHint also identifed four undefined variables.

![JSHint Undefined Variable Warnings](https://etiennedevaux.github.io/planner/project-documents/validators/jshint-undefined.png) 

These are in code supplied by third-parties and are defined in external libraries.

JSHint also indentified five unused variables.
![JSHint Undefined Variable Warnings](https://etiennedevaux.github.io/planner/project-documents/validators/jshint-unused.png)  

These are all referenced from within the HTML page.

## 4.4 Unfixed Bugs

Use of eval is not recommended.  These sections of code will need to be reviewed to see if an improved solution can be found.

Some of the styling used to emphasise instructions, steps and parameters is hard coded into the Javascript, it would be better practice to draw styling from the DOM, store it, apply the emphatic styling and then return it to the original.  This is done in some areas, but not throughout.

# 5 Deployment

## 5.1 GitHub Desktop

### 4.1.1 Installing GitHub Desktop

GitHub Desktop can be accessed from http://desktop.github.com

1. Dowload the version for your local machine

2. Run the installation program

3. Run the program and sign-in to your GitHub account (to create a GitHub account go to http://www.github.com/join)

4.  Choose FILE then CLONE REPOSITORY

5.  Enter the URL https://github.com/etiennedevaux/planner

6.  The repository will then be downloaded to your local machine in the directory shown in the CLONE REPOSITORY dialogue

7.  File can be edited using your preferred editor, in my case I have used Visual Studio Code, but any common editor will work.

8.  See the documentation at https://docs.github.com/en/desktop

## 5.2 Running the Code

1.  By default on a PC the repository will be created at c:\GitHub\planner, other directories can be chosen and the directory structure will be different on other operating systems 

2.  Navigate to the repository directory  and run the file index.html using the browser of your choice

3.  CSS, Javascript and site images are accessed by relative paths and are stored within the assets folder.  Some resources are drawn from third-party locations.  

## 5.3 Editing the Code

1.  The main html file index.html is stored on the root folder, which is at c:\GitHub\planner if using GitHub Desktop on a PC with the default folder setttings.

2.  The index.html file can be edited with any text editor, including Notepad.exe on a PC.  HTML editing is more efficient with a specialist editor.  There are many available, such as [Visual Studio Code](https://code.visualstudio.com/) or [Brackets](http://brackets.io/).

3.  The README.md file is also stored in the root and can be edited with the same set of tools.  

4.  The README.md file is written using the Markdown language, focused on GitHub deployment.

5.  Visual Studio Code includes a preview for the Markdown Language, although this is not identical to the GitHub display format.  Significant formating should be verified on GitHub before making extensive use in the source file.

## 5.4 Commits

Frequent commits have been made, all are labelled with at least a summary.  Most major commits also have a description.

Commits are made both to update code, creating stable and re-usable versions, and to test that code working successfully as a local html file will work in the same way when viewed from the GitHub pages server.

All major functional areas are committed once completed and tested.

## 5.5 Push to Origin

Frequent pushes to origin from GitHub desktop are important, as this ensures:

1.  That committed code is stored in more than one place, ie on the desktop and in the cloud
2.  That committed code is available to viewers, reviewers and collaborators using GitHub
3.  If future issues occur then an audit trail back to a stable and working version of individual functions is available

## 5.6 GitHub Branches
Once tested the code is deployed on GitHub, using Github Desktop.  The code can be deployed to various branches to allow for testing and staging of changes and additions, whilst maintaining the integrity of the core.

## 5.7 Github Main Branch

The deployment goal at this stage is to be available for assessment on the Github platform.  Once tested locally it can then be deployed to a branch on GitHub, and when tested in that environment merged back into the main branch and left unchanged for assessment.

Currently the latest version is on the Main branch.

## 5.8 Live Deployment

The site is designed to be deployed on any standard server.  For assessment it will be deployed as a GitHub page.  For production it will be deployed to Microsoft Azure and integrated into partner websites.

### 5.8.1 GitHub Pages

The goal for this round of development is to make the site available for

1.  Assessment Purposes - so that the Code Institute can assess a stable and complete version.
2.  Peer review, including review on different devices.

Both of these are achieved by making the site available as an externally facing URL via the GitHub pages.

To add GitHub pages to a site (or to change setting)

1.  Logon to GitHub
2.  Go to Repositories
3.  Select the desired repository (e.g. warksar)
4.  Go to Settings
5.  Scroll down to the GitHub Pages section
6.  In the Source section click on the dropdown (default value None, but maybe already configured to point to a given branch such as Main)
7.  Select the desired branch to display and click on Save
8.  Other settings such as a Theme are not necessary for this site

The live link can be found here - https://etiennedevaux.github.io/planner/

The GitHub repository can be found here - https://github.com/etiennedevaux/planner/

### 5.9 Future Platforms

The code may be deployed to a different server.  To make this deployment as simple as possible the site has been designed to for easy copying and using relative file paths to assets such as CSS, images and Javascript.

To deploy to different server

1.  It is assumed that a server is available, with a known domain and a root directory configured to serve an index.html file via the hypertext transfer protocol (http)
2.  Copy the index.html file to the server root
3.  Copy the assets folder and all of its sub-directories (css, images, js, audio and video) to the server root
4.  Allow time for the uploads to be fully completed and for the target server to process those files, refer to documentation on the target server for precise estimates, but a few minutes is normally sufficient
5.  Enter the domain (e.g. https://etiennedevaux.github.io/planner) into your browser, the index.html file should automatically load and should include the linked content in the assets subfolder.
6. Folow the test procedures set out in this document
7. Test the above on a Desktop machine, a Tablet and a Mobile phone.

### 5.10 Index File

The index.html file is the only html file for the site.  The single file contains all pages and all static html content.

Javascript, contained in the file uav-flight-planner.js, displays and hides the content as required for each page of the site.

## 5.11 Help Page
The Help page is created via Javascript whenever the user selects the help icon.  The Javascript creates the page, and then inserts the embed code for a YouTube video, giving a brief walkthrough of the site.

## 5.12 Drone Safety Map

The Drone Safety Map page is created via Javascript whenever the user selects the help icon.  The Javascript creates the page, and then loads the HTML content from the URL https://www.dronesafetymap.com


## 5.13 Assets

The assets folder contains all of the supporting scripts, css and images needed to run the site.  The folder has sub-folders for Javascript (assets/js) CSS (assets/css) and images (assets/images).

Video resources are hosted on the YouTube streaming service.

## 5.14 Project Documents

The Project Documents folder (project-documents) contains information and files that may be relevant to a collaborator, such as wireframes, background documentation, Proof of Concept files and other helpful content.  The files in the project-documents folder are not necessary for the site to function.

# 6 Proof of Concept

The strategy outlined above is dependent on the technical feasibility of the following items:

## 6.1  Javascript Objects to Provide Drone Categories, Flight Categories and Pilot Competencies Data

This has been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

## 6.2 Link to Google Maps API

This has also been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

## 6.3 Link to Google StreetView API

The POC file is called [googlestreetview](https://etiennedevaux.github.io/planner/projectdocuments/poccode/googlestreetview.html) and provides the latitude and longitude in the correct format for a a chosen location.  For the location used in this POC the map and the streetview show side by side.  However, if we change to [googlestreetview2](https://etiennedevaux.github.io/planner/projectdocuments/poccode/googlestreetview2.html), which is by an obscure lake in County Cavan, and arguably a more likely flight location, then we get a blank screen - which is a poor user experience.

## 6.4 Link to Government Postcode Checker API

The smooth operation of this site requires conversion from UK postcodes to latitude and longitude for a central point in that postcode.  

This data is feely available from the [*Open Postcode Geo*](https://www.getthedata.com/open-postcode-geo-api) freely available with appropriate [attribution](https://www.ons.gov.uk/methodology/geography/licences).

A proof of concept page has been created to ensure that the technology could return decimal latitude and longitude, suitable for use in both the Google Maps and Altitude Angel APIs, and is stored within the project space on GitHub.

The POC file is called [PostCodeLookup](https://etiennedevaux.github.io/planner/projectdocuments/poccode/PostCodeLookup.html) and provides the latitude and longitude in the correct format for a single postcode (CV31 3PE).  The code to input any postcode was not required to prove the concept, but will be within the final project.

## 6.5 Link to Altitude Angel Drone Flight API

The smooth operation of this site requires mapping of proposed flight locations.  On its own this is sufficient for the core strategy.  However that does still leave the users needing to cross-reference with air traffic data.  Using the Altitude Angel API an air traffic map can be integrated.  The API for this is commercial, and offers a 1 month free trial.  Altitude Angel have agreed to grant me free access for academic purposes until the end of August 2021, allowing me to incorporate it into my project.  Should problems occur then this feature may need to be deprecated. 


THe POC file is called [AltititudeAngelAPI](https://etiennedevaux.github.io/planner/projectdocuments/poccode/AltitudeAngelAPI.html) and provides a surface level air traffic map for a given latitude and longitude.

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  
**NB Requires registration and login.**

## 6.6 Link to Bing Maps API

Google maps is generally seen as the *Goto* mapping service.  Within the UK Bing Maps provides an additional service that Google Maps does not, that being access to the Ordnance Survey mapping for the country.  This mapping provides an outstanding level of detail, authority and familiarity for UK based navigation.

THe POC file is called [BingMapsAPI](https://etiennedevaux.github.io/planner/projectdocuments/poccode/BingMapsAPI.html) and provides a surface level air traffic map for a given latitude and longitude.


The POC file was taken from the sample source code at the [Bing Maps SDK](https://www.bing.com/api/maps/sdk/mapcontrol/isdk/)

# 7 Credits

## 7.1 Content Credits
In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

## 7.2 Media Credits

## 7.3 Code Credits

### 7.3.1 The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)

## 7.4 External Libraries

This project uses a number of external libraries, as listed below

### 7.4.1 [Bootstrap](https://getbootstrap.com/)
https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js

### 7.4.2 [Font Awesome](https://fontawesome.com/)
https://use.fontawesome.com/releases/v5.6.1/css/all.css

### 7.4.3 [Google Fonts](https://fonts.google.com/)
https://fonts.googleapis.com/

### 7.4.4 [JQuery](https://jquery.com/)
https://code.jquery.com/jquery-3.3.1.slim.min.js


# 8 Testing

## 8.1 General Testing

## 8.2 Responsiveness Testing

The site makes extensive use of Bootstrap to provide responsiveness.  The CSS also contains media breakpoints that mirror the Bootstrap breakpoints.

## 8.3 User Story Testing

There are two key user stories:

* Inexperienced Pilots - who will take a guided, step-by-step, walk through the planning process.

* Experienced Pilots - who will want to access key services and functions directly, without the need to complete each step.

### 8.3.1 Inexperienced Pilots


### 8.3.2 Experienced Pilots

