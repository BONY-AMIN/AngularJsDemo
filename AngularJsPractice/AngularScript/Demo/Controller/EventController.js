app.controller("EventController", ['$scope', function ($scope) {
    $scope.snippet = '<span style="color:red">Hi There</span>';
    $scope.myHTML =
        'I am an <code>HTML</code>string with ' +
        '<a href="#">links!</a> and other <em>stuff</em>';
    $scope.boolValue = true;
    //$scope.mystyle = {color:red};

    $scope.event = {
        name: "Angular Boot Camp",
        date: "1/1/2019",
        time: "10:30 am",
        location: {
            address: "Uttara",
            city: "Dhaka",
            province:"Uttara"
        },
        imageUrl: "/file/ip10.jpg",
        sessions: [
            {
                name: "Angular is a fun",
                creator: "Amin",
                poems: "I want to make a huge experties",
                upvotecount:0
            },
            {
                name: "Try to learn",
                creator: "Amin",
                poems: "I want to make a huge experties",
                 upvotecount: 0
            },
            {
                name: "Just do it",
                 creator: "Amin",
                poems: "I want to make a huge experties",
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