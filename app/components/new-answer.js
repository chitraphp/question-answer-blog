import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswerForm', true);
    },

    saveAnswer(question) {
      var params = {
        name: this.get('name'),
        answerAttr: this.get('answerAttr'),
        question: this.get('question'),
        vote:0

      };
      this.set('addNewAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }

});
