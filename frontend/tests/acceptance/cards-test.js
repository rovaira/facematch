import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'facematch/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module("Acceptance: View Cards Index", {
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

test('visiting /cards', function(assert) {
  visit('/cards');

  andThen(function() {
    assert.equal(currentURL(), '/cards');
  });
});

test('user can navigate back to root from another page', function(assert) {
  visit('/cards/new');
    click('a:contains("facematch")');

  andThen(function() {
    assert.equal(currentURL(), '/cards');
  });
});
