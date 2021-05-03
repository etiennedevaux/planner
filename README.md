README.md

# Website Title: UAV Flight Planner

## Version Details
README Version: 0042;  
HTML Version: 0099;  
CSS Version: 0161;  
JavaScript Version: 0245;

# Errors and Bug Fixes

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

## 10.5 Responsive Breakpoint Testing

# 11 Credits

## 11.1 External Libraries

## 11.2 Code Sources

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)

