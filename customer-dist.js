angular.module('CustomerModule', ['DateModule']);


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

angular.module('CustomerModule').controller('CustomerController', function($scope) {
    //    $scope.jr.firstName="pep";
//	alert('controller myCustomer ' +$scope.customerInfo.firstName);
//$scope.dateOpt = {dateIni:'1/4/2001',dateFin:'1/6/2001'};
alert("controller:");


		$scope.checkInternal= function () {
				alert("checkInternal:");
			$scope.check();
		};

		$scope.custValidateDate= function (date) {
			alert("custValidateDate:"+date);
			$scope.onCustValidateDate({custdate:date});
		};

		this.setDate= function (mydate) {
	//		alert('setadate');
			$scope.customerInfo.dateIni = mydate;
		};

});

angular.module('CustomerModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/common/directives/customer/customer.tpl.html',
    "<div style=\"border:1px solid black\">\r" +
    "\n" +
    "<p>Cliente : {{customerInfo.firstName}}    {{customerInfo.lastName}}</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<mydate dt=\"customerInfo.dateIni\" lab=\"Fecha Ata:\" on-validate-date=\"custValidateDate(customerInfo.dateIni)\"></mydate>\r" +
    "\n" +
    "<mydate dt=\"customerInfo.dateFin\" lab=\"Fecha Baja:\" on-validate-date=\"custValidateDate(customerInfo.dateFin)\"></mydate>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--p ng-bind=\"customerInfo.firstName\"></p-->\r" +
    "\n" +
    "<button ng-click=\"checkInternal()\">check</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
