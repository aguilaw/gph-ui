import Ember from 'ember';

const { get, inject, computed } = Ember;

export default Ember.Component.extend({
  session: inject.service(),

  errors_str: computed('errors', function _errors_str() {
    return JSON.stringify(get(this, 'errors'), null, 2);
  }),

  actions: {
    submit() {
      let user = get(this, 'user');
      get(this, 'registerUser')(user);
    },
  },
});
