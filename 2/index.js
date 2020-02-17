var lsAnimals = [
    {name: 'Bobby', spicies: 'rabbit'},
    {name: 'Tito', spicies: 'cat'},
    {name: 'Ryu', spicies: 'dog'},
    {name: 'Niko', spicies: 'fish'}
]

var bIsDog = function(animal){
    return animal.spicies === 'dog'
}

var lsDogs = lsAnimals.filter(bIsDog) //filter accepts true or false value

// var lsDogs = []
// for(var i = 0; i < lsAnimals.length; i++){
//     if(lsAnimals[i].spicies === 'dog')
//     lsDogs.push(lsAnimals[i])
// }


// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }
