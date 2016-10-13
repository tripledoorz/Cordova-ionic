ngCtrl.controller("detailCtrl",function($scope,mall,$state,$stateParams,$ionicNavBarDelegate,$ionicSlideBoxDelegate,$ionicActionSheet,$ionicModal) {
  //获取对应的商品信息
  var o = {goodsID:$stateParams.id}
  mall.getList(o).then(function(e) {
    $scope.mall = e[0];
    $scope.bimgs = JSON.parse($scope.mall.imgsUrl);
    $ionicSlideBoxDelegate.update();
  })

  $ionicModal.fromTemplateUrl('bigImg.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal; //将返回的模型对象绑定到当前的$scope
  });

  $scope.share = function() {
    $ionicActionSheet.show({
      buttons: [
        { text: '分享到QQ' },
        { text: '分享到微信' },
      ],
      destructiveText: '删除',
      titleText: '分享',
      cancelText: '取消',
      buttonClicked: function(index) {
        return true;
      }
    });
  }

  $scope.bigImg = function() {
    $scope.modal.show();
  }
	
	$scope.joinCar= function(){

		if($scope.currentUser && $scope.currentUser.userID){
			//当前用户已登录 > 商品放入到购物车
			//放入购物车 商品的参数
			var obj = {
				userID:$scope.currentUser.userID,
				goodsID:o.goodsID,
				number:1 // >  隐藏的select
			}
			mall.joinCar(obj).then(function(e) {
				console.info(e);
			})
		} else  {
			$scope.loginModel.show();
		}
		
	}

});