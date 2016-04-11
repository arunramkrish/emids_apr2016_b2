var serviceModule = angular.module("serviceModule",[]);

function CustomerService() {
    this.getItem = function(name) {
        if (window.localStorage.getItem(name)) {
            return JSON.parse(window.localStorage.getItem(name));
        } return {};
    };
    
    this.setItem = function(name, value) {
        window.localStorage.setItem(name, JSON.stringify(value));
    };
}

serviceModule.service("customerService", CustomerService);

serviceModule.service("httpService", function Httpservice() {
    this.getItem = function(name) {
        return [];
    };
    
    this.setItem = function(name, value) {
        
    };
});
