import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['vote:desc'],
    //sortAscending: false,
  sortedModel: Ember.computed.sort('model.answers', 'sortProperties')
});
