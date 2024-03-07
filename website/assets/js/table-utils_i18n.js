// var tableUtils_i18n = {
//     {{ range $key, $value := index .Site.Data .Site.Language.Lang }}
//         "{{ $key }}": "{{ T $key }}",
//     {{end}}
//     };

{{ $strings := slice "security" "ads" "anti-adblock" "social" "cookiesCategory" "annoyances" "sponsored" "e-commerce" "privacy" "selectCategory" "Polish" "foreign" "selectOrigin" "selectAdblocker" "selectFavoriteLists" "nothingFound" "ui_search" "optionSelected" "optionsSelected" "all" "clear"}}

var tableUtils_i18n = {
    {{ range $strings }}
        "{{ . }}": "{{ i18n . }}",
    {{ end }}
};