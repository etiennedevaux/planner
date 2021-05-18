# README Version Details
README Version: 0048;  
HTML Version: 0223;  
CSS Version: 0315;  
JavaScript Version: 0495;

# 1  UAV Flight Planner Description

## 1.1 Project Summary

The UAV (Unmanned Aerial Vehicles, commonly known as drones) Flight Planner helps remote pilots to understand how to plan flights under the CAA rules introduced at the start of 2021.

The new CAA rules on the use drones are based on the European Legislation, and bring a strong degree of harmonisation and move in a direction that matches the level of regulation to the risks represented by the combination of the drone and the qualifications of the pilot.  However, the new structure is, especially when first reviewed, complex and is further complicated by the addition of transitional arrangements for existing drones.

The goals for the site are to:   

* Provide Easy to Access Information on the New Drone Rules, in particular the flight categories that can be undertaken
* Provide Simple and Relevant Access to Mapping Tools that Assist Flight Planing 
* Engage New and Recent Pilots in a simnple, but structured flight planning process
* Provide Rapid Access to Key Tools that may be of use to pilots at all levels of experience, without the need to follow all steps in the process 

## 1.2 Responsive Mockup

The site itself will have three main pages, a link to open an external service in a Javascript generated page and a help link that will generated a new page with an embedded  YouTube video that walks a user through the key functionality of the site. 

The three main pages need to be adapted for the different devices.  The two generated pages will open in a small window on the desktop version and will open as separate full screen tabs on tablets and mobile phones.

Desktop use is probably the main means of access to the site, but the site does need to be available on tablets and mobile phones.

The page designs shown below evolved during the development process, with iterative adaptation of the scope.  Earlier versions are on GitHub.  The mockups were created using the [Pencil Project Wireframe Designer](https://pencil.evolus.vn/), the source files are on GitHub should collaborators wish to revisit them.

### 1.2.1 Desktop Mockups

#### 1.2.1.1 Desktop Home Page

The Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_desktop_v2.png) 

#### 1.2.1.2 Desktop Flight Parameters Page

The flight parameters page aims to keep all of the flight options on a single page and to show the result of those selections alongside.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_desktop_v2.png) 

#### 1.2.1.3 Desktop Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_desktop_v2.png) 

### 1.2.2 Tablet Mockups

#### 1.2.2.1 Tablet Home Page  
The Tablet version of the Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_tablet_v2.png) 

However in recognition that tablet devices are generally smaller and lower resolution, the overall dimensions are slightly reduced and the text content is shortened.

#### 1.2.2.2 Tablet Flight Parameters Page
The Tablet version of the Flight Parameters page aims to keep all of the flight options on a single page and to show the result of those selections alongside.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_tablet_v2.png) 

However, there is an important balance to draw between minimising scrolling and clarity of text.  User interactions and feedbackm may alter this, but the present page does have some vertical scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.

#### 1.2.2.2 Tablet Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_desktop_v2.png)

To work effectively for a tablet the spacing, fonts and element sizes have been condensed to maintain the single page without scrolling on most tablets.  

### 1.2.3 Mobile Phone Mockups

#### 1.2.3.1 Mobile Phone Home Page

The Phone version of the Home Page is designed to engage the user, give a clear call to action and also provide easy navigation to other parts of the site

