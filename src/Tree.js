"use strict";

function Tree() {
	this.branches = null;

}

Tree.prototype.grow = function(num){
	this.increaseHeight(num);
}

Tree.prototype.trim = function(num){
	this.decreaseHeight(num);
	this.branches -= 1;
}

function Plant() {
	this.height = null;

}

Plant.prototype = new Tree();
Plant.prototype.increaseHeight = function(num){
	this.height += num;
}
Plant.prototype.decreaseHeight = function(num){
	this.height -= num;
}

