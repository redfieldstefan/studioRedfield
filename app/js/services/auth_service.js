'use strict';

module.exports = function (app) {
  app.factory('auth', ['$http', '$base64', '$cookies', function ($http, $base64, $cookies) {
    return {

      signIn: function (user, callback) {
        //make an encoded version of username and password
        var encoded = $base64.encode(user.email + ':' + user.password);
        $http.get('/api/admin/sign-in', {headers: {'Authorization': 'Basic ' + encoded}}).then(function(res) {
          if(res.data.success) {
            console.log('here')
            $cookies.put('eat', res.data.token);
            callback(null);
          }
        }),
        function(res) {
          callback(res)
        };
      },

      create: function (user, callback) {
        $http.post('/api/admin/create-user', user).then(function (res) {
          $cookies.put('eat,', res.data.token);
          callback(null);
        }),
        function (res) {
          callback(res.data);
        };
      },

      logout: function () {
        console.log('Auth Service Logout Called');
        $cookies.put('eat', '');
      },

      isSignedIn: function () {
        return !!($cookies.get('eat') && $cookies.get('eat').length);
      }
    }
  }]);
};
