(function () {

  App.Views.EditPost = Parse.View.extend({

    template: _.template($('#editPostTemp').html()),

    initialize: function (options) {
      this.options = options;
      console.log(this.options.post.toJSON());
      this.render();

      $('#viewContainer').html(this.$el);
    },

    render: function () {
      this.$el.html(this.template(this.options.post.toJSON()));
    }
  });
}());
