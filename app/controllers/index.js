import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['author:asc'],
    //sortAscending: false,
    sortedModel: Ember.computed.sort('model.questions', 'sortProperties')

});
