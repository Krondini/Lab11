
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
describe("Test sub() method", function(){
    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });

    it("Check subtraction, two positive values", function(){
        expect( calc.sub(10, 6)).toEqual(4);
    });

    it("Check subtraction, two negative values", function(){
        expect( calc.sub(-5, -6)).toEqual(1);
    });
});
/*
* Create a new test suit with two new test cases for multiply() method
*/
describe("Test multiply() method", function(){
    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });

    it("Check multiplication, two positive values", function(){
        expect( calc.multiply(5, 6)).toEqual(30);
    });

    it("Check multiplication, one positive and one negative value", function(){
        expect( calc.multiply(-2, 6)).toEqual(-12);
    });
});
/*
* Create a new test suit with two new test cases for divide() method
*/
describe("Test divide() method", function(){
    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });

    it("Check division, two positive values", function(){
        expect( calc.divide(10, 2)).toEqual(5);
    });

    it("Check division, one positive and one negative values", function(){
        expect( calc.divide(20, -4)).toEqual(-5);
    });
});