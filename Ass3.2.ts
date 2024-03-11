
class Circle
{
    public Radius : number;
    public PI : number;

    public constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14
    }

    public Area() : number
    {
        let Area : number = 0;
        Area = this.PI * this.Radius  * this.Radius
        return Area;
    }
}

var obj1  = new Circle(10);
var obj2 = new Circle(20);
var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of Circle of obj1 is : "+Ret);

Ret = obj2.Area();
console.log("Area of Circle of obj2 is : "+Ret);