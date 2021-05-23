# README Version Details
README Version: 0050;  
HTML Version: 0225;  
CSS Version: 0315;  
JavaScript Version: 0501;

# 1  UAV Flight Planner Description

## 1.1 Project Summary

Unmanned Aerial Vehicles or UAVs, commonly known as drones are bcoming ever more widely used, as a result the rules on the use of drones were changed considerably at the start of 2021.  

The UAV Flight Planner helps remote pilots to understand how to plan flights under the CAA rules introduced at the start of 2021.

The new CAA rules on the use drones are based on the European Legislation, and bring a strong degree of harmonisation and move in a direction that matches the level of regulation to the risks represented by the combination of the drone and the qualifications of the pilot.  

The flights covered by this area of legislation are collectively referred to as the Open Category Flights.  

However, the new structure is, especially when first reviewed, complex and is further complicated by the addition of transitional arrangements for existing drones. 

For drones to be used safely and legally it is important that pilots understand what they can, and cannot, do.

The site is aimed at UK-based drone pilots as the CAA rules are UK-sepcific.

The site uses UK postcodes to give locations, convering those to latitude and longitude which can be further localised.

The site uses UK ordnance survey mapping, provide by Bing Maps.

The geolocation tools can be used beyond the UK, but the rules the site incorporates are UK only.

## 1.2 Project Goals

The goals for the site are to:   

* Provide Easy to Access Information on the New Drone Rules, in particular the flight categories that can be undertaken
* Provide Simple and Relevant Access to Mapping Tools that Assist Flight Planing 
* Engage New and Recent Pilots in a simnple, but structured flight planning process
* Provide Rapid Access to Key Tools that may be of use to pilots at all levels of experience, without the need to follow all steps in the process 

# 2 Responsive Mockup

The site itself will have three main pages and two auxilliary pages.

The three main pages are:

* Home Page - engage the user, give a brief context and main call to action.

* Flight Parameters Page - allow the user to enter their qualifications, the drone they intend to fly and then to tell them what categories of flight are permitted.

* Flight Location Page - give geographic information about their intended location.

The two auxilliary pages are:

* Drone Safety Map - a link to open an external service in a Javascript generated page, giving flight specific information.

* Help Page - a new page with an embedded  YouTube video that walks a user through the key functionality of the site. 

The three main pages need to be adapted for the different devices.  The two generated pages will open in a small window on the desktop version and will open as separate full screen tabs on tablets and mobile phones.

Desktop use is the main means of access to the site, but the site does need to be available on tablets and mobile phones.

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

However, there is an important balance to draw between minimising scrolling and clarity of text.  User interactions and feedback may alter this, but the present page does have some vertical scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.

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

User interactions and feedback may alter this, but the present page has extensive vertical scrolling.  In general mobile phone users will be comofrtable with scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.  An alternative approach would be to have multiple sub-pages from a single parent page, and this may be considered for future implementations if user feedback suggests it is preferable.

### 2.3.3 Mobile Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_phone_v2.png)

To work effectively on a mobile the key sections have been re-arranged vertically.  This does have the drawback of scrolling, but keeps the information on one page and scrolling is vertical only.
spacing, fonts and element sizes have been condensed, but as the maps have scrolling within them it is necessary to maintain some space around them to aid easy navigation.  

## 2.4 Drone Safety Map

The drone safety map opens in a separate page, created by Javascript and loaded from the location page.

