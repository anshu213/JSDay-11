//Map and sets.............................//.................................

let map1 = new Map();

map1.set("Name", 'Anshuman');
map1.set("Age", 20);
map1.set("contact", true);

console.log(map1);

//Map.get............................

console.log(map1.get("Name"));

//Map.has..............................
//it always gives the output in boolean form..........

console.log(map1.has("Email"));

//map1.clear.............................
//if you want to remove a particular key then use map.delete();.......................
map1.clear();
console.log(map1);


//set.add....................................//.......................................

let set1 = new Set();

set1.add("Anshuman");
set1.add(95986473);
set1.add(true);

console.log(set1);


//forof loop...........................

let sayings = new Map();

sayings.set("Dog", "woof");
sayings.set("cat", "meow");

//console.log(sayings);

for(let [ animal, sound] of sayings){
        console.log(animal + ' goes ' + sound);
}

//forof loop in set...............
let mySet = new Set();
mySet.add(1);
mySet.add(2);

for(let[key, value] of mySet.entries()){
    console.log(key + ' goes ' + value);
}
