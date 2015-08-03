import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cards', function() {
    this.route('show', { path: ':card_id' });
    this.route('new');
    this.route('edit', { path: ':card_id/edit' });
  });
});

export default Router;
