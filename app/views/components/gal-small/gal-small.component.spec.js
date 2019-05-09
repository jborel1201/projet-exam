'use strict';

describe('galSmall', function () {

    // charge le module avant les test
    beforeEach(module('galSmall'));

    // Test le controller
    describe('smallController', function () {
        var $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('datas/data.json')
                .respond([{ name: 'paysage1' }, { name: 'paysage2' }]);

            ctrl = $componentController('galSmall');
        }));

        it(' valeur que devrait avoir `images` avant et aprés la requète', function () {
            jasmine.addCustomEqualityTester(angular.equals);
            
            expect(ctrl.images).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.images).toEqual([{ name: 'paysage1' }, { name: 'paysage2' }]);
        });
       

    });

});