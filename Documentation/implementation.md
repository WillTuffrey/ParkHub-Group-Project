# Implementation

## Introduction
The dataset we’re using is the car parking dataset from Bristol Open Data. We were able to implement the data into a map that where it shows the different locations of car parks in Bristol. 

The most challenging part we faced was the filtering feature. We needed to make sure that the data set was aligned so that we could actually use the filtering feature. It is a very important feature because it is the main feature we wanted. 

There were a few data points that weren’t useful to have in our program because they would overcomplicate the program for the user, as well as data that not a lot of people would use, like Easting, Northing, Occupancy and Trend, just to name a few data points. 

| Render | Icon |
|--------------|-------------|
| Location of Car Parks | ![My image](./images/Car%20parking%20location.png) |
| User Location | ![My image](./images/user%20location%20pin.png) |


## Software Architecture


![My image](./images/Software%20Architecture.png)

## Bristol Open Data API


![My image](./images/Data%20API.png)


# User guide
This is the home page, which shows the user what the website is about. 
To be able to Plan or Explore the user needs to click on the menu bar and click either of them. 

![My image](./images/home%20page.png)

![My image](./images/menu%20page%20in%20home.png)

Once the user is on the Explore page, there’s a map on the website which lets the user look at the different car parks in Bristol. If the user wants to move the Plan page, the user needs to click on the menu, then press Plan.

![My image](./images/explore%20page.png)

![My image](./images/menu%20page%20in%20explore.png)

When the user is on the Plan page, there are a few features that help the user with planning where to park. On the left-hand side, the user has filters. With those filters, the user can filter from either the settings of CCTV, Operating times, Area name, Type of Car Park. Once the user has filtered out what settings they want, the map will update to show the user the Car Parks with the settings they wanted and get rid of the ones that aren’t. And with the menu, you can go back Home or to the Explore page

![My image](./images/plan%20page.png)

![My image](./images/menu%20page%20in%20plan.png)





## Project Structure
```
└── 📁ParkHub-Group-Project
    └── 📁__MACOSX
        └── 📁documentation templates
            └── 📁docs
                └── 📁images
                    ├── ._.DS_Store
                    ├── ._class1.png
                    ├── ._component.png
                    ├── ._component.png.bak
                    ├── ._context.png
                    ├── ._deployment.png
                    ├── ._deployment.png.bak
                    ├── ._mockup.png
                    ├── ._screenshot.png
                    ├── ._sequence.png
                    ├── ._use-case.png
                    ├── ._wireframe.png
                ├── ._.DS_Store
                ├── ._contribution.md
                ├── ._design.md
                ├── ._images
                ├── ._implementation.md
                ├── ._planning.md
                ├── ._requirements.md
                ├── ._testing.md
            ├── ._.DS_Store
            ├── ._docs
            ├── ._readme.md
        ├── ._documentation templates
    └── 📁Code
        └── 📁images
            ├── 3linesHorrizontal.png
            ├── 3linesVertical.png
            ├── dropdownTriangle.png
            ├── mainMenuActive.png
            ├── mainMenuPassive.png
            ├── marker_blue.png
            ├── marker_orange.png
            ├── marker_shadow.png
        ├── explore.html
        ├── feedback.html
        ├── filter.php
        ├── home.html
        ├── instructionsForNextView.txt
        ├── mainPageStyling.css
        ├── menuStyling.css
        ├── plan.html
        ├── scripts.js
        ├── useableCode.txt
    └── 📁Documentation Files
        └── 📁Documentation
            └── 📁images
                ├── .DS_Store
                ├── class1.png
                ├── component.png
                ├── component.png.bak
                ├── context.png
                ├── ContextDiagram.png
                ├── deployment.png
                ├── deployment.png.bak
                ├── Design.png
                ├── Diagram.png
                ├── mockup.png
                ├── screenshot.png
                ├── sequence.png
                ├── use-case-diagram.png
                ├── Use-case-disgram-2.png
                ├── webside-Design.png
                ├── Website-Details.png
                ├── wireframe.png
            ├── .DS_Store
            ├── contribution.md
            ├── design.md
            ├── implementation.md
            ├── planning.md
            ├── requirements.md
            ├── testing.md
        ├── .DS_Store
        ├── readme.md
    ├── .gitattributes
    └── README.md



