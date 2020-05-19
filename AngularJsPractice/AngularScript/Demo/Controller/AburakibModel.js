app.controller('abcll', ['$scope', 'myService', 'myFactory', function ($scope, myService, myFactory) {

    $scope.try = "Hello Abu  Rakib";
    $scope.students = {
        name: "Rakib",
        age: 23
    };

    $scope.msg1 = "Bony Amin";
    var fruits = ['apple', 'banana', 'jack'];
    $scope.fruits = fruits;
    var emoloyee = [
        {
            name: 'Tamim',
            age: 44,
            profession: "playing"
        },
        {
            name: 'Bony',
            age: 77,
            profession: "Programming"
        },
        {
            name: 'Rokon',
            age: 47,
            profession: "Job"
        }
    ];
    var show = function () {
        $scope.emoloyee = emoloyee;
    };
    $scope.show = show;
    var hide = function () {
        $scope.emoloyee = "";
    };
    $scope.hide = hide;


    var countries = [
        {
            name: 'Bangladesh',
            cities: [{
                name: 'Dhaka'
            },
                {
                    name: 'Khulna'
                },
            {
                name: 'Rajsahi'
            }
            ]

        }, {
            name: 'India',
            cities: [{
                name:'Dilli'
            }, {
                name:'Kalkata'
                },
                {
                    name: 'Mumbai'
                }]
        }
    ];
    $scope.city = countries;
    $scope.Add = function (x, y) {
        $scope.result = myService.sum(x,y);
        $scope.result2 = myFactory.product(x,y);
    };
     
     $scope.todos = [];
    $scope.todos=todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Build an app', done: false }
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {

        angular.forEach($scope.todos, function (todo, key) {
            if (todo.done)
                console.log(key);
            $scope.todos.splice(key, 1);
        });
        //$scope.todos =filter($scope.todos, function (todo) {
        //    return !todo.done;
        //});
    };

    $scope.addTodo = function () {
        todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

}]);

app.service('myService', function () {
    this.sum = function (x, y) {
        return x + y;
    };
});
app.factory('myFactory', function () {
    var obj = {};
    obj.product = function (x, y) {
        return x * y;
    };
    return obj;
});