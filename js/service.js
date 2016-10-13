/**
 * Created by Administrator on 2016/9/27.
 */
angular.module('ng.service',[])
  .factory("mall",function($http,$q){
    var baseUrl = 'http://datainfo.duapp.com';
    var mall = {};
    //获取banner图数组
    mall.getBanner = function() {
      var q = $q.defer();
      //CALLBACK_JSONP
      $http.jsonp(baseUrl+'/shopdata/getBanner.php?callback=JSON_CALLBACK').then(function(e){
      console.info("返回数据",e);
        q.resolve(e.data);
      },function(e) {
        q.reject(e);
      })
      return q.promise;
    }
    /*获取商品列表*/
    mall.getList = function(obj) {
      var q = $q.defer();
      $http.jsonp(baseUrl+'/shopdata/getGoods.php?callback=JSON_CALLBACK',{
        params:obj
      }).then(function(e) {
        q.resolve(e.data);
      })
      return q.promise;
    }
    //加入或更新购物车
    mall.joinCar = function(obj) {
    	 var q = $q.defer();
      $http.get(baseUrl+'/shopdata/updatecar.php',{
        params:obj
      }).then(function(e) {
        q.resolve(e.data);
      })
      return q.promise;
    }
    
    //获取当前用户的购物车信息
    mall.getMallinCar=function(obj){
    	var q = $q.defer();
      $http.jsonp(baseUrl+'/shopdata/getCar.php?callback=JSON_CALLBACK',{
        params:obj
      }).then(function(e) {
        q.resolve(e.data);
      })
      return q.promise;
    }
    
	//获取商品
    mall.getClassList = function() {
      var q = $q.defer();
      $http.get(baseUrl+'/shopdata/getclass.php').then(function(e) {
        q.resolve(e.data);
      })
      return q.promise;
    }
    
    
    return mall;
  }).service('user',function($http,$q) {
var baseUrl = 'http://datainfo.duapp.com';
	//登录
  	this.login = function(obj) {
      var q = $q.defer();
      $http.get(baseUrl+'/shopdata/userinfo.php',{params:obj}).then(function(e) {
        q.resolve(e.data);
      })
      return q.promise;
    }
  	//注册
  });
