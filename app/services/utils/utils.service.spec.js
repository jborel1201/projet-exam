'use strict';

describe('Phone', function() {
    var nameOk = ['test.jpeg','test.gif', 'test.png'];   
    var InputControl;

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(module('utilsService'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_InputControl_) {

    InputControl = _InputControl_;
  }));


  it('isCorrectFileType devrait laisser passer les extensions images', function() {  

    for(let i=0; i< nameOk.length;i++){
        let testFile = InputControl.isCorrectFileType(nameOk[i]);
        expect(testFile).toEqual(true);
    }     
  
  });

  it('isCorrectFileType devrait bloquer les doubles extension', function() {
    var testFile = InputControl.isCorrectFileType('doubleExt.php.jpeg');

    expect(testFile).toEqual(false);
  
  });

  it('isCorrectFileType devrait bloquer les types non images', function() {
    var testFile = InputControl.isCorrectFileType('test.json');

    expect(testFile).toEqual(false);
  
  });

  it('isValidCom devrait valider une chaine de caractère', function() {
    var testCom = InputControl.isValidCom('ma chaine de car 1236 - ');

    expect(testCom).toEqual(true);
  
  });

  it('isValidCom devrait bloquer les messages vides', function() {
    var testCom = InputControl.isValidCom('    ');

    expect(testCom).toEqual(false);
  
  });

});
