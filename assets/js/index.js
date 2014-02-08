/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    function featured() {
      $(".post").each(function() {
        var thisel = $(this);

        if(thisel.find(".post-excerpt > p:first-child").has("img").length){

          if(thisel.find(".post-title").has("a").length){
            thisel.prepend("<div class='post-photo'><a href='"+thisel.find(".post-title a").attr("href")+"'></a></div>");
            thisel.find(".post-excerpt > p:first-child").has("img").find("img").prependTo(thisel.find(".post-photo a"));
          } else {
            thisel.prepend("<div class='post-photo'></div>");
            thisel.find(".post-excerpt > p:first-child").has("img").find("img").prependTo(thisel.find(".post-photo"));
          }
          thisel.addClass("hasphoto");

        } else
          if(thisel.find(".post-excerpt").has("iframe[src^='http://www.youtube.com']").length){
            thisel.prepend("<div class='post-video'></div>");
            thisel.find(".post-excerpt").has("iframe").find("iframe:first-child").prependTo(thisel.find(".post-video"));
          } else
          if(thisel.find(".post-excerpt").has("iframe[src^='https://w.soundcloud.com']").length || thisel.find(".post-excerpt").has("iframe[src^='http://bandcamp.com']").length){
            thisel.prepend("<div class='post-audio'></div>");
            thisel.find(".post-excerpt").has("iframe").find("iframe:first-child").prependTo(thisel.find(".post-audio"));
          } else
          if(thisel.find(".post-excerpt").has("iframe[src^='//player.vimeo.com']").length){
            thisel.prepend("<div class='post-video'></div>");
            thisel.find(".post-excerpt").has("iframe").find("iframe:first-child").prependTo(thisel.find(".post-video"));
          }
      });
    }

    $(document).ready(function(){
      featured();

      $(".sticky_nav").sticky({topSpacing:0});

      $( "#filter_all" ).click(function(e) {
        e.preventDefault();
        $("nav a").removeClass("filter_active");
        $(".post").show();
        $(this).addClass("filter_active");
      });

      $( "#filter_music" ).click(function(e) {
        e.preventDefault();
        $("nav a").removeClass("filter_active");
        $(".post.tag-music").show();
        $(this).addClass("filter_active");
        $('.post').not('.tag-music').each(function(){
          $(this).hide();
        });
      });

      $( "#filter_writing" ).click(function(e) {
        e.preventDefault();
        $("nav a").removeClass("filter_active");
        $(this).addClass("filter_active");
        $(".post.tag-writing").show();
        $('.post').not('.tag-writing').each(function(){
          $(this).hide();
        });
      });

      $( "#filter_photography" ).click(function(e) {
        e.preventDefault();
        $("nav a").removeClass("filter_active");
        $(".post.tag-photography").show();
        $(this).addClass("filter_active");
        $('.post').not('.tag-photography').each(function(){
          $(this).hide();
        });
      });
    });

}(jQuery));