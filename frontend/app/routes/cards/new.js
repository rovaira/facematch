import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('card');
  },
  actions: {
    save(card) {
      var _this = this;
      card.save().then(function(card) {
        _this.transitionTo('cards.show', card);
      });
    },
    cancel: function() {
      this.transitionTo('cards');
    }
  }
});
