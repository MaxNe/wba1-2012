test("isNumber erfolgreich getestet", function () {
 var basicCalculator = new BasicCalculator();
 var z1 = 4;
 var z2 = 0;
 var z3 = -2;
 var z4 = 154;
 expect(4);
 ok(true == basicCalculator.isNumber(z1, z4), "Korrekte Parameter"); 
 equal(basicCalculator.isNumber("Test", z4), false, "erster Parameter Falsch");
 strictEqual(basicCalculator.isNumber(z1, "TEst"), false, "zweiter Parameter Falsch");
 equal(basicCalculator.isNumber("Test", null), false, "beide Parameter Falsch");
});
  
//�bung 3.1
//basicCalculator.addition() Test schreiben mit strictEqual
test("Addition getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 0;
var z2 = 1;
expect(2);
strictEqual(basicCalculator.addition(z1, z2), z1+z2, "Rechnung korrekt getestet");
throws(function() { basicCalculator.addition(null, z1); }, "Falsche Uebergabeparameter getestet");
});


//�bung 3.2 
//basicCalculator.subtraction() Test schreiben mit ok
test("Subtraktion getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 0;
var z2 = 1;
expect(2);
ok(z1-z2 == basicCalculator.subtraction(z1, z2), "Rechnung korrekt getestet");
throws(function() { basicCalculator.subtraction(z2, ""); }, "Falsche Uebergabeparameter getestet");
});


//�bung 3.3
//basicCalculator.multiplication() Test schreiben
test("Multiplikation getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 3;
var z2 = 5;
expect(2);
equal(basicCalculator.multiplication(z1, z2), z1*z2, "Rechnung korrekt getestet");
throws(function() { basicCalculator.multiplication(null, z1); }, "Falsche Uebergabeparameter getestet");
});

//�bung 3.4 
//basicCalculator.division() Test schreiben
//hier soll auch getestet werden, ob die Funktion division eine 
//Exception wirft sobald, man versucht durch 0 zu teilen (throws)
test("Division getestet", function () {
var basicCalculator = new BasicCalculator();
var z1 = 3;
var z2 = 5;
var z3 = 0;
expect(3);
equal(basicCalculator.division(z1, z2), z1/z2, "Rechnung korrekt getestet");
throws(function() { basicCalculator.division(null, z1); }, "Falsche Uebergabeparameter getestet");
throws(function() { basicCalculator.division(z1, z3); }, "Division durch 0 getestet!");
});