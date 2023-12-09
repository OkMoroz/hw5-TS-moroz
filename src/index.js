"use strict";
class ShapeDimensions {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Circle extends ShapeDimensions {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends ShapeDimensions {
    constructor(name, color, length, width) {
        super(name, color);
        this.name = "Rectangle";
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    print() {
        console.log(`Formula area of ${this.name}: Area = Length * Width S = ${this.length} * ${this.width}`);
    }
}
class Square extends ShapeDimensions {
    constructor(name, color, side) {
        super(name, color);
        this.name = "Square";
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    print() {
        console.log(`Formula area of ${this.name}: Area = Side * Side S = ${this.side} * ${this.side}`);
    }
}
class Triangle extends ShapeDimensions {
    constructor(name, color, base, height) {
        super(name, color);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return (this.base * this.height) / 2;
    }
}
