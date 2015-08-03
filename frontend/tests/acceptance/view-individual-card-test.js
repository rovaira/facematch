import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'facematch/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module("Acceptance: View A Card's Detail", {
  beforeEach: function() {
    application = startApp();

    var cards = [
      {
        id: 1,
        name: 'Marina',
        image: 'http://bit.ly/1SS5QfB',
        correctly_matched: false
      },
      {
        id: 2,
        name: 'Martin',
        image: 'http://bit.ly/1SS5QfB',
        correctly_matched: false
      },
      {
        id: 3,
        name: 'Rita',
        image: 'http://bit.ly/1SS5QfB',
        correctly_matched: false
      }
    ];

    server = new Pretender(function() {
      this.get('/api/v1/cards', function() {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({cards: cards})];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test("user views a card's details/show page", function(assert) {
  visit('/cards');

  click('a:contains("Marina")');

  andThen(function() {
    assert.equal(currentURL(), '/cards/1');
    assert.equal(find('h3').text(), 'Marina');
    assert.equal(find('#correctly-matched').text(), "Correctly Matched? false");
  });
});
