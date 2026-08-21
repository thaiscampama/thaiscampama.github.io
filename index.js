

$(document).ready(function () {

    establirIdioma();
    

    // Scroll photo //
    window.addEventListener('scroll', function () {
        var valor = -((window.scrollY / 200) * 12) + 6;
        valor = numberInRange(valor, -6, 6);
        $(".foto-scroll").css({ "transform": `scale(1.15) translateY(${valor}%)` });
    });

    // Afegir rel="noopener noreferrer" a tots els links //
    $('a').attr('rel', 'noopener noreferrer');
    // Afegir target="_blank" a tots els links que no tinguin target="_self"//
    $('a:not([target="_self"])').attr('target', '_blank');

    // Quan tot està carregat, mostrem la pàgina //
    $(".page-loader").fadeIn(500);
});


// Idioma //
function establirIdioma() {
    // Establir idioma //
    $("#idioma").val(getCookie("lang") || navigator.language.split("-")[0]);
    // Valor per defecte //
    if (!$("#idioma").val())
        $("#idioma").val("ca");
    $("#idioma").change();
}
function canviarIdioma(idioma) {
    $("[lang=ca], [lang=es], [lang=en]").hide();
    $(`[lang=${idioma}]`).show();
    setCookie("lang", idioma);
}
