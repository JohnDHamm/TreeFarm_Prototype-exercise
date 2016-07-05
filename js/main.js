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
		console.log("nextHeightLimit", this.nextHeightLimit);
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
	console.log("growing!");
	this.increaseHeight(num);
};
Tree.prototype.trim = function(num){
	// The trim method should accept an integer value as input.
	// The trim method should decrease the height of the tree.
	console.log("trimming!");
	this.decreaseHeight(num);
	// When the trim method is called, the number of branches should decrease by one.
	this.branches -= 1;
};



// Create a PearTree instance of Tree. 
let PearTree = new Tree(20);
// PearTree.height = 20;
PearTree.branches = 4;
console.log("Pear start height", PearTree.height);
console.log("Pear next ht limit", PearTree.nextHeightLimit);
console.log("Pear start branches", PearTree.branches);

// Create an OakTree instance of Tree.
let OakTree = new Tree(30);
// OakTree.height = 30;
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
	// Pear tree is now 23cm tall and has 2 branches
	$outputEl.append(`<p>grow counter: ${growCounter}`)
	$outputEl.append(`<p>Pear tree is now ${PearTree.height}ft tall and has ${PearTree.branches} branches</p>`);
	console.log("Pear height:", PearTree.height);
	console.log("Pear branches", PearTree.branches);
	$outputEl.append(`<p>Oak tree is now ${OakTree.height}ft tall and has ${OakTree.branches} branches</p><br>`);
	console.log("Oak height:", OakTree.height);
	console.log("Oak branches", OakTree.branches);


	// Stop growing the trees after they have grown 30 times.
	if (growCounter === 30) {
		console.log("Stop!");
		clearInterval(intervalID);
	}
}

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
let intervalID = window.setInterval(growTrees, 1000);





