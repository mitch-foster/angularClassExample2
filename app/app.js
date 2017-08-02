angular.module('starwars', ['ui.router'])

angular.module('starwars').config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl:'app/views/home/homeTemplate.html',
            controller:'homeCtrl'
        })
        .state('starships', {
            url: '/starships',
            templateUrl: 'app/views/starships/starshipsTemplate.html',
            controller:'starshipsCtrl'
        })

    $urlRouterProvider.otherwise('/')
})

// templateUrl file path is relative to the index.html file