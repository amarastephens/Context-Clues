var friends = ["Ryan", "Autumn", "Zac", "Kathryn", "Ella"] 
var locations = ["Beach", "Forest", "House", "City Hall", "Hawaii", "Mexico", "Bryant Denny", "Jordan Hare", "Carrigan's", "Innisfree"]
var weapons = ["knife", "gun", "apple", "stick", "dog", "wire", "bat", "glass", "can", "banana", "pear", "hand", "sword", "baseball", "rope", "pie", "mango", "mase", "watermelon", "kiwi" ]


function loop () {
for (var i=1; i<=100; i++) {

var h3 = document.createElement("h3"); 
document.body.appendChild(h3); 
h3.textContent = ("Accusation " + i)
h3.addEventListener("click", getAlert(i)) 
}

function getAlert (i) {
    var friendsArr = friends[i % friends.length]
    var locationsArr = locations[i % locations.length]
    var weaponsArr = weapons[i % weapons.length]
function clickFunc () {
     alert("I accuse " + friendsArr + " with the " + weaponsArr + " in the " + locationsArr + "!")

}
return clickFunc
}
}
loop ()