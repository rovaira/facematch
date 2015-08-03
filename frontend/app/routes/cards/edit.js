import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('card', params.card_id);
  },
  actions: {
    save: function(card) {
      var _this = this;
      card.save().then(function(card) {
        _this.transitionTo('cards.show', card);
      });
    },
    cancel: function() {
      this.transitionTo('cards');
    },
  }
});
