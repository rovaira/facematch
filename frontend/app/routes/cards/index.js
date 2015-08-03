import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('card');
  },
  actions: {
    delete: function(card) {
      card.destroyRecord();
      return false;
    }
  }
});
