"use strict";

// Create a Plant function.
function Plant() {
	// Plant should have a property of height.
	this.height = null;
}

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
Plant.prototype.increaseHeight = function(num){
	// Each time the height of a tree increases by 10, the value of branch should increase by one.
	let oldHeight = this.height;
	
	// increaseHeight should increase the value of the height property by the amount passed in as an argument.
	this.height += num;
};
Plant.prototype.decreaseHeight = function(num){
	// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
	this.height -= num;
};



// Create a Tree function.
function Tree() {
	// Tree should have a property of branches.
	this.branches = null;
}

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


// Plant should be the prototype of Tree.
Tree.prototype = new Plant();

// Create a PearTree instance of Tree. 
let PearTree = new Tree();
PearTree.height = 20;
console.log("Pear Tree height", PearTree.height);

// Create an OakTree instance of Tree.
let OakTree = new Tree();
OakTree.height = 30;
console.log("Oak Tree height", OakTree.height);

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.


// Also output the current height of each tree and how many branches it has to the DOM.

// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.

// Stop growing the trees after they have grown 30 times.
