app.controller("main_ctrl",function($scope)
{
  $scope.tableaux = [];

  var remplir_tableaux = function(){
    var i = 0;
    for (i;i < 9; i++){
      $scope.tableaux[i] = 'img/autoportraits/a00' + (i+1) + '.jpg';
    }
  };
  remplir_tableaux();

});
