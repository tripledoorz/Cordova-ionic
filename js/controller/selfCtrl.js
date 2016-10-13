ngCtrl.controller("selfCtrl",function($scope,$ionicActionSheet) {
	$scope.changeImg = function() {
		//点击选择图片作为头像
		$ionicActionSheet.show({
      buttons: [
        { text: '拍照' },
        { text: '从手机选择' },
      ],
      titleText: '选择图片',
      cancelText: '取消',
      buttonClicked: function(index) {
      	var obj = {
      	}
       if(index==0) {
       		obj.sourceType = Camera.PictureSourceType.CAMERA;
       } else if(index==1) {
       	obj.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
       }
       navigator.camera.getPicture(succ, err, obj)
       function succ(e) {
       	alert(e);
       	$scope.$apply(function() {
       		$scope.headImg = e;
       	})
       }
       
       function err() {
       	alert('图片选择失败');
       }
       
       console.info(index);
        return true;
      }
    });
		
		
	}
	//页面点击  选择头像
	
	
})
