import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        question.get('answers').addObject(newAnswer);
        question.save();
        this.transitionTo('question', params.question);
      }).catch(function(thingy) {
        console.log(thingy.errors);
      });
    },
  }
});
