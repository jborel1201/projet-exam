'use strict';

describe('galList', function () {

    // charge le module avant les test
    beforeEach(module('galList'));

    // Test le controller
    describe('listController', function () {
        var $httpBackend, ctrl;     
        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/data.json')
                .respond([{ name: 'paysage1' }, { name: 'paysage2' }]);

            ctrl = $componentController('galList');
        }));

        it(' valeur que devrait avoir `images` avant et aprés la requète', function () {
            jasmine.addCustomEqualityTester(angular.equals);
            
            expect(ctrl.images).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.images).toEqual([{ name: 'paysage1' }, { name: 'paysage2' }]);
        });

        it('valeur par défaut que devrait avoir `filterName` ', function() {
          expect(ctrl.filterName).toBe('date');
        });

        it('valeur par défaut que devrait avoir `reverse` ', function() {
            expect(ctrl.reverse).toBe(true);
          });

    });

});