![Drone Safety Map](https://etiennedevaux.github.io/planner/project-documents/wireframes/drone_safety_map.png)

When opening on a desktop device the map opens in a separate window, of a predetermined size that will adjust to match the size of the embedded maps.

When opening on a tablet or mobile phone it will open in a new tab, taking up the full screen space available within that tab.

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

The Help Page is described in more detail above. 

The page is, at this stage, an embedded YouTube video and provides the standard YouTube functionality.  The window can be closed in the usual way, and can be opened via the Navigation bar, which is always visible.

### 3.1.5 Step by Step Instructions

Throughout the planning process there is step by step guidance.  

Each instruction has three styles, one so that it is visible but unobtrusive before it is reached, one to show that that step is active, and a third style to show that it has been completed.

When GET STARTED is selected the first step is highlighted.  As the actions are completed so the highlighting changes to the next step, via Javascript.  

The idea is that the steps are there to guide users, but users can use any of the other functionality at any time, without the need to follow every step in the default process.

### 3.1.6 Flight Parameters

The Flight Paramters Page needs to represent:

1.  Pilot Competencies, those being familiarity, training and qualifications, of which there are five.  

2.  Drone Categories, of which there are effectively nine once subcategories are included.

3.  Flight Categories, of which there are six when subcategories are included.

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

The site is aimed at users with a wide range of mapping skills.  Even for experienced commercial pilots precise mapping data is often not available for target locations, especially as commissioning clients do not generally know the latitude and longitude for the filming locations.  

However, this site targets the use of drones in the UK, and all UK locations are covered by a postcode, e.g. SW1A 1AA (Buckingham Palace) or SW19 5AG (Wimbledon All England Lawn Tennis).  

The UK Royal Mail manages the postcode database, and makes the information, which in includes latitude and longitude for all postcodes, available via a public API.

Accessing this API so that the user can enter a postcode and be given a mappable latitude and longitude is a key function from which following information draws.

#### 3.1.7.3 Bing Maps

Bing Maps is considered an important tool amongst UK-based UAV pilots, as it provides full UK Ordnance Survey mapping, and is the only mainstream free tool to do so.  So Bing Maps displays immediately to the right of the longitude and latitude.  This is achieved using the Microsoft Bing Maps APIs.  The Bing map defaults to the OS Map view, with other views remaining available via the interface.

#### 3.1.7.4 Google Maps

Google Maps is also considered an important tool amongst UAV pilots as it provides the most up to date and detailed aerial views, plus the ability to select a street level view.  

One of the unique points for this site is that it puts Bing Maps and Google Maps on the same page, and ties it into the UK postcode database.  In that way the three primary geolocation tools available to cover the UK are visible together in a single place.

When these three sources are combined this provides a simple and thorough insite into the environment.  This insight ensures that a drone pilot can become familiar with a location that they have never visited.  Seeing this alongside the OS Map saves switching between maps and helps the pilot to align visual images with mapped features at a glance.

#### 3.1.7.5 Altitude Angel

The above maps are extremely powerful and detailed, but they do not contain any information about the flight restrictions that may apply in an area, for example flight restriction zones, railway lines or nuclear installations.

Altitude Angel produce mapping layers that provide all of this information.  Those are available via APIs and via the freely accessible Drone Safety Map - the APIs were considered and tested as part of the POC for this project but the freely accessible version better met the overall requirements.

This map is incorporated as a layer that goes over the embedded maps, this functionality can be seen by clicking on the link below

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

## 4.4 Lighthouse Score

The Lighthouse Score for the site is shown here

[Lighthouse Score](https://etiennedevaux.github.io/planner/project-documents/validators/lighthouse.png)

Overall the Lighthouse scores are good.  Search Engine Optimisation and Accessibility are both in the 90s.  Best Practices at 87% suggests some further optimisations.  Close review shows that much of these would relate to external content.

The key area for further work is the performance area.  Overall none of the user feedback or testing raised issues with performance, but the key recommendations for image sizing and some small restructuring of Javascript and CSS are worth pursuing.  Some of these are due to script and CSS that is left in as placeholder content for future development.

## 4.5 Fixed Bugs

### 4.5.1 SWITCH CASE and Safari 

During user testing feedback from Mac users, and testing on Mobile devices, gave problems in the Javascript for calculating the permitted flight categories.  To overcome this the SWITCH CASE was changed to IF and ELSE IF statements.  The statement length is similar so this approach is equally effective and avoids some browser compatibility issues.  However, making this switch did not fully resolve the issue - but as it is an equally effective approach it was left in place.

### 4.5.2 attributeStyleMap and Safari

The user testing and iOS testing on tablets and phones would not work with the attrubuteStyleMap command as this is not yet available in some versions of Safari, up to Version 14.1.  This was therefore replaced by reading in the attribute styles from the DOM and storing them in arrays so that they could be re-applied.  This solution worked well and the issue with Safari is fully resolved.

In this case the Safari testing was completed by a fellow drone pilot.  Validating HTML on Safari on a desktop or laptop machine is often a challenge for people working on a PC, but it is an important area of testing as the Safari Apple combination will represent a large group of users.

### 4.5.3 Small Text in Flight Categories and Drone Categories

On smaller screens, including desktop screens, the text in the Drone Categories and Flight Categories needed to be very small to minimise scrolling.  However the text is important.  So an event handler was added so that when the mouse passed over the box the text is enlarged and emphasised.  As the mouse passes over this reverts to its original.  This also led to teh error described above, which was resolved as described.

### 4.5.4 Selecting Competencies and Drone Categories

In the original design it was necessary to click on the actual radio button or checkbox.  This made the process slow, and users testing the interface, reported that this was not intuitive.  To overcome this an event handler was added to the full text box, such that the checkbox or radio button would be toggled when any part of the textbox was clicked.  This also had to handle the actual checkbox or radio button being clicked, as this would trigger two event handlers, which coudl cancel each other out.

## 4.6 Unfixed Bugs

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

To add GitHub pages to a site (or to change settings)

1.  Logon to GitHub
2.  Go to Repositories
3.  Select the desired repository (e.g. planner)
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

## 5.10 Index File

The index.html file is the only html file for the site.  The single file contains all pages and all static html content.

Javascript, contained in the file uav-flight-planner.js, displays and hides the content as required for each page of the site.

CSS, contained in the file uav-flight-planner.css, determines the initial styling and visibility for each page.

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

The strategy outlined at start of this document is dependent on the technical feasibility of a number of items.  Before finalising the strategy it was necessary to create a series of brief 'Proof of Concept' files for the following items:

## 6.1  Javascript Objects to Provide Drone Categories, Flight Categories and Pilot Competencies Data

This has been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

## 6.2 Link to Google Maps API

This has also been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

## 6.3 Link to Google StreetView API

The POC file is called [googlestreetview](https://etiennedevaux.github.io/planner/project-documents/poccode/googlestreetview.html) and provides the latitude and longitude in the correct format for a a chosen location.  For the location used in this POC the map and the streetview show side by side.  However, if we change to [googlestreetview2](https://etiennedevaux.github.io/planner/project-documents/poccode/googlestreetview2.html), which is by an obscure lake in County Cavan, and arguably a more likely flight location, then we get a blank screen - which is a poor user experience.

## 6.4 Link to Government Postcode Checker API

The smooth operation of this site requires conversion from UK postcodes to latitude and longitude for a central point in that postcode.  

This data is feely available from the [*Open Postcode Geo*](https://www.getthedata.com/open-postcode-geo-api) freely available with appropriate [attribution](https://www.ons.gov.uk/methodology/geography/licences).

A proof of concept page has been created to ensure that the technology could return decimal latitude and longitude, suitable for use in both the Google Maps and Altitude Angel APIs, and is stored within the project space on GitHub.

The POC file is called [PostCodeLookup](https://etiennedevaux.github.io/planner/project-documents/poccode/PostCodeLookup.html) and provides the latitude and longitude in the correct format for a single postcode (CV31 3PE).  The code to input any postcode was not required to prove the concept, but will be within the final project.

## 6.5 Link to Altitude Angel Drone Flight API

The smooth operation of this site requires mapping of proposed flight locations.  On its own this is sufficient for the core strategy.  However that does still leave the users needing to cross-reference with air traffic data.  Using the Altitude Angel API an air traffic map can be integrated.  The API for this is commercial, and offers a 1 month free trial.  Altitude Angel have agreed to grant me free access for academic purposes until the end of August 2021, allowing me to incorporate it into my project.  Should problems occur then this feature may need to be deprecated. 


THe POC file is called [AltititudeAngelAPI](https://etiennedevaux.github.io/planner/project-documents/poccode/AltitudeAngelAPI.html) and provides a surface level air traffic map for a given latitude and longitude.

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  
**NB Requires registration and login.**

## 6.6 Link to Bing Maps API

Google maps is generally seen as the *Goto* mapping service.  Within the UK Bing Maps provides an additional service that Google Maps does not, that being access to the Ordnance Survey mapping for the country.  This mapping provides an outstanding level of detail, authority and familiarity for UK based navigation.

THe POC file is called [BingMapsAPI](https://etiennedevaux.github.io/planner/project-documents/poccode/BingMapsAPI.html) and provides a surface level air traffic map for a given latitude and longitude.


The POC file was taken from the sample source code at the [Bing Maps SDK](https://www.bing.com/api/maps/sdk/mapcontrol/isdk/)

# 7 Credits

## 7.1 Content Credits

The content for this section was created by the author.

Information on pilot competencies, drone categories and fligth categories is drawn from the CAA [CAP 722](https://publicapps.caa.co.uk/modalapplication.aspx?appid=11&mode=detail&id=415) and the [Drone Code](https://dronesafe.uk/drone-code/).  

Both provided by the [UK Civil Aviation Authority](https://www.caa.co.uk/).

## 7.2 Media Credits

The site background image is taken from NASA, showing an artists impression of the Ingenuity drone on Mars.

https://www.nasaspaceflight.com/2021/03/nasa-preparing-ingenuity-enabling-future-missions/

The Hero Image on the Home Page was supplied from the photographic stock of Devaux Online.

The Wireframes were produced with [Pencil Project Wireframe Designer](https://pencil.evolus.vn/)

GitHub Desktop can be accessed from http://desktop.github.com

## 7.3 Code Credits

### 7.3.1 Drone Safety Map  
The POC file for the Drone Safety Map was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/).  In the final implementation a slightly different approach was used.

### 7.3.2 Open Postcode API

The API and code examples used to provide the Latitude and Longitude from a UK postcode, references to those are at [https://www.getthedata.com/open-postcode-geo-api](https://www.getthedata.com/open-postcode-geo-api)

### 7.3.3 Bing Maps

The API and code examples used to provide the embedded Bing Maps, with UK Ordnance Survey view, were obtained from [https://www.bingmapsportal.com/](https://www.bingmapsportal.com/)

### 7.3.4 Google Maps

The API and code examples used to provide the embedded Google Maps, with statellite view, were obtained from [https://developers.google.com/maps](https://developers.google.com/maps)

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

General testing will make sure that the page is loading, that the Javascript and CSS are loading and functioning.

1.  Go to the address https://etiennedevaux.github.io/planner/#HomePage-Top on a desktop or laptop device

The Home Page should appear as ![Desktop Homepage](https://etiennedevaux.github.io/planner/project-documents/screenshots/desktop-homepage.png)

For this page, with the Hero Image and Get Started button to appear the html, CSS and Javascript files must all be loading correctly.

2. Checking the three part serial number, e.g. 0223.0315.0500 shows the HTML version (0223), CSS version (0315) and Javascript version (0500)

3. Next click on the ? to ensure that an embedded YouTube video page is displayed.

4. From the top navigation bar click on Flight Parameters 

The Flight Parameters should appear as ![Desktop Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/screenshots/desktop-flight_parameters.png)

5. Click on the browser back button to return to the Home Page

6. From the top navigation bar click on Location 

   The Location Page should appear as ![Desktop Location](https://github.com/etiennedevaux/planner/blob/main/project-documents/screenshots/desktop-location.png?raw=true)

## 8.2 Responsiveness Testing

The site makes extensive use of Bootstrap to provide responsiveness.  The CSS also contains media breakpoints that mirror the Bootstrap breakpoints.

A demonstration of the site being tested for responsiveness is shown here [UAV Flight Planner Responsiveness Testing](https://youtu.be/2VMUyT7phdg)

The key steps in the testing process are summarised below:

1.  Load the latest deployed version, currently at https://etiennedevaux.github.io/planner/

2.  Switch to the Google Chrome Developer Tools and go to the Responsive View

3.  Start with screen at a resolution of at least 1500px by 900px, the larger the better.

4.  From the bottom right hand corner gradually reduce the screen size to 1024px by 768px, check that the screen works well at all intermediate sizes

5.  From the bottom right hand corner gradually reduce the screen width to 340px, check that the screen works well at all intermediate sizes

6.  From the bottom right hand corner gradually reduce the screen height to 600px, check that the screen works well at all intermediate sizes

7.  Switch the view to the iPad option, and ensure that it is in Landscape

8.  From the Navigation Bar select the Flight Parameters option.

9.  Ensure that the screen scrolls and that all information is clear

10.  From the Navigation Bar select the Location option, ensure that all information is clearly visible

11.  Switch the view to the iPhone 6/7/8 option

12.  Use the Burger Menu to select the Home Page

13.  Ensure that the key call to action is clear and easy to read

14.  Select the Parameters page

15.  Scroll down and check different boxes

16.  Scroll down to check that the flight categories display clearly

17.  Select the Location page

18.  Scroll down to view the maps

19.  Click on a map and scroll within the map frame

## 8.3 User Story Testing

There are two key user stories:

* Inexperienced Pilots - who will take a guided, step-by-step, walk through the planning process.

* Experienced Pilots - who will want to access key services and functions directly, without the need to complete each step.

### 8.3.1 Inexperienced Pilots

Inexperienced pilots will follow the following user story:

1.  Go to the address https://etiennedevaux.github.io/planner/#HomePage-Top on a desktop or laptop device

2.  Click on the Get Started Button

3.  Check that Step One is highlighted

4.  On the Flight Parameters page select all the competencies that apply.  After the first selection Step Two should be highlighted and the Reset button displayed.  Competencies can be selected and changed at any point.

5.  Select the Drone Category.  Only one Drone Category can be selected at a time.  Passing over the Drone Categories should highlight each one as the mouse passes over and away.

6.  Once a drone category is selected the permitted flight categories should show as permitted or not and the Next Button should appear.

7.  Click Next.

8. On the Location Page the flight summary, at the top, should reflect the most stringent flight category. Step Three should be highlighted, inviting the user to enter a location.

9.  Enter a UK postcode and press Enter, the Latitude and Longitude should be populated, these can be entered or adjusted independently of the Postcode

10.  Re-centre the maps, check that they show the same location and that it corresponds to the Latitude and Longitude.

11.  Click Next, Step Five should be highlighed

12.  Click on Drone Safety Map, check that the Drone Safety Map is the same size as the embedded maps.

13.  Step Six should now be showing.


### 8.3.2 Experienced Pilots

Experienced pilots will move directly to the service or services they most require, and that add value to their own processes:

1.  Go to the address https://etiennedevaux.github.io/planner/#HomePage-Top on a desktop or laptop device

2.  Navigate to the Flight Parameters page

3.  On the Flight Parameters page select all the competencies that apply.  Competencies can be selected and changed at any point.

4.  Select the Drone Category.  Only one Drone Category can be selected at a time.  Passing over the Drone Categories should highlight each one as the mouse passes over and away.

5.  Once a drone category is selected the permitted flight categories should show as permitted or not and the Next Button should appear.

6. On the Location Page the flight summary, at the top, should reflect the most stringent flight category. If no flight category has been selected the user is invited, but not required, to visit the flight parameters pages.

7.  Enter a UK postcode and press Enter, the Latitude and Longitude should be populated, these can be entered or adjusted independently of the Postcode

8.  Re-centre the maps, check that they show the same location and that it corresponds to the Latitude and Longitude.

9.  Click on Drone Safety Map, check that the Drone Safety Map is the same size as the embedded maps.

# 9 Conclusions

The site is highly effective at supporting the planning process for the new Open Category flights introduced in 2021.

The site has some unique features that have great value to the key target users.

The ability to dynamically link pilot competencies to drone categories and flight categories is genuinely innovative.

The ability to see critical geographic information on one page combines existing tools in a unique way.

Site performance and functionality is good.

This is a great platform for further development and potential future commercialisation.

The look and feel needs some enhancement, as each page is still quite densely packed.

Integration with existing commercial providers would be a productive and efficient direction for future development.

