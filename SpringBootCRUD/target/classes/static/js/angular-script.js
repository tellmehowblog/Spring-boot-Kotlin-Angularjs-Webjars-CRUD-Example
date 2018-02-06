//Application module
var app = angular.module('myApp', []);
app.controller('productsCtrl', function($scope, $http) {
//angular code start	

//open modal	
$scope.openModal = function()
{
	$(".updateButton").hide();
	$(".addButton").show();
	$('#myModalLabel').text("Add Employee details");
	$scope.clearForm();
	$('#myModalNorm').modal();  
}
	
//read products
$scope.getAll = function(){
	
	
	$http.get("employee").then(function(response, status, header, config){
		 $scope.names = response.data;
	      
	  });
	
}  


//clear form

$scope.clearForm = function(){
    $scope.name = "";
    $scope.age = "";
    $scope.dept = "";
   
}


//create new product 
$scope.createProduct = function(){
	
	
	  
    // fields in key-value pairs
    $http.post("employee", {
            'name' : $scope.name, 
            'age' : $scope.age, 
            'dept' : $scope.dept,
        }
    ).then(function (response, status, headers, config) {
        
//        // close modal
        $('#myModalNorm').modal('hide');
//         
//        // clear modal content
        $scope.clearForm();
         
        // refresh the list
        $scope.getAll();
    });
}


//fetch data for edit
$scope.editInfo = function(id){
	
	
	
	$http.get("employee/"+id).then(function(response, status, header, config){

		$scope.id = response['data']['id'];
		$scope.name = response['data']['name'];
		$scope.age = response['data']['age'];
		$scope.dept = response['data']['dept'];
		
		$(".addButton").hide();
		$(".updateButton").show();
		$('#myModalLabel').text("Edit Employee details");
		$('#myModalNorm').modal();  
	  });
    
}

// edit data
$scope.updateProduct = function(){
	$http.put("employee",{
		'id' : $scope.id,
		'name' : $scope.name,
		'age' : $scope.age,
		'dept' : $scope.dept
	}).then(function(response, status, header, config){
		$('#myModalNorm').modal('hide');  
		$scope.getAll();
	});
}

// delete data
$scope.deleteInfo = function(id){
	
	if(confirm("Are you sure you want to delete !!!")){
	
		
		$http.delete("employee/"+id).then(function(response, status, header, config){
			// refresh the list
	        $scope.getAll();
		      
		  });
		
		
	}
	
}


//angular code end
});