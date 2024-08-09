var userLanguage = navigator.language || navigator.userLanguage;
var languageCode = userLanguage.toLowerCase();

// console.log(languageCode)

loadTranslations(languageCode);

function loadTranslations(language) {
    $.getJSON('./src/assets/i18n/' + language + '.json')
        .done(function(translations) {
            // Iterar sobre todos os elementos que possuem o atributo data-i18n
            $('[data-i18n]').each(function() {
                var key = $(this).data('i18n');

                // Verificar se o texto contém HTML
                if(translations[key] && translations[key].includes('<')) {
                    // Usar html() para elementos com HTML embutido
                    $(this).html(translations[key]);
                } else {
                    // Usar text() para texto simples
                    $(this).text(translations[key]);
                }
            });
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao carregar as traduções:', textStatus, errorThrown);
        });
}