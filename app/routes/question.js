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
        this.transitionTo('question', params.question,{queryParams: {sort: 'vote',direction:'desc'}});
      }).catch(function(thingy) {
        console.log(thingy.errors);
      });
    },
    updateQuestion(question, params) {
        //debugger;
        //alert(question[0]);
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },

      voteUp(answer) {
        //debugger;
        var num = answer.get('vote') + 1;
        answer.set('vote',num);
        answer.save();
        this.transitionTo('question', answer.get('question'));
      },

      voteDown(answer) {
        //debugger;
        var num = answer.get('vote') - 1;
        answer.set('vote',num);
        answer.save();
        this.transitionTo('question', answer.get('question'));
      }

  }
});
