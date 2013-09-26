function tellFortune(jobTitle, location, partner, numKids){
  var future = 'You will be a ' + jobTitle + ' in ' + location + 'married to ' +
    partner + ' ' + ' with ' + numKids + ' kids.';
      console.log(future);

}
tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// calculate age 

function calculateAge(birthYear, currentYear) {
  var age = currentYear - birthYear;
  console.log('You are either ' + age + ' or ' (age -1));
}

calculateAge(1984, 2012);
calculateAge(1988, 2012);
calculateAge(1990, 2013);