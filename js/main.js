"use strict";

let $outputEl = $("#output");

// Create a Plant function.
function Plant() {
	// Plant should have a property of height.
	this.height = null;
}

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
Plant.prototype.increaseHeight = function(num){
	// increaseHeight should increase the value of the height property by the amount passed in as an argument.
	this.height += num;
	// Each time the height of a tree increases by 10, the value of branch should increase by one.
	if (this.height >= this.nextHeightLimit){
		this.nextHeightLimit += 10;
		this.branches += 1;
	}
};

Plant.prototype.decreaseHeight = function(num){
	// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
	this.height -= num;
};



// Create a Tree function.
function Tree(origHeight) {
	// Tree should have a property of branches.
	this.branches = null;
	this.height = origHeight;
	this.nextHeightLimit = origHeight + 10;
}

// Plant should be the prototype of Tree.
Tree.prototype = new Plant();

// The Tree prototype should have two methods on it: grow and trim.
Tree.prototype.grow = function(num){
	// The grow method should accept an integer value as input.
	// The grow method should increase the height of the tree.
	this.increaseHeight(num);
};

Tree.prototype.trim = function(num){
	// The trim method should accept an integer value as input.
	// The trim method should decrease the height of the tree.
	this.decreaseHeight(num);
	// When the trim method is called, the number of branches should decrease by one.
	this.branches -= 1;
};



// Create a PearTree instance of Tree. 
let PearTree = new Tree(20); //pass the value for the starting height
PearTree.branches = 4;
console.log("Pear start height", PearTree.height);
console.log("Pear next ht limit", PearTree.nextHeightLimit);
console.log("Pear start branches", PearTree.branches);

// Create an OakTree instance of Tree.
let OakTree = new Tree(30); //pass the value for the starting height
OakTree.branches = 6;
console.log("Oak start height", OakTree.height);
console.log("Oak start branches", OakTree.branches);


let growCounter = 0;

function growTrees() {
	growCounter += 1;
	console.log("growCounter", growCounter);
	PearTree.grow(2);
	OakTree.grow(4);
	// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
	if (growCounter % 10 === 0) {
		console.log("10th grow!", growCounter);
		PearTree.trim(7);
		OakTree.trim(13);
	}

	// Also output the current height of each tree and how many branches it has to the DOM.
	$outputEl.append(`<p>grow counter: ${growCounter}`)
	$outputEl.append(`<p>Pear tree is now ${PearTree.height}ft tall and has ${PearTree.branches} branches</p>`);
	$outputEl.append(`<p>Oak tree is now ${OakTree.height}ft tall and has ${OakTree.branches} branches</p><br>`);

	// Stop growing the trees after they have grown 30 times.
	if (growCounter === 30) {
		console.log("Stop!");
		clearInterval(intervalID);
	}
}

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
let intervalID = window.setInterval(growTrees, 1000);





