$(function() {

    abrirSide();
    cliqueFechar();

    function abrirSide() {
          $('.mobile').click(function(e){
            e.stopPropagation();
              $('.side-mobile').fadeIn();
          })
    }

    function cliqueFechar() {
        let el = $('body');
        el.click(function() {
            $('.side-mobile').fadeOut();
        })
    }
})