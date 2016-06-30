"use strict";

function Plant() {
	this.height = null;
}

Plant.prototype.increaseHeight = function(num){
	this.height += num;
}
Plant.prototype.decreaseHeight = function(num){
	this.height -= num;
}

function Tree() {
	this.branches = null;
}

Tree.prototype = new Plant();

Tree.prototype.grow = function(num){
	this.increaseHeight(num);
}

Tree.prototype.trim = function(num){
	this.decreaseHeight(num);
	this.branches -= 1;
}



