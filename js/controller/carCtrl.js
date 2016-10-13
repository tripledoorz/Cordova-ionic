ngCtrl.controller('carCtrl',function($scope,$state,$ionicSideMenuDelegate,$ionicNavBarDelegate,mall) {
	
	//进入页面后 用户已登录
	if($scope.currentUser && $scope.currentUser.userID){
		//获取当前用户的购物车信息
		var obj = {
			userID:$scope.currentUser.userID
		}
		mall.getMallinCar(obj).then(function(e) {
			$scope.mallCar = e;
		})
	} else {

	$scope.loginModel.show();
	}
	
	//监听 进入也没 未登录弹出登录以后 》 登录的操作
	$scope.$on('loginCurrent',function(e) {
		var obj = {
			userID:$scope.currentUser.userID
		}
		mall.getMallinCar(obj).then(function(e) {
			$scope.mallCar = e;
			console.info(e);
		})
	})


})