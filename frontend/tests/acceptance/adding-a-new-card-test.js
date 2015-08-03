import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'facematch/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module('Acceptance: Adding A Card', {
  beforeEach: function() {
    // this.application = startApp();
    application = startApp();

    server = new Pretender();

  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('user adds a card to their stack', function(assert) {
  server.post('/api/v1/cards', function() {
    var cardResponse = {
      name: 'Test Name',
      image: 'http://bit.ly/1SS5QfB',
      correctly_matched: false
    };

    return [201, {"Content-Type": "application/json"}, JSON.stringify({cards: cardResponse})];
  });

  visit('/cards/new');

  fillIn('input[name="name"]', 'Test Name');
  fillIn('input[name="image"]', 'http://bit.ly/1SS5QfB');
  click('input[type="submit"]');

  andThen(function() {
    assert.equal(currentRouteName(), 'cards.show');
    assert.equal(find('h3').text(), 'Test Name');
  });
});
