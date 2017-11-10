import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { get } = Ember;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return get(this, 'store').createRecord('user');
  },
});
