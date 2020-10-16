---
title: "Jak skutecznie blokować reklamy w przeglądarkach internetowych na Androidzie?"
slug: "android-browser-adblocker"
aliases:
- yandex-adblocker
weight: 1
tags:
- reklamy
- Android
- Yandex
- Kiwi
- Ungoogled Chromium
- adblocker
- rozszerzenia
- filtry
---

## A) ![Yandex]Yandex + ![uBO]uBlock Origin
<hr><blockquote><details><summary>Wersja wideo (instalowanie)</summary><br>
{{< youtube nmEs0J4M-7I >}}
</details></blockquote><hr>

<hr><blockquote><details><summary>Wersja wideo (aktualizowanie)</summary><br>
{{< youtube k9t9PRDn5MU >}}
</details></blockquote><hr>

Na dobry początek po zainstalowaniu [Yandex Browser](https://play.google.com/store/apps/details?id=com.yandex.browser&hl=en) możesz wejść w jego **ustawienia** (settings) i odznaczyć **display recommendations feed** (to pokazuje newsy z różnych stron, wg. zainteresowań, historii, lokalizacji i innych czynników) i **show ads above Tableau** (to są oczywiście reklamy), następnie wejdź w **notifications** i odznacz **show Tableau in the notifications bar** (Tableau to widgety najczęściej odwiedzanych stron, w tym przypadku wyświetlane na pasku). Potem wróć do głównych ustawień, przejdź do **Ad blocking** i wyłącz wszystkie opcje.

Aby zainstalować uBlock Origin (w wersji stabilnej) dla Yandexa, powinieneś wykonać parę kroków:
1. Potrzebny będzie ci eksplorator/menedżer plików. Jeśli nie masz żadnego, to polecam MiXplorer, którego pobierzesz z [xda-developers](https://forum.xda-developers.com/showthread.php?t=1523691 "https://forum.xda-developers.com/showthread.php?t=1523691") lub aplikacji [XDA Labs](https://www.xda-developers.com/xda-labs/). A spolszczenie do MiXplorer pobierzesz, uruchamiając go i naciskając `3 kropki => settings => languages => add => polski => save`.
2. Pobierz **uBlock0.chromium.zip** z [GitHuba](https://github.com/gorhill/uBlock/releases).
3. Po pobraniu, włącz **MiXplorer**, wejdź do katalogu, w którym plik się pobrał, prawdopodobnie jest to `Pamięć wewnętrzna/Download`, odnajdź pobranego zipa, dotknij i przytrzymaj go, dotknij 3 kropki i wybierz — **wypakuj**.
4. **Utwórz nowy katalog** w dowolnym katalogu (dotknij **+** i **katalog**), wpisz jakąś nazwę, np. **Rozszerzenia**.
5. Wejdź do poprzednio utworzonego katalogu **Rozszerzenia** i dotknij na górze na ikonę listy zadań i na **wypakuj** i wybierz, że chcesz **wypakować do bieżącego katalogu** i dotknij ok.
6. Wróć do Yandexa, wpisz do paska adresu - `chrome://extensions` i potwierdź Enterem.
7. Zaznacz **Developer mode**, dotknij **Load unpacked extension**, wybierz MiXplorer i wejdź do katalogu, w którym masz rozpakowane rozszerzenie (Pamięć wewnętrzna/Rozszerzenia/uBlock0.chromium) i wybierz `manifest.json`.
8. Dotknij **options** przy uBlocku lub 3 kropki, a potem **Extensions** i wybierz uBlock Origin oraz dotknij **zębatkę**, by wejść do panelu sterowania uBlocka.
9. Wybierz filtry, jakie chcesz. A jeśli 2 polskie ci nie wystarczają, to wejdź na [majkiit.github.io/polish-ads-filter](https://majkiit.github.io/polish-ads-filter/) i zasubskrybuj dodatkowe.
10. Po włączeniu filtrów sprawdź, czy uBlock Origin działa. Wejdź np. na [wp.pl](https://wp.pl/), jeśli tam nie ma reklam, to znaczy, że uBlock Origin działa. A jeśli są, to być może zrobiłeś coś nie tak, jak trzeba.
11. Gotowe!

{{% alert %}}
**UWAGA!!! Aktualizacje uBlocka Origin (w wersji stabilnej) niestety trzeba wykonywać ręcznie, ponieważ sam się nie zaktualizuje, a więc za każdym razem trzeba go pobierać i nadpisywać pliki.**
{{% /alert %}}


Można też skrócić sobie drogę i zainstalować uBlock Origin dev build (trochę mniej stabilny, może mieć błędy), który jak się okazuje, można zainstalować bezpośrednio z Chrome Web Store, a to oznacza również, że będzie on automatycznie się aktualizował. Aby tego dokonać wystarczy jedynie:
1. Pobierz i zainstaluj [uBlock Origin dev build](https://chrome.google.com/webstore/detail/ublock-origin-dev-build/cgbcahbpdhpcegmbfconppldiemgcoii) (dotknij **DODAJ DO CHROME**).
2. Wybierz filtry, jakie chcesz. A jeśli 2 polskie ci nie wystarczają, to wejdź na [majkiit.github.io/polish-ads-filter](https://majkiit.github.io/polish-ads-filter/) i zasubskrybuj dodatkowe.
3. Gotowe!

## B) ![Kiwi]Kiwi + ![uBO]uBlock Origin

Ta procedura jest bardzo prosta. Otóż po zainstalowaniu [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser) wystarczy wykonać parę kroków:
1. Wejdź na https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm, dotknij **dodaj do Chrome**, a następnie potwierdź instalację.
2. Wybierz filtry, jakie chcesz. A jeśli 2 polskie ci nie wystarczają, to wejdź na [majkiit.github.io/polish-ads-filter](https://majkiit.github.io/polish-ads-filter/) i zasubskrybuj dodatkowe.
3. Gotowe!

## C) ![Chromium]Ungoogled Chromium + ![uBO]uBlock Origin
<hr><blockquote><details><summary>Wersja wideo</summary><br>
{{< youtube 9k6tvyyowk0 >}}
</details></blockquote><hr>

{{% pageinfo %}}
⚠️ **UWAGA!!! ⚠️ W tej przeglądarce obsługa rozszerzeń jest eksperymentalna.**
{{% /pageinfo %}}

Pewnie większość osób po zobaczeniu nazwy tej przeglądarki, zaczęłaby jej szukać w Sklepie Play, cóż niestety muszę was rozczarować, trzeba będzie się trochę więcej napracować, bo jej tam nie znajdziecie 😊.

Jeżeli nie masz aplikacji [F-Droid](https://f-droid.org) (dla niewtajemniczonych, jest to alternatywny sklep z wyłącznie otwarto-źródłowymi aplikacjami):
1. Pobierz aplikację [F-Droid](https://f-droid.org/F-Droid.apk).
2. Wejdź do powiadomień i dotknij pobrany plik apk, a następnie dotknij **zainstaluj**, a jeżeli dostaniesz informację o instalowaniu z nieznanego źródła, to skorzystaj z poradnika dostępnego na [android.com.pl](https://android.com.pl/porady/250018-aplikacje-z-nieznanych-zrodel/).

Następnie, jeżeli już masz [F-Droid](https://f-droid.org):
1. Skopiuj [link](https://www.droidware.info/fdroid/repo?fingerprint=2144449AB1DD270EC31B6087409B5D0EA39A75A9F290DA62AC1B238A0EAAF851).
2. Włącz F-Droid, wejdź w `Ustawienia => Repozytoria`, a następnie dotknij **+** i **dodaj**.
3. Wyjdź z ustawień i wybierz **Ostatnie**, a następnie dotknij **lupę** i wpisz **Ungoogled Chromium Ext**.
4. Kliknij w białą ikonę z niebieską strzałką w dół, by pobrać **Ungoogled Chromium Extensions**, a następnie **zainstaluj**.
5. Uruchom **Ungoogled Chromium**, wpisz w pasek `chrome://flags/` i potwierdź Enterem.
6. Wpisz `#extension-mime-request-handling` w pole wyszukiwania, następnie wybierz **Always prompt for install** zamiast **Default** i dotknij **Relaunch**.
7. Wejdź na https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm, następnie naciśnij na `3 kropki => wersja na komputer`, dotknij **Add to Chromium** i potwierdź, że chcesz zainstalować.
8. Wejdź na `chrome://extensions/`, potem kliknij w **szczegóły** obok uBO, a następnie **opcje rozszerzeń**.
9. Wybierz filtry, jakie chcesz. A jeśli 2 polskie ci nie wystarczają, to wejdź na [majkiit.github.io/polish-ads-filter](https://majkiit.github.io/polish-ads-filter/) i zasubskrybuj dodatkowe (obecnie niestety trzeba ręcznie kopiować linki).
10. Gotowe!

## D) ![Webview]Dowolna przeglądarka + ![AG]AdGuard
1. Wejdź na https://adguard.com/pl/welcome.html i kliknij **Pobierz**.
2. Wejdź do powiadomień i dotknij pobrany plik apk, a następnie dotknij **zainstaluj**, a jeżeli dostaniesz informację o instalowaniu z nieznanego źródła, to skorzystaj z poradnika dostępnego na [android.com.pl](https://android.com.pl/porady/250018-aplikacje-z-nieznanych-zrodel/).
3. Uruchom AdGuard i dotknij **Akceptuj**.
4. Wykonaj dokładną konfigurację, odpowiedz na pytania według swoich preferencji i **pamiętaj o zainstalowaniu certyfikatu https**.
5. Dotknij `3 kropki => ustawienia => blokowanie treści => filtry` i wybierz to, co chcesz, zwracając szczególną uwagę na specyficzne językowe.
6. Gotowe!

[Chromium]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.1/chromium/chromium_24x24.png "Ungoogled Chromium"
[Kiwi]: https://raw.githubusercontent.com/scribblemaniac/browser-logos/41d6542b2d122f5b65d8f259cf5ffbdb3b89831d/src/kiwi/kiwi_24x24.png "Kiwi Browser"
[Yandex]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.1/yandex/yandex_24x24.png "Yandex Browser"
[Webview]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/69.0.1/android-webview/android-webview_24x24.png

[uBO]: /images/uBO_24.png
[AG]: /images/AdGuard_logo_24.png
