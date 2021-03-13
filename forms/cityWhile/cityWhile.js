
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

