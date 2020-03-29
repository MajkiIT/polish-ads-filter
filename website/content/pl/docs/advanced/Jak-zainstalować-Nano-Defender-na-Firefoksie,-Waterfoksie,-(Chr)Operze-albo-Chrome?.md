---
title: "Jak zainstalować Nano Defender na Firefoksie, Waterfoksie, (Chr)Operze? albo Chrome?"
weight: 2
date: 26 Dec 2018
---
## Spis treści

<ol type="I">
<li><p><a href="#i-firefox-quantum-57">FIREFOX QUANTUM (57+)</a></p></li>
<li><p><a href="#ii-waterfox">WATERFOX</a></p></li>
<li><p><a href="#iii-chropera"><sub><sup>(CHR)</sup></sub>OPERA</a></p></li>
<li><p><a href="#iv-google-chromechromiumvivaldi">GOOGLE CHROME/CHROMIUM/VIVALDI</a></p></li>
</ol>


## **I. ![Firefox][Firefox]FIREFOX QUANTUM (57+)**

1. Zainstaluj [**Nano Defender**](https://github.com/LiCybora/NanoDefenderFirefox/releases/ "https://github.com/LiCybora/NanoDefenderFirefox/releases/") (kliknij na plik xpi, zezwól, a następnie dodaj).

2. Jeśli używasz [Nano Adblockera](https://github.com/LiCybora/NanoCoreFirefox/releases/ "https://github.com/LiCybora/NanoCoreFirefox/releases/"), to lista filtrów **Nano Defender Integration** powinna się automatycznie po chwili aktywować.

3. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Włącz listę filtrów **Adblock Warning Removal List** w zakładce **Zewnętrzne filtry**

   - Subskrybuj listę filtrów **Nano Defender Integration**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration)
    - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Dodaj listę filtrów **Nano filters**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20Filters)

   - Dodaj listę filtrów **Nano filters - Whitelist**
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

4. Ciesz się z działającego **Nano Defendera**!


## **II. ![Waterfox][Waterfox]WATERFOX**

<ul>

