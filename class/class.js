var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    /**
     * creating it as private ensure, this variable is available only under this class and is not available to any other classes - including inherited ones
     */
    // private employeeName: string;
    /**
     * This ensures that, variable can be accessed only within same class and inherited class but not outside of it
     */
    // protected employeeName: string;
    // declaring a constructor, this method is called when employee class is called with a new keyword
    function employee(name) {
        this.employeeName = name;
    }
    // this method is publicly available for employee class and all the classes it inherits
    employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return employee;
}());
var emp1 = new employee('Shreyas');
console.log(emp1.employeeName);
emp1.greet();
// here boss is another class which is extending or inheriting employee class. All the methods and objects of employee class are now accessible to boss
var boss = /** @class */ (function (_super) {
    __extends(boss, _super);
    // this method is called whenever boss object is created with the new keyword
    function boss(bossName) {
        // code in line 27 is calling the code in line 17 of employee class to assign the bossName to employeeName
        return _super.call(this, bossName) || this;
    }
    // this is an own method of boss class
    boss.prototype.talkSomething = function () {
        console.log('printing random message');
    };
    return boss;
}(employee));
var b = new boss('Big Bode');
// greet function of employee class is accessible to boss object due to extends (inheritence)
b.greet();
// employeeName object of employee class is accessible to boss object due to extends (inheritence)
// this would cause an error, if employeeName is declared as private or protected
console.log(b.employeeName);
b.talkSomething();
/**
 * Access modifiers for properties or methods in the class
 *
 * public, private and protected modifiers
 */ 
