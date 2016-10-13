var ngCtrl = angular.module('ng.controller',[]);
ngCtrl.controller('homeCtrl',function($scope,user,$ionicModal){
	//在一级路由上  增加弹出框 显示登录注册信息
		 $ionicModal.fromTemplateUrl('login.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
	  }).then(function(login) {
	    $scope.loginModel = login; //将返回的模型对象绑定到当前的$scope
	  });
	
	$scope.login = function(u) {
		//调用ajax 登录
		var obj = {
			status:'login',
			userID:u.name,
			password:u.pass
		}
		user.login(obj).then(function(e) {
			//根据返回的数据判断是否登录 
			$scope.currentUser = e; //$rootScope
			//如果登录  > 保存在本地缓存中  cookie ？storage
			$scope.loginModel.hide();
			
			$scope.$broadcast('loginCurrent');
			
		})
	}



})