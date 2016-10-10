app.controller("annees_ctrl",function($scope) {
  $scope.tableaux = [];

  var remplir_tableaux = function(){
    for (i = 0 ; i < 9; i++){
      $scope.tableaux[i] = 'img/autoportraits/a00' + (i+1) + '.jpg';
      console.log("scope.tab : " + i + " , valeur : " + $scope.tableaux[i]);
    }
  };
  remplir_tableaux();
});
