// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The [[Prototype]] property of the newly constructed object
 * is set to the original Array prototype object, the one that
 * is the initial value of Array.prototype
 *
 * @path ch15/15.4/15.4.2/15.4.2.1/S15.4.2.1_A1.1_T2.js
 * @description Array.prototype.toString = Object.prototype.toString
 */

//CHECK#1
Array.prototype.toString = Object.prototype.toString;
var x = new Array(); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#1: Array.prototype.toString = Object.prototype.toString; var x = new Array(); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}

//CHECK#2
Array.prototype.toString = Object.prototype.toString;
var x = new Array(0,1,2); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#2: Array.prototype.toString = Object.prototype.toString; var x = new Array(0,1,2); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}


