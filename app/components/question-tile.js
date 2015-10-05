import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  // updateQuestion(question, params) {
  //     //debugger;
  //     Object.keys(params).forEach(function(key) {
  //       if(params[key]!==undefined) {
  //         question.set(key,params[key]);
  //       }
  //     });
  //     question.save();
  //     this.transitionTo('index');
  //   },
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    }
  }

});
