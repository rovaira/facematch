import Ember from 'ember';

export default Ember.Route.extend({
  // apparently the following is not necessary because of convention over
  // configuration --> by adding a show route in the router, Ember assumes your
  // show route will be looking for a card object by id
  // model: function(params) {
  //   return this.store.find('card', params.card_id);
  // }
});
