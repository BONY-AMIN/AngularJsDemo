app.controller('EventController', ['$scope', function ($scope) {
    $scope.snippet = '<span style="color:red">Hi There</span>';
    $scope.myHTML =
        'I am an <code>HTML</code>string with ' +
        '<a href="#">links!</a> and other <em>stuff</em>';
    $scope.boolValue = true;
   
    $scope.try = "what happen";
 
    $scope.event = {
        name: "Boot Camp",
        date: "1/1/2019",
        time: "10:30 am",
        location: {
            address: "Uttara",
            city: "Dhaka",
            province:"Uttara-1230"
        },
        imageUrl: "/file/ip10.jpg",
        sessions: [
            {
                name: "Angular",
                creator: "Amin",
                poems: "I want to make a huge experties",
                upvotecount:0
            },
            {
                name: "Learn",
                creator: "Jamin",
                poems: "I want to make a huge learn",
                 upvotecount: 0
            },
            {
                name: "Fun",
                 creator: "Kamin",
                poems: "I want to make a huge fun",
                upvotecount: 0
            }
            ]
    };

    $scope.votingup = function (session) {
        session.upvotecount++;
    };

    $scope.votingdown = function (session) {
        session.upvotecount--;
    };
}]);