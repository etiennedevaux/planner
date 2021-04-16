README.md

# Website Title: UAV Flight Planner

## Version Details
README Version: 0007;  
HTML Version: 0007;  
CSS Version: 0002;  
JavaScript Version: 0003;

# 1 Strategy

## 1.1 Concept

Create a site that calls on the Google Maps API, the GB postcode API and the Alititude Angel Drone Safe API and/or the Google Places API (or similar) to allow users to plan *'Open'* category drone flights in accordance with the new CAA rules introduced in January 2021.

## 1.2 External User Goals

For leisure users the drone rules are complex, and require extensive reading to understand and interpret.  This leads to most leisure drone users taking a *'common-sense'* approach, which can lead to flight issues and potentially serious problems including fatalities.

The site will help those users with flight planning activities, guide them in what they need to consider and will, where necessary direct them to third-party resources and authorities who can give them further advice, guidance and permissions.

The site will provide the user with a flight plan summary, which may also be emailed to them.

## 1.3 Site Owner Goals

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

### 1.5.3 Link to Government Postcode Checker API

The smooth operation of this site requires conversion from UK postcodes to latitude and longitude for a central point in that postcode.  

This data is feely available from the [*Open Postcode Geo*](https://www.getthedata.com/open-postcode-geo-api) freely available with appropriate [attribution](https://www.ons.gov.uk/methodology/geography/licences).

A proof of concept page has been created to ensure that the technology could return decimal latitude and longitude, suitable for use in both the Google Maps and Altitude Angel APIs, and is stored within the project space on GitHub.

THe POC file is called [PostCodeLookup](https://etiennedevaux.github.io/planner/projectdocuments/poccode/PostCodeLookup.html) and provides the latitude and longitude in the correct format for a single postcode (CV31 3PE).  The code to input any postcode was not required to prove the concept, but will be within the final project.

### 1.5.4 Link to Altitude Angel Drone Flight API

The smooth operation of this site requires mapping of proposed flight locations.  On its own this is sufficient for the core strategy.  However that does still leave the users needing to cross-reference with air traffic data.  Using the Altitude Angel API an air traffic map can be integrated.  The API for this is commercial, and offers a 1 month free trial.  Altitude Angel have agreed to grant me free access for academic purposes until the end of August 2021, allowing me to incorporate it into my project.  Should problems occur then this feature may need to be deprecated. 


THe POC file is called [AltititudeAngelAP](https://etiennedevaux.github.io/planner/projectdocuments/poccode/AltititudeAngelAPI.html) and provides a surface level air traffic map for a given latitude and longitude.

The POC file was provided by Altitude Angel and was taken from the sample source code at [https://developers.altitudeangel.com/](https://developers.altitudeangel.com/)  
**NB Requires registration and login.**

# 2 Scope

## 2.1 Features


### 2.1.1 Proof of Concept

If required a proof of concept should establish that the potential features are achievable within the resource envelope of the project.

The results of the proof of concept may alter the scope.

### 2.1.2 Features to Implement

#### Feature 1 - Navigation Menu - appears at the top and remains throughout the users navigation experience.  The navigation bar provides a single point for access to all site pages.

#### Feature 2 - Footer Bar - the footer bar appears at the bottom and remains throughout.  THe footer bar provides information about the site, it author and summary technical information to aid debugging and identification of FAD (functioning as designed) user issues byt linking what the user is seeing to specific code versions of html, css and Javascript.

#### Feature 3 - Home Page - Introduces users to the concept of the site.  Checks their self-certified competency level and makes them aware of other helpful resources. There will be no mandatory fields so that a user can, if they wish, navigate directly to any page.



#### Feature 4 - allows users X to achieve Y, by having them fill out Z

#### Feature 5 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### 2.1.3 Features for Future Implementation

### 2.1.4 Features for Consideration

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

