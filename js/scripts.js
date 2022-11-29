$( document ).ready(function() {
    // Progress bar

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#5271ff',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa'},
        to: { color: '#5271ff'},

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 252);
        circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#00c2cb',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa'},
        to: { color: '#00c2cb'},

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 25);
        circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#38b6ff',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#aaa'},
        to: { color: '#38b6ff'},

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 110);
        circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 252);
        circle.setText(value);

        }

    });

    // Iniciando o loader quando o usuário chega no elemento

    let dataAreaOffset = $('#data-area').offset();

    // stop serve para a animação não carregar mais que uma vez

    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();
    
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
          circleA.animate(1.0);
          circleB.animate(1.0);
          circleC.animate(1.0);
          circleD.animate(1.0);
    
          stop = 1;
        }
    
    });

    //Parallax

    setTimeout(function(){
        

        $('#data-area').parallax({imageSrc: 'images/parallax-art.png'});


    }, 250);





    //Filtro do portfólio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id')
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dogs-btn') {
            eachBoxes('dogs', boxes)
        } else if(type == 'cats-btn') {
            eachBoxes('cats', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    });

    function eachBoxes(type, boxes) {
        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // scroll para as seções

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let portfolioSection = $('#portfolio-area');
    let agencySection = $('#services-area');
    let callSection = $('#call-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){

        let btnId = $(this).attr('id');

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = portfolioSection;
        } else if (btnId == 'agency-menu') {
            scrollTo = agencySection;
        } else if (btnId == 'portfolio-menu') {
            scrollTo = callSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });
    
});