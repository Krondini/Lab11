
describe("Test add() method", function() {
 	var calc;
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

    /* 
    *  Example Test Case for Addition Operation
    */
   it("Check addition, two positive values", function() {

        expect( calc.add(1,2) ).toEqual(3);
    }); 

   it("Check addition, two negative values", function() {

        expect( calc.add(-7,-5) ).toEqual(-12);
    }); 
});

/*
* Create a new test suit with two new test cases for sub() method
*/

/*
* Create a new test suit with two new test cases for multiply() method
*/

/*
* Create a new test suit with two new test cases for divide() method
*/