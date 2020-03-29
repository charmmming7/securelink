$(function(){
    var header = $('#header');
    var m_layer_menu = $('#m_layer_menu');
    var pc_gnb = $('#gnb');
    var btn_req_estimate = $('#btn_req_estimate');

    // datepicker
    $( ".datepicker" ).each(function(){
        $(this).datepicker();
    });

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
        header.find('.gnb_bg').show();
    });

    // pc 메뉴 닫기
    pc_gnb.find('.depth1 > li').on('mouseout', function(){
        var $thisLi = $(this);
        header.find('.gnb_bg').hide();
    });

    // 유의사항 내용보기
    var btn_fold = $('.btn_fold');
    btn_fold.on('click', function(){
        var $this = $(this);
        var $agree_form = $this.parent().parent('.agree_form');
        if($agree_form.hasClass('is_fold')){
            $agree_form.removeClass('is_fold').find('.cont_wrap').slideDown();
            $this.removeClass('is_fold');
        }else{
            $agree_form.addClass('is_fold').find('.cont_wrap').slideUp();
            $this.addClass('is_fold');
        }
    });

    // 견적요청 레이어팝업 열기
    btn_req_estimate.on('click', function(){
        var $this = $(this);
        var $thisPopup = $('.layer_popup.estimate');
        if($thisPopup.css('display') === 'none'){
            $thisPopup.css('display', 'block');
        }
    });

    // 레이어팝업 닫기
    $('.layer_popup .btn_close').on('click', function(){
        var $this = $(this);
        var $thisPopup = $this.parent().parent('.layer_popup');
        if($thisPopup.css('display') === 'block'){
            $thisPopup.css('display','none');
        }
    });

    
});


// 파일첨부
$(document).ready(function(){
    var fileTarget = $('.ipbx_file input[type="file"]');
    fileTarget.on('change', function(){ 
        if(window.FileReader){  // modern browser
           var filename = $(this)[0].files[0].name;
        } 
        else {  // old IE
         var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
        }
        // 추출한 파일명 삽입
        $(this).siblings('.upload_name').val(filename);
    });
}); 