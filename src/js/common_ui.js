$(function(){
    var header = $('#header');
    var m_layer_menu = $('#m_layer_menu');
    var pc_gnb = $('#gnb');

    // 모바일 메뉴 열기
    $('#btn_m_menu').on('click', function(){
        if(m_layer_menu.css('display') === 'block'){
            m_layer_menu.removeClass('menuOpen');
        }else{
            m_layer_menu.addClass('menuOpen');
        }
    });

    // 모바일 메뉴 닫기
    $('.btn_close_m_menu').on('click', function(){
        if(m_layer_menu.css('display') === 'block'){
            m_layer_menu.removeClass('menuOpen');
        }
    });

    //모바일 서브메뉴 depth1 열기
    m_layer_menu.find('.depth1 > li > button').on('click', function(){
        var $thisLi = $(this).parent('li');
        if($thisLi.hasClass('menuOpen')){
            $thisLi.removeClass('menuOpen');
        }else{
            $thisLi.addClass('menuOpen');
        }
    });

    //모바일 서브메뉴 depth2 열기
    m_layer_menu.find('.depth2 > li > button').on('click', function(){
        var $thisLi = $(this).parent('li');
        if($thisLi.hasClass('menuOpen')){
            $thisLi.removeClass('menuOpen');
        }else{
            $thisLi.addClass('menuOpen');
        }
    });

    // pc 메뉴 열기
    pc_gnb.find('.depth1 > li').on('mouseover', function(){
        var $thisLi = $(this);
        // $thisLi.addClass('menuOpen').siblings().removeClass('menuOpen');
        header.find('.gnb_bg').show();
    });

    // pc 메뉴 닫기
    pc_gnb.find('.depth1 > li').on('mouseout', function(){
        var $thisLi = $(this);
        // $thisLi.removeClass('menuOpen');
        header.find('.gnb_bg').hide();
    });
});