ngCtrl.controller("indexCtrl",function($scope,mall) {//首页
    $scope.name = '测试';
    $scope.obj = {
      pageCode:0,
      linenumber:5
    }
    //获取商品轮播
    if(localStorage.getItem('banners')==null) {
      mall.getBanner().then(function(e) {
        $scope.banners = e;
        localStorage.setItem('banners',JSON.stringify(e));
      });
    } else {
      var o = localStorage.getItem('banners');
      $scope.banners = JSON.parse(o);
    }
    $scope.list = [];
    $scope.loadMore = function(){
      //如果没有数据了 不加载
      //如果还有数据加载
      mall.getList($scope.obj).then(function(e) {
        if(angular.isArray(e)) {
          //e为全新数组
          for(var i= 0;i< e.length;i++) {
            $scope.list.push(e[i]);
          }
          $scope.obj.pageCode++;
        } else {
          $scope.loadLast = true;
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
      })
    }
  })