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
