(function () {

  App.Views.EditPost = Parse.View.extend({

    events:{
      'click #editPostSubmit': 'submitEdit',
      'click #deletePost':'deletePost'
    },

    template: _.template($('#editPostTemp').html()),

    initialize: function (options) {
      this.options = options;
      console.log(this.options.post.toJSON());
      this.render();
      console.log(this.options.post.toJSON());

      $('#viewContainer').html(this.$el);
    },

    render: function () {
      this.$el.html(this.template(this.options.post.toJSON()));
    },

    submitEdit:function(e){
      e.preventDefault();

      this.options.post.set({
        title: $('#editPostTitle').val(),
        content: $('#editPostContent').val(),
<<<<<<< HEAD
        
=======
        category:[]
>>>>>>> f7ff0bd9b4f57d9be6cddc659339b4b29e8a5435
      });

      console.log('edit' + this);
      this.options.post.save();
      App.router.navigate('',{ trigger : true });
    },

    deletePost:function(e){
      e.preventDefault();
      console.log('delete')

      this.options.post.destroy();
      App.router.navigate('',{ trigger : true });


    }
  });
}());
