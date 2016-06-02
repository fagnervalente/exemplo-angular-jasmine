describe('Teste myApp', function () {
    var scope,
    controller,
    q,
    defered;

    beforeEach(function () {
        module('myApp');
    });

    describe('MainCtrl', function () {
        beforeEach(inject(function ($rootScope, $controller, $q, myService) {
            q = $q;
            scope = $rootScope.$new();

            // We use the $q service to create a mock instance of defer
            deferred = $q.defer();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(myService, 'getEstados').and.returnValue(deferred.promisse);

            // Init the controller, passing our spy service instance
            controller = $controller('MainCtrl', {
                '$scope': scope,
                myService: myService
            });
        }));

        it('Title value', function () {
            expect(scope.title).not.toBeNull();
        });

        it('Teste load estados', function(){

            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve(['Minas gerais', 'São paulo']);

            // We have to call apply for this to work
            scope.$apply();

            // Since we called apply, not we can perform our assertions
            expect(scope.estados).not.toBe(undefined);
            expect(scope.estados.length).toBe(2);
        });
    });

});