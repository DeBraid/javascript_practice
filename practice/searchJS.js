/*jshint multistr:true */

var text = "Fun with Derek text Derek edit stuff and \
    Derek writes about sports and computer stuff Derek";
var myName = "Derek";
var hits = [];


for (i=0; i < text.length; i++) {
    if (text[i] === "D") {
        for (var j = i; j < i + myName.length; j++){
            hits.push(text[j]);
        }
    };
}

console.log(hits);