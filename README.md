# INST 377 final_project
# Evening 1: Tammy Dam, Tanishq Kaushik, Rachel Kim, Alicia Wang, and Robert York

Residential and Commercial Permits in PG County

We will be using the "Residential and Commercial Permits (July 2013 to Present)" dataset from PG county
(https://data.princegeorgescountymd.gov/Urban-Planning/Residential-and-Commercial-Permits-July-2013-to-Pr/weik-ttee). This 
provides a fulll list of residential and commericial permits that we will use to help new/prospective business owners find an
area in PG County that is best suited to start their specific business. This helps users find the least amount of competitors 
by cross referencing permit types and cities. 

# Heroku Link
https://pg-permits-final-project.herokuapp.com/index.html

# Target Browsers
Our application is built to be adaptable on browers and mobile devices. Bulma is compatible with recent versions of Chrome, Edge, Firefox, Opera, and Safari. So far, we have tested our application on Chrome using Windows, iOS, and Android. The current versions are listed:

* Chrome (Version 81.0.4044.129) on Windows 10 (Version 10.0.17763 Build 17763)
* Chrome (Version 81.0.4044.124) on iOS 13.3.1
* Chrome (Version 81.0.4044.117) on Android (Version 10.0)

# User Manual Link
https://github.com/TammyDam/final_project/blob/master/docs/user.md

# Developer Manual 

## Installation and Dependencies

### Bulma Installation
Bulma is a modern CSS framework based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

#### NPM
```sh
npm install bulma
```

**or**

#### Import
After installation, you can import the CSS file into your project using this snippet:

```sh
import 'bulma/css/bulma.css'
```

### Dependencies
The `npm` dependencies included in `package.json` are:
* babel-cli, babel-core, babel-node, babel-present-env for compiling ES6 JavaScript files

We decided to incorporate ESlint for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. 

We also incorporated SQLite as a storage format for our contact form. We used it to retrieve data written in our contact form. 


## Running The Application on Server
Open your terminal or command line and type in 'npm start' to run your server files

## Testing 
To test for permit information, we have included two ways to test for that within our web application. 

The first way is to input PG county city names in order to retrieve permit information. To do this, users must go to the website link and navigate to the 'Home' tab and type your PG county city in all CAPS into the search bar and press the 'Search' button. 
* Some sample city names to test out:
    * 'COLLEGE PARK'
    * 'HYATTSVILLE'
    * 'LAUREL'

The second way to get permit statistics is to enter a the name of a type to retrieve information pertaining to each of them specifically. To do this, users must go to the website link and navigate to the 'Home' tab and type your PG permit type in all CAPS into the search bar and press the 'Search' button. 
* Some sample permit types to test out:
    * 'DPIE EC'
    * 'FIRW'
    * 'RW'

## API
The API for our server application includes a GET, POST, and PUT endpoint. The GET endpoint receives information from the data source. The POST tells us over here on our server console what has happened and sends our response. It tells you if it succeeded or failed. The PUT endpoint 

## Known Bugs
Sqlite3 would need to be improved and a better get request for data retrieval. There is a known bug with the database GET request

## Future Development
1. Create a mobile application
2. Solve other information problems such as:
*  The effect of the 2008-2013 recession
    * Basis of different months
    * How many permits were issued
    * What types of permits were issued
* The effect of the outgoing COVID-19 pandemic from January 2020-April 2020
    * If permit sales were effected
        * Filter by city
    * What types of permits were issued
