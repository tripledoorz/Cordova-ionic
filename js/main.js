/**
 * Created by Administrator on 2016/9/27.
 */
var app = angular.module('app',['ionic','ng.controller','ng.service','ng.filter']);
app.config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function($state,$url,$ionicConfigProvider) {
	
	  $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('standard');

      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('left');

      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');

	
	
  $state.state('home',{
    url:'/home',
    controller:"homeCtrl",
    templateUrl:'template/home.html'
  }).state('home.index', {
    url: '/index',
    views: {
      "index": {
        templateUrl: 'template/index.html',
        controller: "indexCtrl"
      }
    }
  }).state('home.class',{
    url:'/class',
    views:{
      "class":{
        templateUrl:'template/class.html',
        controller:"classCtrl"
      }
    }
  }).state('home.detail',{
    url:'/detail/:id', //  :id 为占位符
    views:{
      "class":{
        templateUrl:'template/mallDetail.html',
        controller:"detailCtrl"
      }
    }
  }).state('home.car',{
  	url:'/car',
  	views:{
  		"car":{
  			templateUrl:'template/car.html',
        	controller:"carCtrl"
  		}
  	}
  }).state('home.self',{
  	url:'/self',
  	views:{
  		'self':{
  			templateUrl:'template/self.html',
        	controller:"selfCtrl"
  		}
  	}
  })
  
  
  $url.otherwise('/home');
}])
