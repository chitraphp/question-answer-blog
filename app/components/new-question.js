import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('addQuestionForm', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        questionAttr: this.get('questionAttr'),
        notes:this.get('notes')
      };
      this.set('addQuestionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
