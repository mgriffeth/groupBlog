(function(){
  App.Models.PostModel = Parse.Object.extend({

  className: 'Post',

  idAttribute:'objectId',

    defaults:{
      title:'',
      content:'',
      category:[]
    },


   initialize: function () {
      var title = this.get('title');
      console.log(title + " was submitted");

    }
  });
}());
