$('.nav-item').click(function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    checkActiveNavItem();
});

$(window).on('scroll', function () {
    checkActiveNavItem();
});

function checkActiveNavItem() {
    var scrollPosition = $(window).scrollTop();

    // Itera sobre cada seção para determinar qual está em foco
    $('section').each(function () {
        var sectionTop = $(this).offset().top - 100; // Ajusta o valor conforme necessário
        var sectionBottom = sectionTop + $(this).outerHeight();

        // Verifica se a posição do scroll está dentro da seção
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            var currentSectionId = $(this).attr('id');
            
            // Remove a classe active de todos os nav-items e adiciona ao atual
            $('.nav-item').removeClass('active');
            $('.nav-link[data-i18n="' + currentSectionId + '"]').closest('.nav-item').addClass('active');
        }
    });
}
