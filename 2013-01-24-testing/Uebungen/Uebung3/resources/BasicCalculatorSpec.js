var z1;
var z2;
var z3;
var z4;

//�bung 3.1
//Modul f�r diese Tests definieren und Variablen darin initialisieren


//Dieser Test ist schon vorgegeben. Hier muss nichts mehr ge�ndert werden
test("isNumber erfolgreich getestet", function () {
 var basicCalculator = new BasicCalculator();
 expect(4);
 ok(true == basicCalculator.isNumber(z1, z4), "Korrekte Parameter"); 
 equal(false, basicCalculator.isNumber("Test", z4), "erster Parameter Falsch");
 strictEqual(false, basicCalculator.isNumber(z1, "TEst"), "zweiter Parameter Falsch");
 equal(false, basicCalculator.isNumber("Test", null), "beide Parameter Falsch");
});
  
//�bung 3.2
//basicCalculator.addition() Test schreiben mit strictEqual



//�bung 3.3 
//basicCalculator.subtraction() Test schreiben mit ok



//�bung 3.4
//basicCalculator.multiplication() Test schreiben


//�bung 3.5 
//basicCalculator.division() Test schreiben
//hier soll auch getestet werden, ob die Funktion division eine 
//Exception wirft sobald, man versucht durch 0 zu teilen (throws)