![Home Page](https://etiennedevaux.github.io/planner/project-documents/wireframes/home_phone_v2.png) 

However in recognition that phones are smaller, lower resolution, and often used in portrait mode, the overall dimensions are further reduced, the text content shortened, and margins and padding minimised.  The content on the home page is not extensive, so the user experience is not significantly reduced.

#### 1.2.3.2 Mobile Phone Flight Parameters
The Mobiile Phone version of the Flight Parameters page aims to keep all of the flight options on a single page with vertical only scrolling, and to show the result of the selections below the selectable parameters.  

![Flight Parameters](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_phone_v2.png) 

User interactions and feedback may alter this, but the present page has extensive vertical scrolling.  In general mobile phone users will be comofrtable with scrolling.  To make this more intutitive content at the bottom is shown behind a translucent footer, inviting the user to scroll downwards.  An alternative approach would be to have multiple sub-pages from a single parent page, and this may be considered for future implementations is user feedback suggests it.

#### 1.2.3.3 Mobile Location Page

The location page shows Bing Ordnance Survey Mapping alongside a Google Maps satellite view.  The are step by step instructions and a space for geolocation information.

![Location](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_location_phone_v2.png)

To work effectively on a mobile the key sections have been re-arranged vertically.  This does have the drawback of scrolling, but keeps the information on one page and scrolling is vertical only.
spacing, fonts and element sizes have been condensed, but as the maps have scrolling within them it is necessary to maintain some space around them to aid easy navigation.  

### 1.2.4 Drone Safety Map

The drone safety map opens in a separate page, created by Javascript and loaded from the location page.

![Drone Safety Map](https://etiennedevaux.github.io/planner/project-documents/wireframes/drone_safety_map.png)

When opening on a desktop device the map opens in a separate window, of a predetermined size that will adjust to match the size of the embedded maps.

When opening on a tablet or mobile phone it will open in a new tab, taking up the full screen space available.

The site itself, prodived by Altitude Angel, is responsive and therefore does not require any additional refactoring for different devices.

# 2 The Development Lifecycle

#### 1.1.1 Strategy

The strategic goals for the site are to:   

* Provide Easy to Access Information on the New Drone Rules, in particular the flight categories that can be undertaken**  
* Provide Simple and Relevant Access to Mapping Tools that Assist Flight Planing**  
* Engage New and Recent Pilots in a simnple, but structured flight planning process** 
* Provide Rapid Access to Key Tools that may be of use to pilots at all levels of experience, without the need to follow all steps in a process** 

#### 1.1.2 Features in Scope

##### 1.1.2.1 Project Scope

The potential scope for this project was considerable, however the are a number of online services available that provide planning support for drone pilots, e.g. DroneCloud, DroneDesk, SkyDemon.  Having reviewed these they all tend to provide mapping software, some provide risk assessment but none, as yet, assist pilots in the evaluation of their drone and skills to define the open category flights that are available to them.  

The scope for this project was therefore to provide the following:

* An engaging introductory page that starts users on the planning process
* A method of entering relevant qualifications and capabilities alongside the intended category of drone to be flown, to provide the user with information on the types of flights they can conduct.
* Access to mapping resources and data, to enable the user to assess the suitability of the location for the flight.
* To guide the user through a simple planning process.

##### 1.1.2.2 Project Features

The following features were implemented to achieve the above scope

##### 1.1.2.1 Flight Categories

The flight categories page needs to represent all of the pilot competencies, those being familiarity, training and qualifications, of which there are five, drone categories, of which there are effectively nine once subcategories are included, and the flight categories, of which there are six if subcategories are included.

The need, that this site will address, is for pilots, or potential pilots, to select their qualification level and the drone they intend to use, and to then apply the CAA rules to show the flight categories that are available.

Multiple competencies can be selected.

Only one drone at a time can be selected.

Flight categories will all be shown, but marked clearly as to whether or not they are available.

Pilots or prospective pilots need an easy way of changing parameters to see what effect that might have on the available flights.

See the post-scoping wireframe ![Flight Parameters Wireframe](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_desktop_scope_2.png)


##### 1.1.2.2 Flight Location

###### 1.1.2.2.1 Flight Description

If a flight category has been selected on the Flight Parameters page then the description of what that flight category permits should be at the top of the Flight Location page, so that the user does not have to change pages to check and be reminded of the restrictions they have, for example the distance they need to maintain from un-involved people or how close they can be to a built-up area.

If a flight category has not been selected the user will be invited to return to that page to choose a category, but it is not mandated as they may be doing that via other means, such as a paper-based risk assessment.

###### 1.1.2.2.2 Planning Steps

###### 1.1.2.2.3 Postcode Database 

The site is aimed at users with a wide range of mapping skills.  Even for experienced commercial pilots precise mapping data is often not available for target locations, especially as commissioning clients do not generally know the co-ordinates for the filming locations.  However, all UK locations are covered by a postcode, e.g. SW1A 1AA (Buckingham Palace) or SW19 5AG (Wimbledon All England Lawn Tennis).  The UK Royal Mail manages the postcode database, and makes the information, which in includes latitude and longitude for all postcodes, available via a public API.

Accessing this API so that the user can enter a postcode and be given a mappable latitude and longitude is the first requirement.

###### 1.1.2.2.4 Bing Maps

Bing Maps is considered an important tool amongst UK-based UAV pilots, as it provides full UK Ordnance Survey mapping, and is the only mainstream free tool to do so.  So Bing Maps will display immediately to the right of the longitude and latitude.  This will be achieved using the Microsoft Bing Maps APIs.  The maps will default to the OS Map view, with other views remaining available via the interface.

###### 1.1.2.2.5 Google Maps

Google Maps is also considered an important tool amongst UAV pilots as it provides the most up to date and detailed aerial views, plus the ability to select a street level view.  When combined with a traditional map, such as the UK ordnance survey, this provides thorough insite into the environment.  This insight ensures that a drone pilot can become familiar with a location that they have never visited.  Seeing this alongside the OS Map saves switching between maps and helps the pilot to align visual images with mapped features at a glance.

###### 1.1.2.2.6 Altitude Angel

The above maps are extremely powerful and detailed, but they do not contain any information about the flight restrictions that may apply in an area, for example flight restriction zones, railway lines or nuclear installations.

Altitude Angel produce mapping layers that provide all of this information.  Those are available via APIs and via the freely accessible Drone Safety Map - the APIs were considered and tested as part of the POC for this project but the freely accessible version better met the overall requirements.

This map is incorporated as a layer that goes over the embedded maps, this can be seen by clicing on the link below


[Drone Safety Map](https://youtu.be/tMLuqcFOD-I)

##### 1.1.2.3 Planning Guidance

The flight planning process is intuitive to experienced drone pilots, but may not be so for new and less experienced pilots, especially since the introduction of the new rules.  



See the post-scoping wireframe ![Flight Location Wireframe](https://etiennedevaux.github.io/planner/project-documents/wireframes/flight_parameters_location_scope_2.png)

##### 1.1.2.4 Out of Scope

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# NOTES



Maintaining a website is an ongoing task, if well designed that task may be light in total hours.  From time to time more major reviews and updates may be required.  
Ongoing maintenance might include areas such as events, annual reports, a photo gallery and maybe a video gallery.  
Reviews might lead to one or more development sprints.  Minor reviews might be annual or in response to operational changes.  Major reviews might be on a 3 to 5 year cycle.  
For the ongoing maintenance an information policy should be agreed as to what information, photos and videos it is appropriate to publish.  
Development sprints would be agreed between the organisational leadership and the developer.  

The first agreed sprint was **Site Modernisation** - which would involve modernising the look and feel, whilst removing poorly used tools such as the Blog and the Search option.

It is this sprint that represents Milestone Project One.

Possible future sprints were:

1. Content review - focusing on accuracy, currency and relvance of content

2. Media review - focusing on quality, currency and impact of visual and audio content

3. Strategic review - reviewing current functionality and deciding on additional pages and tools for future sprints

# NOTES

#### 1.1.3 Structure

The developer and organisational leadership agreed a broad structure, but with acknowledged flexibility in the implementation.

This was established via a Proof of Concept Site, the site itself is in the GitHub repository as the branch DraftforReview

Draft2forReview, Draft3forReview and Draft4forReview show successive iterations that were shared and reviewed.

Inital Proof of Concept Screenshots (a few examples)

1. [POC Homepage](https://etiennedevaux.github.io/warksar/projectdocuments/poc/poc_home.png)
2. [POC What We Do](https://etiennedevaux.github.io/warksar/projectdocuments/poc/poc_whatwedo.png)
3. [POC Teams](https://etiennedevaux.github.io/warksar/projectdocuments/poc/poc_teams.png)
4. [POC Gallery](https://etiennedevaux.github.io/warksar/projectdocuments/poc/poc_gallery.png)

#### 1.1.4 Skeleton

The Skeleton Structure was initially agreed as 

1. Home Page - containing the four key calls to action

2. About - with a drop down menu (rather than a page) showing What We Do and Our History, there will be no actual About page.

3. What We Do - describing the work of the team

4. Events - listing events in which the team participated  
*This was at the start of the wireframing as it was felt it overlapped with social media*

5. Get Involved - during the wireframing this evolved into a simpler Join Us section

6. Gallery - with a photo gallery and video gallery, although these were combined into a single gallery during implementation

7. Contact - listing key contact points

The wireframes are shown in section 2

#### 1.1.5 Surface

The proof of concept and the wireframes gave a high level of clarity for the desired surface features and how they would look.

The overall structure was agreed as 

1.  A dark and slightly transparent upper navigation bar, visible at all times but adapting for small screens

2.  A green page background, to appear on pages with no background image, which were primarily the factual and textual information pages

3.  A choice of two backgroud images to appear on pages with visual and less formal content

4.  A grey and slightly transparent footer bar, available on all screens, unless the screen height was very low (ie not mobiles in landscape)

The overall design was agreed from the Wireframes (as shown in section 2)

The need to avoid obscuring text with background images was felt to be high priority for the more formal information based pages

### 1.2 User Experience

*NB The video recordings may not reflect the exact screens as text, images and configuration may have had minor changes in response to user feedback.  No changes have been made that alter the four key user journeys.*

The key purpose of the Warwickshire Search and Rescue (Warksar) site it to reach out to the public in general.  The team members will mainly communicate and interact with each other via internal online services.  

The agreed strategic goals for the site are to Inform, Communicate and Engage.  Engagement will include support, participation and donations.

The user journey is based on four personae:

1. People coming to the site, who simply, at this stage want to find out more information, but need to nurtured as potential future contributors, members, donors or maybe all three.

2. People coming to the site looking for answers to specific queries, that may not be answerable from the site alone.

3. People coming to the site who wish to become involved as operational members.

4. People coming to the site who wish to donate.

This leads us to 4 critical user journeys, all of which start from the Home Page
*NB:  Minor changes to the interface have continued and may not all be reflected in the recordings.  Where significant changes are made the recordings will be updated.

#### 1.2.1 The Home Page
[*Home Page Demonstration*](https://youtu.be/bswPg6mYZAc)

#### 1.2.2 Information Seekers
[*Demonstration for Users Seeking Information*](https://youtu.be/nghCxQIYFRs)

For most of the public in general they may have had little reason to have come across Warksar, but have now heard about it and would like to know more.  These people are potential donors, members and collaborators - but for now need to be nurtured rather than directed.

The Call to Action gives these people a prompt to the About - What We Do section.  All navigation remains either directly visible, or within a single click on a dropdown.  At most this user is two clicks from any part of the site.

#### 1.2.3 Queries
[*Demonstration for Users with Specific Queries*](https://youtu.be/7ZZaQi35YWU)

If somebody wants to get in touch they are potentially valuable to the organisation.  They probably already know something about the organisation already and want to discuss something specific.  They need rapid access to contact information, balancing the need to get to the right person with the need to have the information without any complex navigation.

This user is immediately prompted to the Contact section.  The navigation bar keeps these users within two clicks of a relevant contact person.

#### 1.2.4 Potential Members, Supporters and Collaborators
[*Demonstration for Potential Members*](https://youtu.be/7uWdSgunZEA)

These people may be ready and willing to make substantial contributions and to bring their own time and expertise.  They are likely to want specific information about key activities, and to understand how they could best contribute.

It is important that this group understand waht is involved before signing up.  Therefore the Join Us page is always a single click, with the sign-up button being a click at the bottom of the information page.

This group are also likely to be future donors.

#### 1.2.5 Donors
[*Demonstration for Donors*](https://youtu.be/fKmlrB2n-PU)

These are people comning to the site with the specific intention of making a donation.  These people need rapid links to the dontation information that supports their preferred donation method. At all times users will be within two clicks of a donation option.

It may also be desirable to keep a GDPR compliant record of these people, so that they can be supported and thanked.  Such information is easy to gather - but managing it on an ongoing basis does need to considered.

## 2 Wireframe Designs

The Wireframe Designs were created using [Justinmind 9.2.2](https://www.justinmind.com/), examples of the interface are shown below:  
[JustInMind - Interface Example One](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/justinmind.jpg)  
[JustInMind - Interface Example Two](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/justinmind_2.jpg)

Each page was prototyped in order to get concensus from the Warwickshire Search and Rescue Team.  Once finalised the designs were implemented in html, using CSS and Javascript. 

The wireframes were designed to give an outline view for each page, as it would be seen on a typical 
1. Desktop
2. Tablet - In Landscape Mode
3. Mobile Phone - In Portrait Mode
The actual implementation has more granular responsive features built-in

At this stage the Desktop is still seen as the primary device, but Mobile phones are seen as increasingly important for future developments and extensions.
*In some cases there are minor interface changes from the original wireframe.*

### 2.1 Homepage
#### 2.1.1 [Home - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/home_desktop.png)
#### 2.1.2 [Home - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/home_tablet.png)
#### 2.1.3 [Home - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/home_mobile.png)

### 2.2 About - What We Do
#### 2.2.1 [About - What We Do - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_whatwedo_desktop.png)
#### 2.2.2 [About - What We Do - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_whatwedo_tablet.png)
#### 2.2.3 [About - What We Do - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_whatwedo_mobile.png)

### 2.3 About - History
#### 2.3.1 [About - History - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_history_desktop.png)
#### 2.3.2 [About - History - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_history_tablet.png)
#### 2.3.3 [About - History - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/about_history_mobile.png)

### 2.4 The Team
#### 2.4.1 [The Team - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/theteam_desktop.png)
#### 2.4.2 [The Team - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/theteam_tablet.png)
#### 2.4.3 [The Team - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/theteam_mobile.png)

### 2.5 Join Us
#### 2.5.1 [Join Us - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/joinus_desktop.png)
#### 2.5.2 [Join Us - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/joinus_tablet.png)
#### 2.5.3 [Join Us - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/joinus_mobile.png)

### 2.6 Gallery
#### 2.6.1 [Gallery - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/gallery_desktop.png)
#### 2.6.2 [Gallery - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/gallery_tablet.png)
#### 2.6.3 [Gallery - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/gallery_mobile.png)

### 2.7 Contact
#### 2.7.1 [Contact - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/contact_desktop.png)
#### 2.7.2 [Contact - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/contact_tablet.png)
#### 2.7.3 [Contact - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/contact_mobile.png)

### 2.8 Donate
#### 2.8.1 [Donate - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/donate_desktop.png)
#### 2.8.2 [Donate - Tablet](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/donate_tablet.png)
#### 2.8.3 [Donate - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/wireframes/donate_mobile.png)

Perhaps most importantly, as this is a real-world development, the wireframe designs will be used for workshopping future developments, ensuring clear specifications before development work starts.

This approach will also allow creative free-thinking and discussion, whilst ensuring the production website remains stable.

## 3 Responsive Design

### 3.1 [Responsive Design Demo](https://youtu.be/e96WzABQF0c)
With a wide range of screen sizes for all potential users it is important to design for responsiveness, based on horizontal and vertical resolution changes.

Also see README section 10.6 for examles of responsive design testing.

## 4 Accessible Design

### 4.1 Accessible Design Principles
Accessible design is about maximising accessibility for as wide a range of users as possible, over a wide range of browsers in a wide range of contexts.

To ensure this use of semantic markup, such as section, heading, navigation and other semantic tools is maximised.

The aria set of attributes are also widely used.

### 4.2 Testing Process
[Web Accessibility](https://www.webaccessibility.com/)

The initial testing identified 4 issues and a score of 92%, those being the 4 social media links in the footer.  The source of the issue was having a fontawesome icon and no text label.

To overcome this aria-label attributes were added to all of anchor elements, in accordance with the [W3C Guidelines](https://www.w3.org/TR/wai-aria/#aria-label)

The above tool still showed these as an issue, but the links are compliant so they can be deployed whilst the discrepancy is further investigated.

## 5 Features
Features for the Warwickshire Search and Rescue Website

### 5.1 Home Page
The home page is designed to give an eye-catching experience with a clear Call to Action (CTA).

The top menu is static, ensuring a familiar navitation interface from any part of the site.  The menu includes drop downs, but the client preference is generally for a fairly flat structure and pages with general information, rather than deeper menu links.  Both are available and will be used.

The footer is also static, keeping key information and links readily available at all times when on the site.  This information includes social media links, registered charity number and email contact.

The CTA can be animated, some people love animation some hate it.  At present the css is available but disabled.

### 5.2 About - What We Do
The What We Do page is desgigned, using Bootstrap, to provide clear, factual information with supporting media, in the form of photos, audio and video.

The page is navigated by the user simply scrolling down.  The page is designed to be responsive for different screen sizes and orientations.

### 5.3 About - Our History
This page uses a timeline layout.  This is based on the template provided [Here](https://www.w3schools.com/howto/howto_css_timeline.asp)

The timeline has had minor adaptations to improve how the top item displays, and more subtantial extensions to make it fully responsive.

### 5.4 The Team
This section was based on the Bootstrap carousel example [Here](https://www.w3schools.com/bootstrap4/bootstrap_carousel.asp) but with adaptations to allow for easier display of a range of image shapes, sizes and orientations on a range of screen sizes.  

The aim is to provide a simple, informal narrative on the type of work done by Warwickshire Search and Rescue

### 5.5 Join Us
The Join Us page is fairly low key as there is no currently active recruitment campaign.  However, it is still a key part of the site.

The main aim is to ensure that before people express an interest that they understand the scale of commitment that is required, hence the page has a scrollable section describing the work, with a button at the bottom, at least implying that people have read the text before they make contact.

#### 5.5.1  Join Us Modal Form
For this deployment the contact button triggers a modal form.  This form captures information from the user, who then submits.  At present the submission triggers a JavaScript that hides the submit button and an external PHP file that stores the submission on a SQL Server database and returns a confirmation message to the user.  This will need to be considered in the context of GDPR, so is not part of the initial deployment.

### 5.6 Gallery Page
The Gallery Page, taken from the Code Institute Love Running exercise, is an important and informal way of engaging end users in the wide variety of activities undertaken by Warwickshire Search and Rescue.  The masonry board effect enables users to see a wide range in a single view and focus on the areas of interest to them, sometimes with internal or external links to articles or multimedia.  The photos come from a wide range of sources and on 4k screens did initially show pixelation.  The standard Bootstrap breakpoints do not cover screens that large, so an additional breakpoint at 2,400 px width has been created.  The extra column minimised pixelation issues.

### 5.7 Contact
The contact page deploys standard Bootstrap cards.  The Police card links to an external site, using _blank for a separate tab, thereby maintaining navigation etc.

The other cards use mailto: at present, this may be developed to use automatic emails and databsae storage of data (as elsewhere on the site) but for the initial deployment the mailto: options is considered sufficient.

### 5.8 Donate
Currently there are three preferred donation methods on this page.  A fourth one is in the specification for a future deployment, and will follow the same pattern.

The PayPal and Easyfunding options point to embedded pages, that open in a new tab.

The banking details for works slightly differently.  For security reasons it is not felt to be appropriate to have full banking details directly on the website.  It is also the case that the other options have some inherent recording of donations etc.  People submitting donations online needs some additional recording and tracking.  The workflow is as follows

1.  User clicks on the button to request details

2.  A modal form requests a name and email address

3.  The user submits, and the modal form changes to show that they have submitted.

4.  An automatic email is generated from emailjs and is sent to the user with a copy to the relevant person in Warwickshire Search and Rescue

5.  A PHP routine is called on a separate server that creates a record in a separate SQL Server.  This records the form data alongside a date.

#### 5.8.1 Donation Modal Form
When submitting a donation via an online transfer the workflow involves sending an automated email to the benefactor, with a copy to the fund raising co-ordinator and a record being made in a remote database of the request for details.

This is achieved by using a Bootstrap Modal, in which there is an embedded form with a submit button.

The submit button runs a JS routine and also posts the form to a PHP routine that securely accesses the database.

In the initial implementation the output from the PHP routing goes to a hidden iframe, future deployments will use the iframe to give a message to the user.

At present the form button label changes to show that the submission has been completed.

### 5.9 Site Wide Features

#### 5.9.1 JavaScript 'Virtual Pages'

LO2 - 2.1 States *Create a website of at least 3 pages, or (if using a single scrolling page) at least 3 separate page areas, to match the design and to meet its stated purpose*

This site is designed as a single scrolling html file, index.html, that contains all of the pages.  Some simple Javascript is then used to manipulate the DOM and to show the selected page and hide others, giving an enhanced user experience over the simple use of scrolling to navigate.

This approach has advantages and disadvantages

**Advantages**
Global changes, such as to the footer and navigation bar, only need to be made in one place
Navigation between parts of the site is rapid, as all html has always been downloaded
Functionality is maintained on the downloaded site even when connectivity is lost or poor
Future aspirations for site searches are easier to implement
Once entered the same content can be shown on multiple pages, particularly in search results

**Disadvantages**
Some knowledge of Javascript is required to build and develop the site (not for content editing)
The browser navigation trail has to be created via Javascript
Initial page loading can be slower as hidden elements are being downloaded

**Conclusions**
In this case the virtual page approach was agreed to be optimal for
1.  Future developments
2.  Performance, particularly in low and variable bandwidth remote environments
3.  Future maintenance

#### 5.9.2 Navigation Bar
The Navigation bar, based on a Bootstrap Navigation bar, but with some local customisation, is visible in the same place at all times.  This gives a simple, unobtrusive and always easily available navigation experience.

The element has 0.9 opacity, so that it is always clear when there is content behind it, inviting the user to scroll to that content, but without obscuring the text.

#### 5.9.3 Footer
The Footer bar is visible in the same place at all times.  This gives simple, unobtrusive and always easily available information, such as contact and charity number, as well as links to related external social media sites.

The element has 0.8 opacity, so that it is always clear when there is content behind it, inviting the user to scroll to that content, but without obscuring the text.  The opacity is lower than the header for two reasons, firstly it shows content that the user may not yet have seen, secondly it is primarily a reference feature rather than an active part of the naviation experience.

The footer also contains information about the precise code versions the user is seeing.  This helps to match the user experience to precise versions of html, css and Javascript code.

Date and ownership information are also held here.  This information is generally of low importance, but on occasions can be an important reference.

#### 5.9.4 Background Images
This site is using a single page of html, with sections being hidden and shown via a simple JavaScript routine.  This approach provides many advantages, particularly around performance and re-use of content.  

Some of the user feedback is for the site background image to only appear in the 'Call to Action' home section.  Having the background image as a separate div keeps it out of the content flow, so making other changes easier.  

To provide the user requirement the div now has an additional class that makes it easy to switch it off and on with a small change to the existing Javascript.

#### 5.9.5 Multimedia
Multimedia is a growing part of the Warwickshire Search and Rescue site.  The images have some animation and additional effects.  The gallery contains a number of pictures and an item of streamed video.

The What We Do section contains downloaded audio and video.  The video has been recorded and edited at a low resolution to make the file small enough to go on GitHub.  The video content has not been approved for YouTube, once approved it can be uploaded to a streaming service and be delivered that way instead.

One of the multimedia challenges is that all media are contributed by members of the team, this means that the items come in highly variable levels of quality and format.  CSS is used to adjust media, often at an individual level, to optimise appearance.

## 6 External Libraries

This project uses a number of external libraries, as listed below

### 6.1 [Bootstrap](https://getbootstrap.com/)
https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css
https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js

### 6.2 [Font Awesome](https://fontawesome.com/)
https://use.fontawesome.com/releases/v5.6.1/css/all.css

### 6.3 [Google Fonts](https://fonts.google.com/)
https://fonts.googleapis.com/

### 6.4 [JQuery](https://jquery.com/)
https://code.jquery.com/jquery-3.3.1.slim.min.js

### 6.6 [EmailJS](https://www.emailjs.com/)
https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js

### 6.7 [Microsoft Azure](https://azure.microsoft.com/)
In addition the SQL Server and PHP Server are held on Microsoft Azure

## 7 Key Issues

### 7.1 Handling different sizes and shapes of images
Keeping images fresh and relevant is important for the work of the organisation.  However, images come from a wide range of non-specialist contributors, and therefore in a wide range of shapes, sizes and resolutions.

Multiple approaches have been tried.  The two key approaches are:

1.  Using the traditional img tag

2.  Using the background-image css property

So far approach 1 would seem easier to manage and maintain, although approach 2 is likely to work better with small video clips.  Approach 1 will be deployed for now.

By default all images and image boxes are given an ID.  This may not be strictly necessary, but if the id is in place it makes it easier to use CSS to target individual images.

Many images will be assigned an id so that they can be individually manipulated from CSS.

### 7.2 Logo Text Link
Changed logo text link to point to an internal anchor, ensuring that the link does not need to change if the root domain is changed with deployment to different services.

### 7.3 Browser Back Button
The site is a single file, divided into virutal pages, each of which is a div that is hidden or shown by a JavaScript routine.  THis approach has many benefits that are discussed elsewhere, but was leaving the browser back button empty.  This has been resolved by adding a Javascript line of code to insert an address to the back button, adding anchors at the top of each virtual page and detecting 'onhashchange' events.

### 7.4 Carousel Headings and Captions
User feedback suggested that the captions and headings for the carousel should blend more seamlessley into the background photos.  A gradient background colour was used to achieve this.

### 7.5 Bootstrap Burger menu opening dropdown at breakpoint
The core bootstrap does this as toggle.  Occasionally that can get out of sync, so the body element has an onload option to ensure that it remains synced when the page is loaded or reloaded.

### 7.6  Items going over header and footer when scrolled
The header and footer were originally set with a z-index of 2.  However some other content items had z-index values that were higher.  The z-index of footer and header were set to 10, so that all other items can come below them as they scroll.  This approach also enables a user to see when there are items beneath the translucent header and footer, inviting them to scroll.

### 7.7 Bottom row of Gallery images
The bottom row of gallery images end at different points as the images are, by design, of different lengths.  The overall mosaic effect is effective and provides a different perspective of hte work of the organisation.  But the bottom layer looked untidy. Two key things have been done, firstly the background imaged was switched from a blurred image to one that comes from a blur into focus.  Secondly the external margin to ensure that other pages can scroll clear of the translucent footer, was removed.  The overall effect is now far more aesthetic.

### 7.8 Additional Breakpoints
Three additional breakpoints have been added:

1.  Screens over 2000px in width
2.  Screens over 2400px in width
3.  Screens under 600px in height, this particularly targets mobile devices in landscape

### 7.9 Size of media files
GitHub has an upper file limit of 100Mb.  This is generous for code, and adequate for audio and images.  However, for video this is limiting.  Video files for the site are therefore either streamed from a third-party (Y0uTube or Facebook) or reduced in resolution to be stored on GitHub.

The are examples of all three on this site.

### 7.10 Chrome Lighthouse Report

The Chrome Lighthouse report highlighted three key issues:

1. Performance - the initial image was loading from a remote location.  Moving the image to the same server improved performance.  However this link will need adjusting when the site is moved across to a different server.  Alternative locations have been left in the CSS, btu have been commented out.

2.  Best Practices on External Links - some of the external links did not have the noreferrer attribute.  This has been addressed.

3.  Best Practices Vulnerabilites - known vulnerabilities within Bootstrap 4.1.3 and JQuery 3.3.1 javascript libraries were highlighted.  These will be addressed in the next development round.

## 8 Code Structure

### 8.1 HTML

The HTML code has natural structure from the use of semantic elements such as header, navigation, footer and section.

Additional structure is provided with extensive annotations in comment lines.

Major sections are labelled with a start and end comment.

Elements are indented to help identify nesting and to ensure that elements are closed and do not cross.

### 8.2 CSS
There is, at present, a single css file within the assets sub-folder of the site.  
The CSS file has frequent comments and annotations.  
To provide structure the CSS file uses annotations to divide into sections that correspond to the parts of the website, plus other universal elements, such as the header, the footer, animations and media queries.

CSS classes follow a consistent pattern.  Classes created for the Warwickshire Search and Rescue site start with a wsr- prefix, other parts of the class given context.  This approach helps to distinguish classes specific to this site from those that are imported for other sites and those that serve to customise classes from external libraries, such as Bootstrap.

### 8.3 JavaScript
There is very little Javascript, but the Javascript routines are stored in a separate js file within the assets subfolder of the site.

Code is indented for clarity.

## 9 Deployment

### 9.1 Development and Testing

Development and testing is run on a local machine as a set of files on the hard drive.

The PHP and SQL Server elements are run on an Azure server and are called from the html, so the local files are fully operational.

The local respository is created using GitHub Desktop.

#### 9.1.1 Installing GitHub Desktop

GitHub Desktop can be accessed from http://desktop.github.com

1. Dowload the version for your local machine

2. Run the installation program

3. Run the program and sign-in to your GitHub account (to create a GitHub account go to http://www.github.com/join)

4.  Choose FILE then CLONE REPOSITORY

5.  Enter the URL https://github.com/etiennedevaux/warksar

6.  The repository will then be downloaded to your local machine in the directory shown in the CLONE REPOSITORY dialogue

7.  File can be edited using your preferred editor, in my case I have used Visual Studio Code, but any common editor will work.

8.  See the documentation at https://docs.github.com/en/desktop

### 9.2 Running the Code

1.  By default on a PC the repository will be created at c:\GitHub\warksar, other directories can be chosen and the directory structure will be different on other operating systems 

2.  Navigate to the repository directory  and run the file index.html using the browser of your choice

3.  CSS, Javascript and site images are accessed by relative paths and are stored within the assets folder.  Some images are drawn from third-party locations.  

### 9.3 Editing the Code

1.  The main html file index.html is stored on the root folder, which is at c:\GitHub\warksar if using GitHub Desktop on a PC with the default folder setttings.

2.  The index.html file can be edited with any text editor, including Notepad.exe on a PC.  HTML editing is more efficient with a specialist editor.  There are many available, such as [Visual Studio Code](https://code.visualstudio.com/) or [Brackets](http://brackets.io/).

3.  The README.md file is also stored in the root and can be edited with the same set of tools.  

4.  The README.md file is written using the Markdown language, focused on GitHub deployment.

5.  Visual Studio Code includes a preview for the Markdown Language, although this is not identical to the GitHub display format.  Significant formating should be verified on GitHub before making extensive use in the source file.

### 9.4 Commits

Frequent commits have been made, all are labelled with at least a summary.  Most major commits also have a description.

Commits are made both to update code, creating stable and re-usable version, and to test that code working successfully as a local html file will work in the same way when viewed from the GitHub pages server.

All major functional areas are committed once completed and tested.

### 9.5 Push to Origin

Frequent pushes to origin from GitHub desktop are important, as this ensures:

1.  That committed code is stored in more than one place, ie on the desktop and in the cloud
2.  That committed code is available to viewers, reviewers and collaborators using GitHub
3.  If future issues occur then an audit trail back to a stable and working version of individual functions is available

### 9.6 GitHub Branches
Once tested the code is deployed on GitHub, using Github Desktop.  The code can be deployed to various branches to allow for testing and staging of changes and additions, whilst maintaining the integrity of the core.

### 9.7 Github Main Branch

The deployment goal at this stage is to be available for assessment on the Github platform.  Once tested locally it can then be deployed to a branch on GitHub, and when tested in that environment merged back into the main branch and left unchanged for assessment.

Currently the latest version is on the Main branch.

### 9.8 Live Deployment

#### 9.8.1 GitHub Pages

The goal for this round of development is to make the site available for

1.  Assessment Purposes - so that the Code Institute can assess a stable and complete version.
2.  Warwickshire Search and Rescue Leadership - so that the team can see a complete version, and decide on whether to deploy or do another round of development prior to deployment.

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

#### 9.8.2 Future Platforms

Ultimately the site will, once approved by Warwickshire Search and Resuce, be deployed to a different server.  To make this deployment as simple as possible the site has been designed to for easy copying and using relative file paths to assets such as CSS, images and Javascript.

To deploy to different server

1.  It is assumed that a server is available, with a known domain and a root directory configured to serve an index.html file via the hypertext transfer protocol (http)
2.  Copy the index.html file to the server root
3.  Copy the assets folder and all of its sub-directories (css, images, js, audio and video) to the server root
4.  Allow time for the uploads to be fully completed and for the target server to process those files, refer to documentation on the target server for precise estimates, but a few minutes is normally sufficient
5.  Enter the domain (e.g. https://etiennedevaux.github.io/warksar) into your browser, the index.html file should automatically load and should include the linked content in the assets subfolder.
6. Folow the test procedures set out in section 10 of this document
7. Test the submissions from the Modal forms on the Join Us (button labelled Sign-UP with Warwickshire Search and Rescue) and Donate (button labelled Banking Details) pages
8. Test the above on a Desktop machine, a Tablet and a Mobile phone.

## 10 Testing and Quality Assurance

### 10.1 Systematic Testing
Systematic testing involves checking each menu option from left to right, including drop-down options.  The left to right pattern helps to reduce the risk of options being overlooked.

For each option the page is then checked from top to bottom.  Key checks include, but are not limited to, formating, spelling, links, colouring and shading.

For layout and look and feel consistency, usability and aesthetics are considered.

See 10.6 for examples of test reports

### 10.2 Browser Testing
The site needs to be systematically checked against a range of common browsers.  These include, but are not limited to, Google Chrome, Firefox, Microsoft Edge, Safari and Internet Explorer.

Errors corrected include, not use of auto-fit in css and careful use of flex display options.

### 10.3 Device Testing
Ideally the site would be checked on the full range of devices and operating systems.  For practical reasons in the context of a learning project it may not be possible to test against all options.

The web developer tools allow testing against common devices, particularly mobile devices.

The site has been developed on a Windows 10 Platform with Chrome.

### 10.4 End User Testing

In this case there is a client organisation, so there will be extensive end user testing from a range of stakeholders, focusing on a range of personae.

There will also be a range of end users asked to review and comment on the site.  Beyond the context of a learning project this would need to be more extensive, more formal and more structured.

### 10.5 Scenario Testing

There are four key user experience scenarios against which the site will be tested, a user seeking further information, a user wishing to get in touch with the organisation, a user wishing to join the organisation and a user wishing to donate to the organisation.  

### 10.6 Responsive Design Testing

The site is based on the Bootstrap breakpoints, testing has been conducted against each of these.  The following test record shows the logical transition from 4k desktop screens to small mobile devices, that may be in portrait or landscape orientation.

#### 10.6.1 Extra Extra Large (XXL) >= 1400px

>**Navigation Bar** - OK
>
>**Home Page** - OK
>
>**What We Do Page** - OK
>
>**Our History** - OK
>
>**Team Carousel**  
>Adjust width for first item.
>
>**Join Us** - OK
>
>**Gallery** - OK  
>4 columns
>
>**Contact** - OK  
>4 Bootstrap Cards Across
>
>**Donate** - OK  
>3 Bootstrap Cards Across

#### 10.6.2 Extra Large xl 1200px - 1400px

>**Home Page**  
>Remove min-width and min-height for CTA-text frame
>Reduce size of central logo
>Reduce font size of CTA text
>
>**What We Do Page** - OK
>
>**Team Carousel** - OK
>
>**Join Us** - OK
>
>**Gallery** - OK  
>3 columns
>
>**Contact** - OK    
>4 Bootstrap Cards Across
>
>**Donate** - OK  
>3 Bootstrap Cards Across

#### 10.6.3 Large lg 992px - 1200px

>**Navigation Bar** - OK
>
>**Home Page**  
>Further reduce size of central logo  
>Further reduce font size of CTA text
>
>**What We Do Page** - OK
>
>**Team Carousel** - OK
>
>**Join Us**  
>Reduce font sizes
>
>**Gallery** - OK  
>3 columns
>
>**Contact** - OK  
>3 Bootstrap Cards Across  
>1 on next row, all centred
>
>**Donate** - OK  
>**3 Bootstrap Cards Across

#### 10.6.4 Medium md 768px to 992px

>**Navigation Bar** - OK  
>
>**Home Page**  
>Hide central logo  
>
>**What We Do Page**  
>Add element ids so that individual elements can be targeted, and Bootstrap customised, without affecting other parts of the site  
>Use Bootstrap set images to go vertically above text
>
>**Team Carousel** - OK
>
>**Join Us**  
>Align image title and text vertically using Bootstrap
>
>**Gallery** - OK  
>3 columns
>
>**Contact** - OK  
>3 Bootstrap Cards Across  
>1 on next row, all centred
>
>**Donate** - OK  
>3 Bootstrap Cards Across

#### 10.6.5 Small 576px to 768px

>**Navigation Bar**  
>Menu background being transparent makes text difficult to read with burger menu.  
>Set background to green, with padding and rounded corners
>
>**Home Page**  
>Move buttons below central main text
>Re-align buttons for horizontal display
>
>**Team Carousel** - OK
>
>**Join Us**  
>Hide image using Bootstrap
>
>**Gallery** - OK  
>3 columns
>
>**Contact** - OK  
>2 Bootstrap Cards Across  
>2 on next row, all centred
>
>**Donate** - OK  
>2 Bootstrap Cards Across  
>1 on next row, all centred

#### 10.6.6 Extra Small 0px to 576px

>**Navigation Bar**  
>Menu background being transparent makes text difficult to read with burger menu.  Set background to green, with padding and rounded corners
>
>**Home Page**  
>Move buttons below central main text  
>Re-align buttons for horizontal display
>
>**Team Carousel** - OK
>
>**Join Us**
>Hide image using Bootstrap
>
>**Gallery** - OK  
>3 columns
>
>**Contact** - OK  
>2 Bootstrap Cards Across  
>2 on next row, all centred
>
>**Donate** - OK  
>2 Bootstrap Cards Across  
>1 on next row, all centred

#### 10.6.7 Landscape Mobile
>**Footer Bar**  
>Set to disappear when height is below 400px.
>
### 10.7 Chrome Lighthouse Site Report

#### 10.7.1 Chrome Lighthouse Reports
>[New Warwickshire Search and Rescue - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/new_warksar_desktop.png)  
>Performance **90%** Accessibility **98%** Best Practices **93%** Search Engine Optimisation **90%**  
>
>[New Warwickshire Search and Rescue - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/new_warksar_mobile.png)  
>Performance **72%** Accessibility **98%** Best Practices **86%** Search Engine Optimisation **92%**  

Overall these levels seem OK, all are highlighted as Green for the Desktop and for the Mobile Performance and Best Practices are in Amber.

A number of best practices issues have been addressed, the outstanding ones relate to Bootstrap 4.1.3 and the other to JQuery 3.3.1. These issues will be addressed, but as they are dependent on external libraries will be addressed during the next development cycle.

The performance tests will, inevitably, produce variable results, but still give good indicators if there are substantial problems.

#### 10.7.2 Chrome Lighthouse Benchmark Reports

It is important to put the test results for this site into context by doing benchmark comparisons with some relevant established sites.

##### 10.7.2.1 Chrome Lighthouse Report for existing [Warwickshire Search and Rescue](http://www.warksar.org.uk/) Site
>[Original Warwickshire Search and Rescue - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/original_warksar_desktop.png)  
>Performance **69%** Accessibility **77%** Best Practices **71%** Search Engine Optimisation **83%**  
>
>[Original Warwickshire Search and Rescue - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/original_warksar_mobile.png)  
>Performance **39%** Accessibility **83%** Best Practices **64%** Search Engine Optimisation **86%**  

One of the most important metrics is to show improvements from the existing website. The new version shows considerable improvements in all areas, ranging for 6% to 33%.

##### 10.7.2.1 Chrome Lighthouse Report for the [BBC](https://www.bbc.co.uk/)
>[BBC - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/bbc_desktop.png)  
>Performance **90%** Accessibility **100%** Best Practices **93%** Search Engine Optimisation **92%**  
>
>[BBC - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/bbc_mobile.png)  
>Performance **84%** Accessibility **100%** Best Practices **93%** Search Engine Optimisation **93%**  

The BBC was chosen as a benchmark as they represent the Gold Standard of web design.  The site was better in most areas, but the new Warwickshire Search and Rescue site compares well.  The BBCs accessibility of 100% is particularly impressive and would be an aspiration for future developments.

##### 10.7.2.2 Chrome Lighthouse Report for the public [Code Institute](https://codeinstitute.net/) site.
>[Code Institute - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/codeinstitute_desktop.png)  
>Performance **80%** Accessibility **88%** Best Practices **79%** Search Engine Optimisation **92%**  
>
>[Code Institute - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/codeinstitute_mobile.png)  
>Performance **34%** Accessibility **88%** Best Practices **71%** Search Engine Optimisation **93%**  

The Code Institute is an obvious comparison to draw. The new Warwickshire Search and Rescue site compares well, and is generally slightly better in performance and accessibility.

##### 10.7.2.3 Chrome Lighthouse Report for [Oxfordshire Search and Rescue](https://www.lowlandrescueoxfordshire.org.uk/)
>[Oxfordshire Search and Rescue - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/oxsar_desktop.png)  
>Performance **82%** Accessibility **93%** Best Practices **93%** Search Engine Optimisation **92%**  
>
>[Oxfordshire Search and Rescue - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/oxsar_mobile.png)  
>Performance **58%** Accessibility **93%** Best Practices **93%** Search Engine Optimisation **87%**  

The Oxfordshire Search and Rescue website is seen as an example of good practice, and a realistic standard that can, and should, be achieved.  The new Warwickshire Search and Rescue site comes to about the same overall standard.  Performance and accessibilty appear slightly better that the Oxfordshire site, but other aspects of the Oxfordshire site are slightly stronger.

##### 10.7.2.4 Chrome Lighthouse Report for the [National Trust](https://www.nationaltrust.org.uk/)
[National Trust - Desktop](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/nationaltrust_desktop.png)  
Performance **84%** Accessibility **79%** Best Practices **71%** Search Engine Optimisation **100%**  

[National Trust - Mobile](https://etiennedevaux.github.io/warksar/projectdocuments/lighthouse/nationaltrust_mobile.png)  
Performance **37%** Accessibility **79%** Best Practices **79%** Search Engine Optimisation **100%**  

The National Trust is a useful benchmark as it is a large, non-profit organisation.  The overall scores on accessibility and best practices are lower than for the new Warwickshire Search and Rescue site.  The search engine optimisation is, however, very strong and would be an aspiration for future developments.

### 10.8 W3C HTML Validation Report
The report was the initial report for the index.html page (which includes all html pages as Javascript is used to hide and show page components).

The report also shows the actions taken to obtain an error free report.

A check will now be run before each commit and any errors adressed at that stage, or soon after.

*NB: src=  urls have been modified and other parts of the error message removed to prevent images from cluttering the README file when viewed online and unintended formating.*

**Report 001**
>**1**	Error: No space between attributes.  
>**Issue**  
>At line 16, column 31  
>ext/javascript"src="https://cd  
>**Actions**  
>Space added
>
>**2**	Warning: The type attribute is unnecessary for JavaScript resources.  
>**Issue**  
>From line 16, column 1; to line 16, column 97
></script>?<script type="text/javascript"src=""https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js></scri  
>**Actions**  
>Type attribute removed
>
>**3**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.
>**Issue**  
>From line 28, column 1; to line 28, column 51
>logoleft'>?<img class='logoleft' src=''assets/images/logo.png>?</div
>**Actions**  
>Add ALT tag
>
>**4**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 73, column 1; to line 73, column 34  
>cta-img">?<img src=""assets/images/logo.png">?</div  
>**Actions**  
>Add ALT tag
>
>**5**	Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.  
>**Issue**  
>From line 69, column 1; to line 69, column 43  
>d='Home'>?<section id='wsr-home' class='wsr-content'>?<!--   
>**Actions**  
>Add section heading, hide if appropriate
>
>**6**	Error: Duplicate ID WhatWeDo.  
>**Issue**  
>From line 98, column 1; to line 98, column 43  
>ntainer"><section id='WhatWeDo'class='wsr-content'><div    
>**Actions**  
>Change ID to avoid duplication
>
>**7**	Warning: The first occurrence of ID WhatWeDo was here.  
>**Issue**  
>From line 93, column 1; to line 93, column 64  
>div style=display: none; class='MenuComponent' id='WhatWeDo'><head  
>**Actions**  
>Change ID to avoid duplication
>
>**8**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 108, column 1; to line 108, column 116  
>ol-lg-4">?<img id="alsar-logo" src='' class="wsr-content-img">?</div  
>**Actions**  
>Add ALT tag
>
>**9**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 118, column 1; to line 118, column 67  
>ol-lg-4">?<img src="" class="wsr-content-img">?</div  
>**Actions**  
>Add ALT tag
>
>**10**	Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.  
>**Issue**
>From line 98, column 1; to line 98, column 43
>ntainer">?<section id='WhatWeDo' class='wsr-content'>?<div   
>**Actions**  
>Add heading, hide if appropriate
>
>**11**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 282, column 1; to line 282, column 89
>m-block">?<img id="imgwarksar030-02" src="" class="wsr-content-img">?</div  
>**Actions**  
>Add ALT tag
>
>**12**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 297, column 1; to line 297, column 89  
>m-block">?<img id="imgwarksar021-02" src="" class="wsr-content-img">?</div  
>**Actions**  
>Add ALT tag  
>
>**13**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 312, column 1; to line 312, column 89  
>m-block">?<img id="imgwarksar028-02" src="" class="wsr-content-img">?</div
>**Actions**  
>Add ALT tag
>
>**14**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 327, column 1; to line 327, column 89  
>m-block">img id="imgwarksar011-02" src="" class="wsr-content-img"></div  
>**Actions**  
>Add ALT tag
>
>**15**	Error: An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.  
>**Issue**  
>From line 342, column 1; to line 342, column 100  
>img id="imgwarksar027-searchmanager" src="assets/images/imgwarksar027.jpg" class="wsr-content-img">?</div  
>**Actions**  
>Add ALT tag
>
>**16**	Error: Bad value mailto: support@warksar.org.uk for attribute href on element a: Illegal character in scheme data: space is not allowed.  
>**Issue**  
>From line 360, column 1; to line 360, column 78   
>a class="btn btn-primary wsr-text-btn" href=mailto: support@warksar.org.uk">Contac  
>**Actions**   
>Remove space
>
>**17**	Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.  
>**Issue**  
>From line 272, column 1; to line 272, column 47
>ntainer">?<section id='warksarroles' class='wsr-content'>?<div 
>
>**Actions**  
>Add heading, hide if appropriate  
>
>**18**	Error: The frameborder attribute on the iframe element is obsolete. Use CSS instead.  
>**Issue**  
>From line 375, column 1; to line 375, column 211  
>her"></a>?<iframe width="1280" height="720" src="https://www.youtube.com/embed/qDnTAo1rHks" frameborder="0" al�rometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></ifra  
>**Actions**  
>Remove frameborder and use CSS  
>
>**19**	Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.   
>**Issue**  
>From line 371, column 1; to line 371, column 20  
>/header>?<section id=''photo'  
>**Actions**  
>Add heading, hide if appropriate
>
>**20**	Error: Bad value for attribute id on element div: An ID must not be the empty string.  
>**Issue**  
>From line 441, column 1; to line 441, column 46  
>ation -->?<div id="" class="card" style="width: 18rem;"? <im  
>**Actions**  
>Put in unique, non-null, ID  
>
>**21**	Error: Duplicate ID  
>**Issue**  
>From line 442 column3 toline 442  
>img id=""src=class="card-img-top"  
>**Actions**  
>Put in unique, non-null, ID
>
>**22**	Warning: The first occurrence of ID
>**Issue**  
>From line 441, column 1; to line 441  
>ation --> div id="" class="card"  
>**Actions**  
>Put in unique, non-null, ID  
>
>**23**	Error: Bad value for attribute id on element img: An ID must not be the empty string.  
>**Issue**  
>From line 442, column 3; to line 442, column 82  
>8rem;">? <img id="" src= class="card-img-top" alt="...">? <di  
>**Actions**  
>Put in unique, non-null, ID
>
>**24**	Error: Duplicate ID  
>**Issue**  
>From line 455, column 1; to line 455, column 46  ation -->?div id="" class="card" style="width: 18rem;"? <im  
>**Actions**
>Put in unique, non-null, ID
>
>**25**	Warning: The first occurrence of ID was here.  
>**Issue**  
>From line 441, column 1; to line 441, column 46
>ation -->?div id="" class="card" style="width: 18rem;"? <im  
>**Actions**    
>Put in unique, non-null, ID
>
>**26**	Error: Bad value for attribute id on element div: An ID must not be the empty string.  
>**Issue**  
>From line 455, column 1; to line 455, column 46  
>ation -->?div id="" class="card" style="width: 18rem;"? <im  
>**Actions**  
>Put in unique, non-null, ID
>
>**27**	Error: End tag div seen, but there were open elements.  
>**Issue**  
>From line 507, column 1; to line 507, column 6  
>ize="50">?/div?   
>**Actions**  
>Re-arrange html to avoid crossing elements
>
>**28**	Error: Unclosed element form.  
>**Issue**  
>From line 498, column 1; to line 498, column 131  
>transfer?form id="query-form" class="signup-form" method="POST" action="https://devauxphp.azurewebsites.net/warksar_log.php" target="null"   
>**Actions**  
>Form and div are both closed, but cross.  Adjust html to avoid
>
>**29**	Error: Attribute form_id not allowed on element input at this point.
>**Issue**  
>From line 510, column 9; to line 510, column 135  
>? input form_id="query_form" id="donationmodal-button" type="submit" class="btn btn-primary" onclick="formSubmit('query-form')"?   
>**Actions**  
>Remove attribute
>
>**30**	Error: Stray end tag form.  
>**Issue**
>From line 512, column 1; to line 512, column 7  > <  
>**Actions**
>Form and div are both closed, but cross, this makes the tag appear stray.  Adjust html to avoid
>
>**31**	Error: The value of the for attribute of the label element must be the ID of a non-hidden form control.  
>**Issue**  
>From line 503, column 1; to line 503, column 19  
>/iframe>??label for="fname"   
>**Actions**  
>Adjust for attribute  
>
>Full Document checking completed.
>Used the HTML parser.
>Total execution time 127 milliseconds.
>
>About this checker � Report an issue � Version: 21.2.17

### 10.9 W3C CSS Validator results for warwickshiresearchandrescue.css 
(CSS level 3 + SVG)
Sorry! We found the following errors (13)
URI : warwickshiresearchandrescue.css

>**6**	:root  
>**Error**  
>Parse Error %  
>**Actions**  
>Line is now redundanct, removed.
>
>**241**	.Content-Container  
>**Error**  
>Value Error : border collapse is not a color value : collapse  
>**Actions**  
>Redundant line, removed
>
>**316**	.wsr-content-text-fc  
>**Error**  
>Value Error : font-weight 1000 is not a font-weight value : 1000  
>**Actions**  
>Set to max value, 900  
>
>**425**	.wsr-cta-actions  
>**Error**  
>Value Error : font-weight 1000 is not a font-weight value : 1000  
>**Actions**  
>Set to max value, 900
>
>**583**	#imgwarksar029-01  
>**Error**     
>Property max-wdith doesn't exist. The closest matching property name is max-width : 300px  
>**Actions**  
>Remove section as the img is no longer in use
>
>**622**	#imgitem005  
>**Error**  
>is an incorrect operator : cover / contain / px  
>**Actions**  
>Remove section as the img is no longer in use
>
>**630**	#imgitem010	  
>**Error**  
>is an incorrect operator : cover / contain / px  
>**Actions**  
>Remove section as the img is no longer in use  
>
>**638**	#imgitem006	  
>**Error**  
>is an incorrect operator : cover / contain / px  
>**Actions**  
>Remove section as the img is no longer in use  
>
>**647**	#btn_donateCC_LG-01  
>**Error**  
>Property image-fit doesn't exist : contain  
>**Actions**  
>Corrected to object-fit  
>
>**690**	#img-carousel-5  
>**Error**  
>Property object-align doesn't exist : center center  
>**Actions**  
>Correct to object-position
>
>**753**	.wsr-carousel-caption h5  
>**Error**  
>Property backdrop-filter doesn't exist : blur(10px)  
>**Actions**  
>Vaidated that the property works with Chrome.  For other browsers it degrades gracefully.  Decision to leave in place  
>
>**761**	.wsr-carousel-indicator  
>**Error**  
>Value Error : bottom revert is not a bottom value : revert  
>**Actions**  
>Change to top: 100px;  
>
>**785**	.wsr-carousel-caption p  
>**Error**  
>Property backdrop-filter doesn't exist : blur(10px)  
>**Actions**  
>Vaidated that the property works with Chrome.  For other browsers it degrades gracefully.  Decision to leave in place
>
>**Warnings**  
>Warnings (6)  
>URI : warwickshiresearchandrescue.css  
>7		--cssfileversion is an unknown vendor extension  
>8		--lightgrey is an unknown vendor extension  
>9		--darkgrey is an unknown vendor extension  
>10		--bgroundshade is an unknown vendor extension  
>**Actions**  
>All warnings refer to variables that have been created to enable global management of the colurs of certain features so that they remain consistent across the site.

## 11 Credits

The text content, images, audio and video is provided courtesy of [Warwickshire Search and Rescue](http://www.warksar.org.uk) 

A number of external libraries and services are used, listed in 

Code blocks that are taken, and often adapted, from third-parties are individually attributed.

Third party sources and services are

[The Code Institute](https://codeinstitute.net/)  
[Bootstrap](https://getbootstrap.com/)  
[Google Fonts](https://fonts.google.com/)  
[FontAwesome](https://fontawesome.com/)  
[World Wide Web Consortium](https://www.w3.org/)  
[W3schools](https://www.w3schools.com/)  
[Stack Overflow](https://stackoverflow.com/)  
[EMailJS](https://www.emailjs.com/)  
[GitHub](https://github.com/)  
[Azure](https://azure.microsoft.com/)  




# Key Issues, Errors and Bug Fixes

Altitue Angel API not working

Switch to popup windows


Multiple popup windows

In Javascript routine test to see if the popup is already open, if so close it and open a new window

Google Map not refreshing

The Google map goes blank when the map is re-written, the simplest solution to this is to create an EventListener from wihtin the initialize function, so that it can refer to the map object without needing to crowd the global variable space, so that when the re-center map button is clicked the map recenters to the co-ordinates currently in the lat and long boxes


# 1 Strategy

Cultural fit?

Relevance?

Intuitive?

Appropriate technology?

B2B vs B2C?


## 1.1 Concept

Create a site that calls on the Google Maps API, the GB postcode API and the Alititude Angel Drone Safe API and/or the Google Places API (or similar) to allow users to plan *'Open'* category drone flights in accordance with the new CAA rules introduced in January 2021.

## 1.2 External User Goals

For leisure users the drone rules are complex, and require extensive reading to understand and interpret.  This leads to most leisure drone users taking a *'common-sense'* approach, which can lead to flight issues and potentially serious problems including fatalities.

The site will help those users with flight planning activities, guide them in what they need to consider and will, where necessary direct them to third-party resources and authorities who can give them further advice, guidance and permissions.

The site will provide the user with a flight plan summary, which may also be emailed to them.

## 1.3 Site Owner Goals

The primary purpose of the site is to highlight the knowledge and expertise of the site owner, with particular reference to the flight planning and execution rules introduced to the UK in January 2021.

The secondary purpose is for leisure drone pilots to understand what they can, and can not do, and where they might need support from a pilot with higher levels of knowledge, certification and experience.

The third purpose is to create trusted relationship, so that when a user does require professional support they feel that the site owner is a trusted source for that support.

This site will help me, as a Commercial Drone Pilot, with the initial task planning, giving sufficient information to assess whether or not a requested flight can be carried out and to provide key data to feed into the formal planning and risk assessment.  

The site will NOT replace the formal commercial flight planning process, but will speed up the gathering of the data for that process.

Providing such a site will also lead leisure drone users to the Devaux Online website, showing a range of professional services related to drones, their uses and the production of aerial media.

## 1.4 Potential Features

### 1.4.1 Navigation
Consistent *'Low Click'* Navigation Bar

### 1.4.2 Footer
Footer bar with key information about the site and author

### 1.4.3 Flight Zone Mapping
Use of Altitude Angel API to provide an integrated air traffic and flight zone map.

### 1.4.4 Google Mapping
Use of Google maps API to integrate Google mapping features, in particular street and satellite view.

### 1.4.5 Flight Definition Tool
To show flight category, drone category and required competencies, allowing users to determine the flight category, the types of drone they can use and the competencies required for that drone type.

### 1.4.6 Flight Plan Document Creator
Create a simple flight plan summary - potentially printable and emailed to the user.

## 1.5 Proof of Concept

The strategy outlined above is dependent on the technical feasibility of the following items:

### 1.5.1  Javascript Objects to Provide Drone Categories, Flight Categories and Pilot Competencies Data

This has been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

### 1.5.2 Link to Google Maps API

This has also been covered in the Code Institute module Interactive Front End Development from the Diploma in Software Development.

### 1.5.3 Link to Google StreetView API

The POC file is called [googlestreetview](https://etiennedevaux.github.io/planner/projectdocuments/poccode/googlestreetview.html) and provides the latitude and longitude in the correct format for a a chosen location.  For the location used in this POC the map and the streetview show side by side.  However, if we change to [googlestreetview2](https://etiennedevaux.github.io/planner/projectdocuments/poccode/googlestreetview2.html), which is by an obscure lake in County Cavan, and arguably a more likely flight location, then we get a blank screen - which is a poor user experience.

### 1.5.4 Link to Government Postcode Checker API

The smooth operation of this site requires conversion from UK postcodes to latitude and longitude for a central point in that postcode.  

This data is feely available from the [*Open Postcode Geo*](https://www.getthedata.com/open-postcode-geo-api) freely available with appropriate [attribution](https://www.ons.gov.uk/methodology/geography/licences).

A proof of concept page has been created to ensure that the technology could return decimal latitude and longitude, suitable for use in both the Google Maps and Altitude Angel APIs, and is stored within the project space on GitHub.

The POC file is called [PostCodeLookup](https://etiennedevaux.github.io/planner/projectdocuments/poccode/PostCodeLookup.html) and provides the latitude and longitude in the correct format for a single postcode (CV31 3PE).  The code to input any postcode was not required to prove the concept, but will be within the final project.

### 1.5.5 Link to Altitude Angel Drone Flight API

The smooth operation of this site requires mapping of proposed flight locations.  On its own this is sufficient for the core strategy.  However that does still leave the users needing to cross-reference with air traffic data.  Using the Altitude Angel API an air traffic map can be integrated.  The API for this is commercial, and offers a 1 month free trial.  Altitude Angel have agreed to grant me free access for academic purposes until the end of August 2021, allowing me to incorporate it into my project.  Should problems occur then this feature may need to be deprecated. 


THe POC file is called [AltititudeAngelAPI](https://etiennedevaux.github.io/planner/projectdocuments/poccode/AltitudeAngelAPI.html) and provides a surface level air traffic map for a given latitude and longitude.

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  
**NB Requires registration and login.**

### 1.5.6 Link to Bing Maps API

Google maps is generally seen as the *Goto* mapping service.  Within the UK Bing Maps provides an additional service that Google Maps does not, that being access to the Ordnance Survey mapping for the country.  This mapping provides an outstanding level of detail, authority and familiarity for UK based navigation.

THe POC file is called [BingMapsAPI](https://etiennedevaux.github.io/planner/projectdocuments/poccode/BingMapsAPI.html) and provides a surface level air traffic map for a given latitude and longitude.


The POC file was taken from the sample source code at the [Bing Maps SDK](https://www.bing.com/api/maps/sdk/mapcontrol/isdk/)


# 2 Scope

## 2.1 Features


### 2.1.1 Proof of Concept

The proof of concept showed that the features that fall outside of the learning content of the Code Institute modules leading up to Milestone 2 aware

* The Postcode Lookup API

The postcode lookup is an open API, provided by the UK government and is therefore low risk, however the AltitudeAngel API has been provided as part of a discretionary trial license, normally one month but extended to the end of August 2021 on condition it is used for academic purposes only.  The normal cost is from GBP 500 per month.  So this part of the scope carries a small but definite risk.  Should access to the API be lost a backup link to a similar website will be included, hence slightly reducing the overall scope.

* Altitude Angel Flight Zone API

Initial tests have already shown a lack of reliability of access via the Altitude Angel API, so a different solution will be deployed using the DroneSafetyMap website, which shows the same information.  This website has built-in checks to ensure that it is not deployed in an iframe, so it will be provided as an option, opening in a new window, coming up over the main site.

* The Google Street View API

The POC testing showed that this feature works well and is reliable, but has the drawback that if the co-ordinates entered do not have a streetview panorama available it shows a blank screen, giving a poor user experience.  So this feature will be replaced with the Google Maps satellite view, which has a street view option that the user can select.

### 2.1.2 Features to Implement

#### Feature 1 - Navigation Menu

Appears at the top and remains throughout the users navigation experience.  The navigation bar provides a single point for access to all site pages.

#### Feature 2 - Footer Bar

The footer bar appears at the bottom and remains throughout.  THe footer bar provides information about the site, it author and summary technical information to aid debugging and identification of FAD (functioning as designed) user issues byt linking what the user is seeing to specific code versions of html, css and Javascript.

#### Feature 3 - Home Page

Introduces users to the concept of the site, explain what it can do to help them and what their responsibilities are.  

#### Feature 3 - Home Page

Check the users's self-certified competency level and makes them aware of other helpful resources in accordance with the level entered. 
There will be no mandatory fields so that a user can, if they wish, navigate directly to any page.

#### Feature 4 - Mapping Page

Gives user a cartographic view of their proposed flight location, this will include.  Ideally this will have 

### 2.1.3 Wireframes for Implementation

#### 2.1.3.1 Home Page 
 * Desktop
![Desktop Homepage](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/home_desktop.png)

 * Mobile  
![Phone Homepage](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/home_phone.png)

#### 2.1.3.2 Flight Location
 * Desktop
![Desktop Flight Location](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/flight_location_desktop.png)

 * Mobile  
![Phone Flight Location](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/flight_location_phone.png)

#### 2.1.3.3 Flight Parameters
 * Desktop
![Desktop Flight Parameters](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/flight_parameters_desktop.png)

 * Mobile  
![Phone Flight Parameters](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/flight_parameters_phone.png)



### 2.1.4 Features for Future Implementation

#### 2.1.4.1 Risk Assessment
 * Desktop
![Desktop Risk Assessment](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/risk_assessment_desktop.png)

 * Mobile  
![Phone Risk Assessment](https://etiennedevaux.github.io/planner/projectdocuments/wireframes/risk_assessment_phone.png)

#### 2.1.4.2 Summary Page

A summary page giving a printable version of the summary of the flight information entered would be a nice to have feature, but is not essential for the flight planning process.


### 2.1.5 Features for Consideration

It would be good to provide the flight summary page in PDF format and to email it to registered users.  At present there is no user registration process.


# 3 Structure


# 4 Skeleton


# 5 Surface

# 5.1 Look and Feel

# 5.2 Use Cases

# 5.3 User Journeys


# 6 Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. 

For each, provide its name, a link to its official site and a short sentence of why it was used.


# 7 Code Structure

Some of the code structure, particularly for the droen flight rules has been written in a sub-optimal way in terms of code length, but is designed to facilitate easy maintenance as drone flight rules are subject to change.  This values developer time over a small increase in code length.


# 8 Version Control


# 9 Deployment


# 10 Testing

## 10.1 HTML Validation

## 10.2 CSS Validation

## 10.3 Lighthouse Report

## 10.4 Systematic Testing

### 10.4.1 Navigation

### 10.4.2 Footer

### 10.4.3 Home Page

### 10.4.4 Location Page

### 10.4.5 Flight Parameters Page

The flight parameters are based on CAP 722 issues by the UK Civil Aviation Authority, a live version can be found here

For archive purposes the version on which the flight parameters were based is stored here

This table summarises the rules for Open Category UAV Flights, it is these documents that have been used to populate the contents of the page and design the business rules.

To test the business rules perform the following tests:

1.  Load the homepage

2.  From the nvaigation bar select 'Flight Parameters'

3.  The page should appear as follows:

Note that no checkboxes or radio buttons are selected at the start, the flight categories are all in amber

4.  Select on of the Drone Categories, check that as you cycle through that only one radio button can be selected at a time.

5.  Check that the items in the Flight Categories column are all crossed out when a single drone category is selected with none of the competencies being selected.

6.  Start with drone category 'C0 - No Data' 

6.1 initally all the flight categories should be crossed out.

6.2 Select, deselect and select again 'Read the Manual' - all flight categories should now be green, having been crossed out when Read the Manual is deselected

6.3 Select all the other competency in turn, and each permutatiion.  Only the Read the Manual competency should affect the flight categories displayed.

6.4 Rest the display

6.5 Start with drone category 'C0 - No Data' 

6.1 initally all the flight categories should be crossed out.

6.2 Select, deselect and select again 'Read the Manual' - all flight categories should now be green, having been crossed out when Read the Manual is deselected

6.3 Select all the other competency in turn, and each permutatiion.  Only the Read the Manual competency should affect the flight categories displayed.

6.4 Rest the display





## 10.5 Responsive Breakpoint Testing


# 11 Credits

## 11.1 External Libraries

## 11.2 Code Sources

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)

Scrolling banner Adapted from https://www.html.am/html-codes/marquees/html-scrolling-text.cfm


# 12 Code Testing Sites

## 12.1 JSHINT

Metrics
There are 35 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 149 statements in it, while the median is 4.

The most complex function has a cyclomatic complexity value of 72 while the median is 1.

Ten warnings

** The following Four Warnings Have Been Checked and Work Efficiently
68	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (paramUpdate)
75	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (paramUpdate)
92	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (paramHlight)

** The following Five Warnings Occur in Code that was Adapted from the Google Code base, all functions work efficiently and correctly
176	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
178	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
244	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
265	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
266	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

** Despite the warnings eval works effectively and efficiently in this case, to restructure the code without eval would create other complexities
605	eval can be harmful.
612	eval can be harmful.

** The variables shown below are all defined in linked code libarries
Four undefined variables
11	$
12	aa
147	Microsoft
158	Microsoft
159	Microsoft
162	Microsoft
178	google

** The Unused variables are function titles for functions called from the html part of the code
Six unused variables
10	aaMapShow
24	domLoaded
168	initialize
234	recenterMaps
689	helpVideo


## 12.2 Jigsaw CSS Validator

The CSS files produced no errors and had the following warnings

The warnings all refer to CSS variables used to simplify the CSS structure
Warnings (6)
URI : uav-flight-planner.css
2		Imported style sheets are not checked in direct input and file upload modes
3		Imported style sheets are not checked in direct input and file upload modes
7		--cssfileversion is an unknown vendor extension
8		--footergrey is an unknown vendor extension
9		--flightallowed is an unknown vendor extension
10		--flightnotallowed is an unknown vendor extension



## 12.3 HTNL Validator - https://validator.w3.org/

Initial Pass

Use the Message Filtering button below to hide/show particular messages, and to see total counts of errors and warnings.
Message Filtering
Error: The character encoding was not declared. Proceeding using windows-1252.

Error: Quote ' in attribute name. Probable cause: Matching quote missing somewhere earlier.

At line 6, column 70

charset=' UTF-8'>↩  <meta name

Warning: Attribute utf-8' is not serializable as XML 1.0.

From line 6, column 3; to line 6, column 71

Tags-->↩  <meta http-equiv='Content-Type' content='text/html; charset=' UTF-8'>↩  <me

Error: Attribute utf-8' not allowed on element meta at this point.

From line 6, column 3; to line 6, column 71

Tags-->↩  <meta http-equiv='Content-Type' content='text/html; charset=' UTF-8'>↩  <me

Attributes for element meta:
Global attributes
name — Metadata name
http-equiv — Pragma directive
content — Value of the element
charset — Character encoding declaration
Error: Bad value text/html; charset= for attribute content on element meta: The empty string is not a valid character encoding name.

From line 6, column 3; to line 6, column 71

Tags-->↩  <meta http-equiv='Content-Type' content='text/html; charset=' UTF-8'>↩  <me

Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

From line 67, column 5; to line 67, column 46

></a>↩    <section id='pln-welcome' class='pln-cta'>↩     

Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 144, column 17; to line 144, column 19

          <p>Operat

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 157, column 17; to line 157, column 19

          <p>Flyer 

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 171, column 17; to line 171, column 19

          <p>A2 CoC

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 185, column 17; to line 185, column 19

          <p>GVC</p

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 221, column 17; to line 221, column 19

          <p>C0 - T

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 236, column 17; to line 236, column 19

          <p>C0 - C

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 250, column 17; to line 250, column 19

          <p>C1 - C

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 264, column 17; to line 264, column 19

          <p>A1 - T

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 278, column 17; to line 278, column 19

          <p>C2 - L

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 292, column 17; to line 292, column 19

          <p>C2</p>

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 306, column 17; to line 306, column 19

          <p>A2 - T

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 320, column 17; to line 320, column 19

          <p>C3</p>

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: Element p not allowed as child of element label in this context. (Suppressing further errors from this subtree.)

From line 334, column 17; to line 334, column 19

          <p>C4</p>

Contexts in which element p may be used:
Where flow content is expected.
Content model for element label:
Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
Error: End tag section seen, but there were open elements.

From line 424, column 5; to line 424, column 14

s -->↩    </section>↩  </d

Error: Unclosed element div.

From line 108, column 7; to line 108, column 23

on>↩      <div class="row">↩↩    

Warning: The type attribute is unnecessary for JavaScript resources.

From line 541, column 3; to line 543, column 16

script>↩  <script type='text/javascript'↩    src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AqXZ0hvITdpn5g-2a8bbicLdCTTJgoQHACH441QxLNJDdc_Qlpl6-3BHR0_lGQpJ'↩    async defer></scri

Error: The value of the for attribute of the label element must be the ID of a non-hidden form control.

From line 458, column 15; to line 458, column 40

          <label for="pln-Postcode">Postco

Error: The aria-describedby attribute must point to an element in the same document.

From line 459, column 15; to line 460, column 45

          <input type="text" class="form-control" id="pln-postcode" aria-describedby="UK Postcode"↩                placeholder="Enter postcode">↩     

Error: The aria-describedby attribute must point to an element in the same document.

From line 459, column 15; to line 460, column 45

          <input type="text" class="form-control" id="pln-postcode" aria-describedby="UK Postcode"↩                placeholder="Enter postcode">↩     

