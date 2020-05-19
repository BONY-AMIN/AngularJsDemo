var app = angular.module('myapp', []);
app.filter('age', function () {
    return function (age) {
        if (age > 70) {
            return 'Old ages';
        }
        if (age > 45) {
            return 'Youth Ages';
        }
        if (age > 30) {
            return 'Strong Young';
        }
    };
});