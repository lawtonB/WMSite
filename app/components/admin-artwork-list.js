import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewArtwork(params){
      this.sendAction('saveNewArtwork', params);
    },
    editArtwork(artwork){
      this.sendAction('editArtwork', artwork);
    },
    deleteArtwork(artwork){
      this.sendAction('deleteArtwork', artwork);
    }
  }
});
