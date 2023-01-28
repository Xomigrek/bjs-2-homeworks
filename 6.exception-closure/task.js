function parseCount (parse) {
    let i = Number.parseInt(parse);
    if (isNaN(i)) {
        throw new Error ("Невалидное значение")
    } else {
        return i
    }
}
function validateCount (parse) {
    try {
        return parseCount (parse);
    } catch (error) {
        return error;
    } 
}
class Triangle {
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter () {
        return  (this.a + this.b + this.c);
    }
    getArea () {
        let p = this.getPerimeter() / 2;
        return + Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
    }
}
function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch (error) {
        let triangle = {};
        triangle.getArea = function (){
            return ("Ошибка! Треугольник не существует")
        };
        triangle.getPerimeter= function (){
            return ("Ошибка! Треугольник не существует")
        };
        return triangle;
    } 
}