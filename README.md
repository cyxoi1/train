# Mobile Citizen Engagement Example
This is the source files for a three part article on creating a mobile hybrid application using Angular 2 and Ionic 2 release. The application makes a basic query call to a SOCRATA rest service to display data.
## Installation
The following assumption is that you already have nodejs installed. To install the additional tools for this starter application open your command line and type:
```
npm install - g ionic cordova
```
## Usage
Once you have the cordova and ionic command line tools installed create a starter project using the Ionic command line tool:
```
ionic start CitizenEngage tabs --v2
```

This will use a Ionic 2 sample template to build out the project in a folder called CitizenEngage.

Take the files from this repository and overlay it onto the newly created sample project. Then start up the ionic server to view the application in a desktop web browser or run through an emulator

Desktop browser view:
```
ionic server --lab
```

Android emulator. Assumes you have installed the necessary android SDK and emulator.
```
ionic emulate android
```

## Credits
Original three part article:
Part 1: Setting up the starter project. https://dzone.com/articles/build-a-citizen-engagment-app-in-ionic-2
Part 2: Adding a detail page view
https://dzone.com/articles/mobile-citizen-engagement-app-in-ionic-2-part-2
Part 3: Adding a theme and styling to the application
https://dzone.com/articles/mobile-citizen-engagement-app-in-ionic-2-part-3

## License
TODO: Write license 

