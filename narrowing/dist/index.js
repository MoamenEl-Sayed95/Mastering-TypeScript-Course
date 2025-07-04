"use strict";
// Typeof Narrowing:
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
var el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
// Truthiness Narrowing:
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};
// EQUALITY NARROWING
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));
// Instanceof Narrowing:
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
// Instanceof Narrowing:
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Woof!";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baaa!";
        default:
            // We should never make it here, if we handled all cases correctly
            //   const shouldNeverGetHere: never = animal;
            //   return shouldNeverGetHere
            var _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
var stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
