
angular.module('CustomerModule').directive('customer',function() {
  return {
    scope:
    {
      customerInfo: '=info',
	     check: '&onCheck',
	      onCustValidateDate:'&'
    },
    restrict: "E",
    compile: function compile( tElement, tAttributes ) {
      //     alert( tAttributes.log + ' (compile)'  );
           return {
               pre: function preLink( scope, element, attributes ) {
         //          alert( attributes.log + ' (pre-link)'  );
               },
               post: function postLink( scope, element, attributes ) {
          //         alert( attributes.log + ' (post-link)'  );
               }
           };
    },
//    bindToController: true,
controller: 'CustomerController',


	link: function(scope, iElement, iAttrs) {
		alert('link myCustomer ' +scope.customerInfo.firstName);

    // scope.template = iAttrs.template || customerConfig.template;
  //   scope.template =  customerConfig.template;
    },

	templateUrl: 'common/directives/customer/customer.tpl.html'
//  template: '<div ng-include="template"></div>',
//	template:'<p>Customerttt  Nombre: {{customerInfo.firstName}} Apellido: {{customerInfo.lastName}}</p>'
  };
});


//angular.module("CustomerModule")
/*
Module.run(["$templateCache", function($templateCache) {
  $templateCache.put("common/directives/customer/customer.tpl.html",
    "<div style=\"border:1px solid black\">\n" +
    "<p>Cliente : {{customerInfo.firstName}}  {{customerInfo.lastName}}</p>\n" +
    "\n" +
    "\n" +
    "<mydate dt=\"customerInfo.dateIni\" lab=\"Feche Alta:\" on-validate-date=\"custValidateDate(customerInfo.dateIni)\"></mydate>\n" +
    "<mydate dt=\"customerInfo.dateFin\" lab=\"Fecha Baja:\" on-validate-date=\"custValidateDate(customerInfo.dateFin)\"></mydate>\n" +
    "\n" +
    "\n" +
    "<!--p ng-bind=\"customerInfo.firstName\"></p-->\n" +
    "<button ng-click=\"checkInternal()\">check</button>\n" +
    "</div>\n" +
    "");
}]);
*/
