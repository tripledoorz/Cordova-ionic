/**
 * Created by Administrator on 2016/9/27.
 */
angular.module('ng.filter',[])
  .filter("bannerFilter",function(){
    return function(o) {
      var str = o.split('",')[0].split('["')[1];
      //返回一个style 对象
      var s = {
        background:"url("+str+") no-repeat",
        backgroundSize:'cover',
        height:'100%'
      }
      return s;
    }
  }).filter("bigFilter",function() {
  return function(o) {
    var style = {
      background:'url('+o+') no-repeat',
      backgroundSize:'cover',
      height:'100%'
    }
    return style;
  }
});
