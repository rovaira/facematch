import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  name: DS.attr('string'),
  correctlyMatched: DS.attr('boolean')
});
