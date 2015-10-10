import DS from 'ember-data';

export default DS.Model.extend({
  question:DS.belongsTo('question', {async:true}),
  answerAttr: DS.attr(),
  name: DS.attr(),
  vote: DS.attr(),
  date_added: DS.attr()

});
