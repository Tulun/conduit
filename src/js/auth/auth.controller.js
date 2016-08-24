class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm () {
    this.isSubmitted = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      // Callback for success
      (res) => {
        this.isSubmitted = false;
        console.log(res);
      },
      // Callback for failure
      (err) => {
        this.isSubmitted = false;
        this.errors = err.data.errors;
      }
    );
  }

}



export default AuthCtrl;