"use strict";

function Tree() {


}

Tree.prototype.grow = function(num){
	this.increaseHeight(num);
}

Tree.prototype.trim = function(num){
	this.decreaseHeight(num);
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

