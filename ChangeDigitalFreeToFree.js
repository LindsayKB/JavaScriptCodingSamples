$(window).load(function() {
     $('.CE__shipping-component .ch-custom-label span').each(function() {
     var text = $(this).text().replace('Digital', '');
     $(this).text(text);
     });
});