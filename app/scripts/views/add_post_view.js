(function(){
  App.Views.AddPost = Parse.View.extend({

    events:{
      'click #newPostSubmit': 'submitNew',
      'click #newPostPublish': 'publishNew'
    },

    template: $('#newPostTemp').html(),

    initialize:function(){

      this.render();

      $('#viewContainer').html(this.$el);
    },

    render:function(){
      this.$el.html(this.template);
    },
    submitNew:function(e){
      e.preventDefault();

      post = new App.Models.PostModel({
        title: $('#newPostTitle').val(),
        content: $('#newPostContent').val(),

        category:$('#newPostCategory').val().split(","),
        authorName: App.user.attributes.username,

        published: false,
        author: App.user
      });


      var postACL = new Parse.ACL(App.user);
      postACL.setPublicReadAccess(true);
      post.setACL(postACL);
      //publicPost.save();
      //post.setACL(new Parse.ACL(App.user));

        post.save(null, {
          success: function(){
            App.all_posts.add(post);
            App.router.navigate('', { trigger : true });
          }
        });

    },

    publishNew:function(e){
      e.preventDefault();

      post = new App.Models.PostModel({
        title: $('#newPostTitle').val(),
        content: $('#newPostContent').val(),
        category:$('#newPostCategory').val().split(" "),
        published: true,

        authorName: App.user.attributes.username,

        author: App.user
      });


      var postACL = new Parse.ACL(App.user);
      postACL.setPublicReadAccess(true);
      post.setACL(postACL);
      //publicPost.save();
      //post.setACL(new Parse.ACL(App.user));

        post.save(null, {
          success:function(){
            App.all_posts.add(post);
            App.router.navigate('', { trigger : true });
          }
        });

    }

  });
}());
