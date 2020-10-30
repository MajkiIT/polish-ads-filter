document.querySelector("#mirror").onchange = function () {
    let selectedMirror = this.value;
    let allMirrors = document.querySelectorAll('[data-label="LINKI ALTERNATYWNE"] a');
    let allFilteredMirrors = document.querySelectorAll('[data-label="LINKI ALTERNATYWNE"] a:not([href*="' + selectedMirror + '"])');
    for (let mirror of allMirrors) {
        mirror.style.display = "initial";
    }
    if (selectedMirror) {
        for (let mirror of allFilteredMirrors) {
            mirror.style.display = "none";
        }
    }
}

function scrollPaddingTop(target) {
    if (window.getComputedStyle(document.querySelector("nav")).getPropertyValue('position') == 'fixed') {
        if (typeof target.offset() !== 'undefined') {
            $('html, body').animate({
                scrollTop: target.offset().top - document.querySelector('nav').offsetHeight
            });
        }
    }
}

$('.fa-link').click(function () {
    scrollPaddingTop($(decodeURIComponent($(this).attr('href'))));
});

window.addEventListener('load', () => {
    scrollPaddingTop($(':target'));
});

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    let key;
    $.each($("select"), function () {
        key = urlParams.get($(this).attr("data-attribute"));
        if (key !== null) {
            $(this).selectpicker('val', key.split(",")).trigger('change');
        }
    });
    key = urlParams.get("search");
    let searchField = $(".light-table-filter");
    if (key !== null) {
        searchField.val(key);
        searchField.trigger('input');
    }
});

const url = new URL(location);
let sPickers = $('select[data-attribute]');

sPickers.on('change', function () {
    $.each(sPickers, function () {
        if ($(this).selectpicker('val') != '') {
            url.searchParams.set($(this).attr("data-attribute"), $(this).selectpicker('val'));
        } else {
            url.searchParams.delete($(this).attr("data-attribute"));
        }
    });
    history.replaceState(null, '', url.href);
});

$(".light-table-filter").bind("input", function (e) {
    if (this.value != '') {
        url.searchParams.set("search", this.value);
    } else {
        url.searchParams.delete("search");
    }
    history.replaceState(null, '', url.href);
});
