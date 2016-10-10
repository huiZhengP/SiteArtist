app.controller("main_ctrl",function($scope)
{

  $scope.menus = [
    {
      title: "Accueil",
      action: "#/"
    },
    {
      title: "Evénements",
      action: "#/evenements"
    },
    {
      title: "Oeuvres par thème",
      action: "#/themes"
    },
    {
      title: "Oeuvres par année",
      action: "#/annees"
    },
    {
      title: "Parcours",
      action: "#/parcours"
    },
    {
      title: "Me contacter",
      action: "#/contact"
    }
  ];

});
