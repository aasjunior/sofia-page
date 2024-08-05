var userLanguage = navigator.language || navigator.userLanguage;
var languageCode = userLanguage.toLowerCase();

// console.log(languageCode)

loadTranslations(languageCode);

function loadTranslations(language) {
    $.getJSON('./src/assets/i18n/' + language + '.json')
        .done(function(translations) {
            $('[data-i18n]').each(function() {
                var key = $(this).data('i18n');
                $(this).text(translations[key]);
            });
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao carregar as traduções:', textStatus, errorThrown);
        });
}