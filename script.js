// Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function (){
    var data = JSON.parse(request.response);
    var result = data.reduce((acc,cv)=> acc + cv.population,0);
    console.log("Total population : ",result);
};

// output : Total population :  7777721563 


//  Print all the countries with a population of less than 2 lakhs using Filter function

let  request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload = function (){
    var data = JSON.parse(request2.response);  
    var res = data.filter((data) => data.population < 200000);
    var res1 = res.map((data) => data.name.common);
    console.log("countries having less than 2 lakh population :",res1)
    
};

//output :  countries having less than 2 lakh population : 
//  ['Aruba', 'Wallis and Futuna', 'Åland Islands', 'Pitcairn Islands', 'Seychelles', 'French Southern and Antarctic Lands', 'Christmas Island', 'Saint Martin', 'Heard Island and McDonald Islands', 'Antarctica', 'Greenland', 'British Indian Ocean Territory', 'Saint Lucia', 'Niue', 'Saint Barthélemy', 'Grenada', 'Isle of Man', 'Curaçao', 'Dominica', 'Faroe Islands', 'Montserrat', 'Cook Islands', 'Bermuda', 'San Marino', 'Cayman Islands', 'Cocos (Keeling) Islands', 'United States Virgin Islands', 'Norfolk Island', 'Nauru', 'Bouvet Island', 'Micronesia', 'American Samoa', 'Anguilla', 'Marshall Islands', 'Kiribati', 'Northern Mariana Islands', 'Guam', 'Gibraltar', 'Vatican City', 'Jersey', 'Tuvalu', 'Saint Helena, Ascension and Tristan da Cunha', 'Samoa', 'Guernsey', 'Tonga', 'Saint Kitts and Nevis', 'Falkland Islands', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 'Liechtenstein', 'Andorra', 'Tokelau', 'Sint Maarten', 'United States Minor Outlying Islands', 'Antigua and Barbuda', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'South Georgia', 'Caribbean Netherlands', 'Monaco', 'Svalbard and Jan Mayen']


// Print all the countries from the Asia continent /region using the Filter function


let  request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function (){
    var data = JSON.parse(request3.response);  
    var res = data.filter((data) => data.continents[0] == "Asia");
    var res1 = res.map((data) => data.name.common);
    console.log("Asia regions :",res1)
    
};

// output : 

//Asia regions : 

//['Maldives', 'Pakistan', 'Malaysia', 'Uzbekistan', 'Christmas Island', 'Singapore', 'Qatar', 'Kazakhstan', 'British Indian Ocean Territory', 'Bahrain', 'India', 'Macau', 'Syria', 'Kyrgyzstan', 'Palestine', 'Taiwan', 'South Korea', 'Iraq', 'Cambodia', 'Cocos (Keeling) Islands', 'Sri Lanka', 'Israel', 'Tajikistan', 'Azerbaijan', 'Georgia', 'China', 'Thailand', 'Indonesia', 'Turkmenistan', 'Turkey', 'Iran', 'Lebanon', 'Philippines', 'Kuwait', 'Oman', 'Afghanistan', 'Armenia', 'Bangladesh', 'Laos', 'Nepal', 'Myanmar', 'United Arab Emirates', 'Bhutan', 'Jordan', 'Vietnam', 'Brunei', 'Japan', 'Hong Kong', 'Saudi Arabia', 'North Korea', 'Mongolia', 'Yemen']


// Print the country which uses US Dollars as currency.

let  request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload = function (){
    var data = JSON.parse(request4.response);  
    var res = data.filter((data) => data?.currencies?.USD?.symbol ==  "$");
    var res1 = res.map((data) => data.name.common);
    console.log("countries using us dollar as currency :",res1)
    
};

//output :

//countries using us dollar as currency : 

// ['Ecuador', 'British Indian Ocean Territory', 'Puerto Rico', 'Timor-Leste', 'Cambodia', 'United States Virgin Islands', 'Micronesia', 'American Samoa', 'Marshall Islands', 'Bahamas', 'Northern Mariana Islands', 'Guam', 'El Salvador', 'Panama', 'United States', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 'United States Minor Outlying Islands', 'Caribbean Netherlands']


//  Print the following details name, capital, flag using forEach function

let  request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function (){
    var data = JSON.parse(request1.response);  
    data.forEach((data)=> console.log(
                  `country's name : ${data.name.common} 
    capital : ${data.capital[0]} 
    flag : ${data.flag} 
    flag url : ${data.flags.png} `));
    
};

// output given for two  country :

// country's name : Singapore 
//     capital : Singapore 
//     flag : 🇸🇬 
//     flag url : https://flagcdn.com/w320/sg.png 
// script.js:23 country's name : Suriname 
//     capital : Paramaribo 
//     flag : 🇸🇷 
//     flag url : https://flagcdn.com/w320/sr.png 