/*
First program: Write a program to get a city name from the user, and add it to an array. When the user says they want to stop, output all of the cities they entered, one per line, in the console. 
Rename the first form 'cityWhile'.
Use two while loops. 
Get as many cities from the user as they want - stop getting cities when the user says to stop. 
The user can use any case mixture in their input (eg. SAN FranciSCO)
Cities go into an array named 'cities'.  
When city input is done, use a while loop that outputs to the console each city on its' own line in all lower case.
The output must be in this format:

eg. say the user inputs "OmaHa" and "St. LOUIS"
The output would look like this:

omaha
st. louis
*/

let doneWithCities = false
let cities = []
let yesNo = ""

while (doneWithCities == false){
    yesNo = prompt("Do you have more cities? Yes or No?")
    if (yesNo == "Yes"){
      doneWithCities = false
      newCity = prompt("Enter the new city")
      cities.push(newCity)
    } else
      doneWithCities = true
}
count = 0
while (cities.length !== count){
  let name = cities[count]
  console.log(name.toLowerCase())
  count++
}

  