import { fifaData } from './fifa.js';
console.log(fifaData);

// {
//     "Year": 2014,
//     "Datetime": "12 Jul 2014 - 17:00",
//     "Stage": "Play-off for third place",
//     "Stadium": "Estadio Nacional",
//     "City": "Brasilia",
//     "Home Team Name": "Brazil",
//     "Home Team Goals": 0,
//     "Away Team Goals": 3,
//     "Away Team Name": "Netherlands",
//     "Win conditions": "",
//     "Attendance": 68034,
//     "Half-time Home Goals": 0,
//     "Half-time Away Goals": 2,
//     "Referee": "HAIMOUDI Djamel (ALG)",
//     "Assistant 1": "ACHIK Redouane (MAR)",
//     "Assistant 2": "ETCHIALI Abdelhak (ALG)",
//     "RoundID": 255957,
//     "MatchID": 300186502,
//     "Home Team Initials": "BRA",
//     "Away Team Initials": "NED"
//   },

//   {
//     "Year": 2014,
//     "Datetime": "13 Jul 2014 - 16:00",
//     "Stage": "Final",
//     "Stadium": "Estadio do Maracana",
//     "City": "Rio De Janeiro",
//     "Home Team Name": "Germany",
//     "Home Team Goals": 1,
//     "Away Team Goals": 0,
//     "Away Team Name": "Argentina",
//     "Win conditions": "Germany win after extra time",
//     "Attendance": 74738,
//     "Half-time Home Goals": 0,
//     "Half-time Away Goals": 0,
//     "Referee": "Nicola RIZZOLI (ITA)",
//     "Assistant 1": "Renato FAVERANI (ITA)",
//     "Assistant 2": "Andrea STEFANI (ITA)",
//     "RoundID": 255959,
//     "MatchID": 300186501,
//     "Home Team Initials": "GER",
//     "Away Team Initials": "ARG"
//   },


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
// Year = 2014 && Stage = Final && "Home Team Name = "Germany" 
(b) Away Team name for 2014 world cup final
// Year = 2014 && Stage = Final && "Away Team Name = "Germany" 
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// test
console.log(fifaData[0].Year);

// Year = 2014 && Stage = Final 
// "Year": 2014
// "Stage": "Final"

// filter out the date to just include 2014 & Stage = "Final"
const team2014 = fifaData.filter(function (item) {
    return item.Year === 2014 && item.Stage === "Final";

});

console.log(team2014);
console.log(team2014["Home Team Name"]);
console.log(team2014[0]["Home Team Name"]);
console.log(team2014[0]["Home Team Goals"]);
console.log(team2014[0]["Away Team Goals"]);
console.log(team2014[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// fifaData 

//     "Stage": "Final",
// map or filter?? 

let getFinals = fifaData.filter(function (item) {
    return item.Stage === "Final";
});

console.log(getFinals);


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

//     "Year": 2014

function getYears(data) {
    const years = [];
    data.map(function (year) {
        years.push(year["Year"]);

    });

    return years;

};


console.log(getYears(fifaData, getFinals));



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

// 2nd attempt 

function getWinners(data) {
    const winners = [];
    data.filter(function (winner) {
        if (winner["Home Team Goals"] > winner["Away Team Goals"]) {
            winners.push(winner["Home Team Name"])
        } else {
            winners.push(winner["Away Team Name"])
        }


    });

    return winners;

};


console.log(getWinners(getFinals));


/// 1st attempt 
// function getWinners(callback) {
//     const winners = getFinals.filter(function (winner) {

//     })


//      winners.push(fifaData.)          //  forEach finals game get winners 
//      console.log(getFinals);
//      }             
//                                     // return country


//     /* code here */

// };

// getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

// Parameters: 
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear(cb1, cb2) {
    let years = cb1(getFinals);
    let country = cb2(getFinals);

    return years.map((item, index) => {
        return `In ${item}, ${country[index]} won the world cup!`;
    });

};

console.log(getWinnersByYear(getYears, getWinners));



/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

//     "Home Team Initials": "GER",
//     "Away Team Initials": "ARG"

//  reduce method
// = final match wins

// finals store finals, iterate through array, conditional, if home or awy initials = home or away, then
// determine who won, if it's initials count it +1. 
// passing in initials



function getCountryWins(data, teamInitials) { 
    let winner = [];
    let sumWins = data.reduce((accumulator, win) => {
        if (win["Home Team Goals"] > win["Away Team Goals"]) {
            winner = (win["Home Team Initials"]);
        } else {
            winner = (win["Away Team Initials"]);
        }

        if (winner === teamInitials) {
            return accumulator + 1;
        }
        return accumulator;
    },0);

        // return sumWins;
        return `Team ${teamInitials} has ${sumWins} world cup wins`;
    };

console.log(getCountryWins(fifaData, "FRA"));



/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(/* code here */) {

//     /* code here */

// };

// getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
