import Ember from 'ember';

export function currentDate() {
  debugger;
  return moment().calendar();
  //alert(moment().calendar());
  alert("x");
}

export default Ember.Helper.helper(currentDate);
