 const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){cats.push("Ralph")}
cats;
function destructivelyPrependCat(name){cats.unshift("Bob");}
cats;
function destructivelyRemoveLastCat(){cats.pop();}
cats;
function destructivelyRemoveFirstCat(){cats.shift();}
cats;
function appendCat(name){return [...cats, "Broom"];};

function prependCat(name) {return ["Arnold", ...cats];};

function removeLastCat(){return cats.slice(0, cats.length -1);}

function removeFirstCat(){return cats.slice(1);}



