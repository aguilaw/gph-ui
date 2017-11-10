import Ember from 'ember';

const { get, set, inject, computed } = Ember;

export default Ember.Controller.extend({
  session: inject.service(),

  errors: null,
  no_errors: computed.not('errors'),

  actions: {
    async register(user) {
      const session = get(this, 'session');

      await user.save().catch((res) => {
        set(this, 'errors', res.errors);
        return false;
      });

      if (get(this, 'no_errors')) {
        session.authenticate(
          'authenticator:devise',
          get(user, 'email'),
          get(user, 'password')
        )
        .catch((errors) => {
          set(this, 'errors', errors);
        });
      }
    },

  },

});
