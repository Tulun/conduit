export default class User {
  constructor(AppConstants, $http) {
    'ngInject';

    // Add _ to variable names to denote services.
    this._AppConstants = AppConstants;
    this._$http = $http;

    // Object to store our user properties.
    this.current = null;
  }

}