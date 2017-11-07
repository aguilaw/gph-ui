import Ember from 'ember';

const { get, set, inject } = Ember;

export default Ember.Component.extend({
  session: inject.service(),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');
      return get(this, 'session').authenticate('authenticator:devise', email, password).catch((reason) => {
        set(this, 'errorMessage', reason.error);
      });
    }
  }
});
