var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

bird.color = "black";

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
};

var cities = [
    'Toronto', 'Ajax', 'Maple', 'Richmond Hill', 'Stouffville', 'Whitby'
];

var string1 = 'This is the longest string ever.';
var string2 = 'This is the stronges string ever.';
var string3 = " Is this the thing called mouunt everest?";
var string4 = "This is the shermon on the Mount.";

var regex = /this/;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));
