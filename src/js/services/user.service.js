export default class User {
  constructor(AppConstants, $http) {
    'ngInject';

    // Add _ to variable names to denote services.
    this._AppConstants = AppConstants;
    this._$http = $http;

    // Object to store our user properties.
    this.current = null;
  }

  // Try to authenticate by registering or logging in.
  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      // On success...
      (res) => {
        // Store the user's info for easy lookuop
        this.current = res.data.user;

        return res;
      }
    );
  }

}