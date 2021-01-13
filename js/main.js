$(document).ready(function(){
    // ----------slick---------------
    $('.slider').slick({
        dots:true,
        autoplay:true
      });
      
      // --------header------------
      
      // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
      $("header li").click(function(){
        var id = $(this).attr("href");
        var position = $(id).offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
      });

      // --------menu------------
      $('.serviceLists').click(function() {
        var $serviceMenu = $(this).find('.serviceMenus');
        if($serviceMenu.hasClass('open')) { 
          $serviceMenu.removeClass('open');
          // slideUpメソッドを用いて、$answerを隠してください
          
          // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
          $(this).find(".sign").text("+");
          $serviceMenu.slideUp();
        } else {
          $serviceMenu.addClass('open'); 
          // slideDownメソッドを用いて、$answerを表示してください
          // 子要素のspanタグの中身をtetメソッドを用いて書き換えてください
           $(this).find(".sign").text("-");  
           $serviceMenu.slideDown();        
        }
      });
      // --------scroll----------
      $(function () {
        $(window).scroll(function () {
            const wHeight = $(window).height();
            const scrollAmount = $(window).scrollTop();
            $('.scrollanime').each(function () {
                const targetPosition = $(this).offset().top;
                if(scrollAmount > targetPosition - wHeight + 60) {
                    $(this).addClass("fadeInDown");
                }
            });
        });
      });

});