var factoryModule = angular.module("factoryModule", ["providerModule"]);

factoryModule.config(["ServiceLibraryProvider", function(provider) {
    provider.mode = "offline";
}]);

factoryModule.factory("customerFactory", ["ServiceLibrary", function(customerService) {
    var cusList = [];
    function getCustomers(callbackFn) {
        Array.prototype.push.apply(cusList, customerService.getItem("customers"));
        
        callbackFn(cusList);
    }
    
    function addCustomer(customer) {
        cusList.push(customer);
        
        customerService.setItem(cusList);
    }
    
    return {
        get: getCustomers,
        add : addCustomer
    };
}]);