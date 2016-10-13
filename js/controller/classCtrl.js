ngCtrl.controller('classCtrl',function($scope,$state,$ionicSideMenuDelegate,$ionicNavBarDelegate,mall) {
    //需要三个参数
    //分类
  $ionicNavBarDelegate.setTitle('商品分类');
    $scope.obj = {
      pageCode:0,
      linenumber:5,
      classID:''
    }

  //获取商品分类列表
  mall.getClassList().then(function(e) {
    $scope.classList = e;
  })
  //通过分类获取对应的信息
  $scope.changeByClass = function(obj,i) {
   /* obj.classID
    $scope.classList[i].classID*/
    //将分页信息初始化 $scope.obj.pageCode = 0;
    //分类信息的classID $scope.obj.classID = obj.classID
    //保存循环数据的变量初始化  $scope.list
    $scope.obj.pageCode = 0;
    $scope.obj.classID = obj.classID;
    $scope.list = [];
    //确保下拉加载的指令标签是显示的
    $scope.loadLast = false;
    $scope.loadMore();
  }

  //点击切换左边侧边栏
  $scope.toggleClass = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
    $scope.list=[];
    $scope.loadMore = function() {
      mall.getList($scope.obj).then(function(e) {
        if(angular.isArray(e)) {

          for(var i=0;i< e.length;i++) {
            $scope.list.push(e[i]);
          }
        } else {
          $scope.loadLast = true;
        }
        $scope.obj.pageCode++;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      })
    }
    //点击商品详情  跳转到商品详情页面
  $scope.detail = function(o) {
    //第一个参数为路由名称  第二个参数为路由参数
    $state.go('home.detail',{id: o.goodsID}); //主动跳转一个页面路由
  }
})