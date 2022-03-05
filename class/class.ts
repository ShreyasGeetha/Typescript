class employee{
  // variable that belongs to employee class and is of type string
  // declaring it public ensure, it is available across all classes even if its not inherited
  public employeeName: string;
  
  /**
   * creating it as private ensure, this variable is available only under this class and is not available to any other classes - including inherited ones
   */
  // private employeeName: string;
  
  /**
   * This ensures that, variable can be accessed only within same class and inherited class but not outside of it
   */
  // protected employeeName: string;

  // declaring a constructor, this method is called when employee class is called with a new keyword
  constructor(name: string) {
    this.employeeName = name;
  }

  // this method is publicly available for employee class and all the classes it inherits
  greet() {
    console.log(`Good Morning ${this.employeeName}`)
  }
}

let emp1 = new employee('Shreyas')
console.log(emp1.employeeName)
emp1.greet()

// here boss is another class which is extending or inheriting employee class. All the methods and objects of employee class are now accessible to boss
class boss extends employee{

  // this method is called whenever boss object is created with the new keyword
  constructor(bossName: string) {
    // code in line 27 is calling the code in line 17 of employee class to assign the bossName to employeeName
    super(bossName)
  }  

  // this is an own method of boss class
  talkSomething() {
    console.log('printing random message')
  }
}

let b = new boss('Big Bode')
// greet function of employee class is accessible to boss object due to extends (inheritence)
b.greet()
// employeeName object of employee class is accessible to boss object due to extends (inheritence)
// this would cause an error, if employeeName is declared as private or protected
console.log(b.employeeName)

b.talkSomething()

/**
 * Access modifiers for properties or methods in the class
 * 
 * public, private and protected modifiers
 */