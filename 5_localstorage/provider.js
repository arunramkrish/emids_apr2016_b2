var providerModule = angular.module("providerModule",["serviceModule"]);

providerModule.provider("ServiceLibrary", function() {
   this.mode = "online";
    
    this.$get = ["customerService", "httpService", function(svc, httpSvc) {
       if (this.mode == "offline") {
           return svc;
       } else {
           return httpSvc;
       }
    }];
});