1. Zainstaluj najnowszy plik xpi [**Classic Add-ons Archive**](https://github.com/JustOff/ca-archive/releases), kliknij **Dodaj do Firefoksa**, a następnie **Dodaj**.

2. Kliknij na ikonę Classic Addons Archive, a potem wklej do paska adresu `caa:addon/checkcompatibility2`, kliknij **Install now**, a następnie **Dodaj**.

3. Zainstaluj [**Nano Defender**](https://github.com/LiCybora/NanoDefenderFirefox/releases/ "https://github.com/LiCybora/NanoDefenderFirefox/releases/") (kliknij na plik xpi, zezwól, a następnie dodaj).

4. Jeśli używasz [Nano Adblockera](https://github.com/LiCybora/NanoCoreFirefox/releases/ "https://github.com/LiCybora/NanoCoreFirefox/releases/"), to lista filtrów **Nano Defender Integration** powinna się automatycznie po chwili aktywować.

5. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Włącz listę filtrów **Adblock Warning Removal List** w zakładce **Zewnętrzne filtry**

   - Subskrybuj listę filtrów **Nano Defender Integration**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration)

    - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Dodaj listę filtrów **Nano filters**:
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20Filters)

   - Dodaj listę filtrów **Nano filters - Whitelist**
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

6. Ciesz się z działającego **Nano Defendera**!

<ul>

***

- Dzięki niemu filmik odpala się na ➡️ [**wiadomosci.wp.pl**/piekarz-bedzie-mogl-odmowic-sprzedania-chleba-pomysl-ziobry-moze-doprowadzic-do-absurdu-6203198272993409a](https://wiadomosci.wp.pl/piekarz-bedzie-mogl-odmowic-sprzedania-chleba-pomysl-ziobry-moze-doprowadzic-do-absurdu-6203198272993409a "https://wiadomosci.wp.pl/piekarz-bedzie-mogl-odmowic-sprzedania-chleba-pomysl-ziobry-moze-doprowadzic-do-absurdu-6203198272993409a"), bez niego w ogóle nie rusza.

***

</ul></ul>



⚠️ **UWAGA!!!!** ⚠️ Jednakże INSTALACJA, jak i UŻYWANIE Nano Defender na WATERFOKSIE JEST NA WŁASNE RYZYKO, gdyż mimo wszystko mogą wystąpić pewne błędy oraz niechciane wykonania kodu, itd.

## III. ![Opera][Opera]<sub><sup>(CHR)</sup></sub>OPERA
(wersja wideo - [www.youtube.com/watch?v=R5iB1-6B1A0](https://www.youtube.com/watch?v=R5iB1-6B1A0 "https://www.youtube.com/watch?v=R5iB1-6B1A0"))

1. Zainstaluj [**Extension Source Viewer**](https://addons.opera.com/pl/extensions/details/extension-source-viewer/?display=en "https://addons.opera.com/pl/extensions/details/extension-source-viewer/?display=en").

2. Wejdź na [**chrome.google.com/webstore**/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb") i kliknij na pasku adresu na ikonkę **CRX**, a następnie kliknij na `install`.

3. Wejdź na `opera://extensions`, a następnie kliknij zainstaluj przy **Nano Defender**, potwierdź jeszcze raz naciskając zainstaluj.

4. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo"), to lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.

5. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Włącz listę filtrów **Adblock Warning Removal List** w zakładce **Zewnętrzne filtry**

   - Subskrybuj listę filtrów **Nano Defender Integration**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration)

    - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Dodaj listę filtrów **Nano filters**:
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20Filters)

   - Dodaj listę filtrów **Nano filters - Whitelist**
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

6. Ciesz się z działającego **Nano Defendera**!

<hr><blockquote><details><summary>Alternatywna metoda z użyciem <code>Download Chrome Extension</code>:</summary><br>

1. Zainstaluj [**Download Chrome Extension**](https://addons.opera.com/pl/extensions/details/download-chrome-extension-9/?display=en "https://addons.opera.com/pl/extensions/details/download-chrome-extension-9/?display=en").

2. Wejdź na [**chrome.google.com/webstore**/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb") i kliknij `Dodaj do Opera`.

3. Wejdź na `opera://extensions`, a następnie kliknij zainstaluj przy **Nano Defender**, potwierdź jeszcze raz naciskając zainstaluj

4. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo") lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.

5. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Włącz listę filtrów **Adblock Warning Removal List** w zakładce **Zewnętrzne filtry**

   - Subskrybuj listę filtrów **Nano Defender Integration**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration)

    - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Dodaj listę filtrów **Nano filters**:
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20Filters)

   - Dodaj listę filtrów **Nano filters - Whitelist**
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

6. Ciesz się z działającego **Nano Defendera**!

</details></blockquote><hr>
<br>


⚠️ **UWAGA!!!!** ⚠️ Nie gwarantuję, że Nano Defender będzie w pełni działał na Operze, gdyż nie obsługuje ona pewnych API, które Chrome obsługuje, więc może się zdarzyć, że coś nie będzie działać i niestety ze strony autora rozszerzenia nie ma wsparcia dla użytkowników Opery.

## **IV. ![Chrome][Chrome]GOOGLE CHROME/![Chromium][Chromium]CHROMIUM/![Vivaldi][Vivaldi]VIVALDI**
1. Zainstaluj [**Nano Defender**](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb")
2. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo"), to lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.
3. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Włącz listę filtrów **Adblock Warning Removal List** w zakładce **Zewnętrzne filtry**

   - Subskrybuj listę filtrów **Nano Defender Integration**:
      [https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration)

    - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Dodaj listę filtrów **Nano filters**:
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20Filters)

   - Dodaj listę filtrów **Nano filters - Whitelist**
      [https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt](https://subscribe.adblockplus.org/?location=https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

4. Ciesz się z działającego **Nano Defendera**!

[Firefox]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/firefox/firefox_24x24.png "Mozilla Firefox"
[Waterfox]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/waterfox/waterfox_24x24.png "Waterfox"
[Chrome]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chrome/chrome_24x24.png "Google Chrome"
[Chromium]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chromium/chromium_24x24.png "Chromium"
[Vivaldi]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/vivaldi/vivaldi_24x24.png "Vivaldi"
[Opera]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/opera/opera_24x24.png "Opera"