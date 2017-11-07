import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { get, inject } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: inject.service(),

  actions: {
    logout() {
      get(this, 'session').invalidate();
    }
  }
});
