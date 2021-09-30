var friends = ["Ryan", "Autumn", "Zac", "Kathryn", "Ella"]
var locations = ["Beach", "Forest", "House", "City Hall", "Hawaii", "Moe's", "Redmont", "The Grocery", "Carrigan's", "Innisfree"]
var weapons = ["knife", "gun", "axe", "stick", "rabid dog", "wire", "bat", "glass", "can", "banana", "pear", "hand", "sword", "baseball", "rope", "pole", "mango", "mase", "watermelon", "kiwi"]



for (var i = 1; i <= 100; i++) {

    var h3 = document.createElement("h3");
    document.body.appendChild(h3);
    h3.textContent = ("Accusation " + i)
    h3.addEventListener("click", getAlert)
}

function getAlert() {
    var friendsArr = friends[i % friends.length]
    var locationsArr = locations[i % locations.length]
    var weaponsArr = weapons[i % weapons.length]
    function clickFunc() {
        alert("I accuse " + friendsArr + " with the " + weaponsArr + " in the " + locationsArr + "!")

    }
    return clickFunc
}
