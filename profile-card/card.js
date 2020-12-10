$(function () {   
    'use strict';    
    $('.card-expand').click(function () {
        $('.glass-card').toggleClass('open');
        $('.card-expand i').toggleClass('fa-minus');
    });
});