---
title: "Jak zainstalować Nano Defender na Firefoksie albo Waterfoksie?"
weight: 2
date: 26 Dec 2018
slug: "install-nano-defender"
expiryDate: 2023-06-21
---

{{% pageinfo %}}
⚠️ **UWAGA!!!!** ⚠️ Wersja Nano Defendera i Adblockera dla Firefoksa jest stworzona przez inną osobę niż dla Chrome i na bazie pracy dawnego autora wersji dla Chrome, co też oznacza, że jest w pełni bezpieczna. Jednakże wkrótce najprawdopodobniej Nano Adblocker nie otrzyma już żadnej aktualizacji, a Nano Defender zmieni nazwę. Więcej informacji na https://github.com/LiCybora/NanoDefenderFirefox/issues/187.
{{% /pageinfo %}}

## **I. ![Firefox][Firefox]FIREFOX QUANTUM (57+)/![Waterfox G][Waterfox G]WATERFOX G.x**

1. Zainstaluj [**Nano Defender**](https://addons.mozilla.org/pl/firefox/addon/nano-defender-firefox/ "https://addons.mozilla.org/pl/firefox/addon/nano-defender-firefox/") (kliknij **Dodaj do Firefoksa**, a następnie **Dodaj**).

2. Jeśli używasz [Nano Adblockera](https://addons.mozilla.org/pl/firefox/addon/nano-adblocker-firefox/ "https://addons.mozilla.org/pl/firefox/addon/nano-adblocker-firefox/"), to lista filtrów **Nano Defender Integration** powinna się automatycznie po chwili aktywować.

3. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Subskrybuj listę filtrów [Nano Defender Integration](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoMirror%2FNanoDefender.txt&title=Nano%20Defender%20Integration)
   - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Subskrybuj listę filtrów [Nano filters](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoBase.txt&title=Nano%20filters)

   - Subskrybuj listę filtrów [Nano filters - Whitelist](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

4. Ciesz się z działającego **Nano Defendera**!


## **II. ![Waterfox Classic][Waterfox Classic]WATERFOX CLASSIC**


1. Zainstaluj [**Nano Defender Pro**](https://github.com/LiCybora/NanoDefenderFirefox/releases/latest/ "https://github.com/LiCybora/NanoDefenderFirefox/releases/latest/") (kliknij na plik xpi, zezwól, a następnie dodaj).

2. Jeśli używasz [Nano Adblockera](https://addons.mozilla.org/pl/firefox/addon/nano-adblocker-firefox/ "https://addons.mozilla.org/pl/firefox/addon/nano-adblocker-firefox/"), to lista filtrów **Nano Defender Integration** powinna się automatycznie po chwili aktywować.

3. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Subskrybuj listę filtrów [Nano Defender Integration](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoMirror%2FNanoDefender.txt&title=Nano%20Defender%20Integration)
   - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Subskrybuj listę filtrów [Nano filters](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoBase.txt&title=Nano%20filters)

   - Subskrybuj listę filtrów [Nano filters - Whitelist](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

4. Ciesz się z działającego **Nano Defendera**!

{{% pageinfo %}}
⚠️ **UWAGA!!!!** ⚠️ Odmiana Pro nie zawiera niektórych funkcji, takich jak filtrowanie danych odpowiedzi.
{{% /pageinfo %}}



<!-- ## **III. ![Opera][Opera]<sub><sup>(CHR)</sup></sub>OPERA**
<hr><blockquote><details><summary>Wersja wideo</summary><br>
{{< youtube R5iB1-6B1A0 >}}
</details></blockquote><hr>

1. Zainstaluj [**Download Chrome Extension**](https://addons.opera.com/pl/extensions/details/download-chrome-extension-9/?display=en "https://addons.opera.com/pl/extensions/details/download-chrome-extension-9/?display=en").

2. Wejdź na [**chrome.google.com/webstore**/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb") i kliknij `Dodaj do Opera`.

3. Wejdź na `opera://extensions`, a następnie kliknij **Zainstaluj** przy **Nano Defender** i  potwierdź ponownie naciskając **Zainstaluj**.

4. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo"), to lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.

5. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Subskrybuj listę filtrów [Adblock Warning Removal List](ubo://subscribe?location=https%3A%2F%2Feasylist-downloads.adblockplus.org%2Fantiadblockfilters.txt&title=Adblock%20Warning%20Removal%20List)

   - Subskrybuj listę filtrów [Nano Defender Integration](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoMirror%2FNanoDefender.txt&title=Nano%20Defender%20Integration)
   - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Subskrybuj listę filtrów [Nano filters](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoBase.txt&title=Nano%20filters)

   - Subskrybuj listę filtrów [Nano filters - Whitelist](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

6. Ciesz się z działającego **Nano Defendera**!

<hr><blockquote><details><summary>Alternatywna metoda z użyciem <code>Extension Source Viewer</code>:</summary><br>

1. Zainstaluj [**Extension Source Viewer**](https://addons.opera.com/pl/extensions/details/extension-source-viewer/?display=en "https://addons.opera.com/pl/extensions/details/extension-source-viewer/?display=en").

2. Wejdź na [**chrome.google.com/webstore**/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb") i kliknij na pasku adresu na ikonkę **CRX**, a następnie kliknij na `install`.

3. Wejdź na `opera://extensions`, a następnie kliknij **Zainstaluj** przy **Nano Defender**, potwierdź jeszcze raz naciskając **Zainstaluj**.

4. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo"), to lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.

5. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Subskrybuj listę filtrów [Adblock Warning Removal List](ubo://subscribe?location=https%3A%2F%2Feasylist-downloads.adblockplus.org%2Fantiadblockfilters.txt&title=Adblock%20Warning%20Removal%20List)

   - Subskrybuj listę filtrów [Nano Defender Integration](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoMirror%2FNanoDefender.txt&title=Nano%20Defender%20Integration)
   - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Subskrybuj listę filtrów [Nano filters](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoBase.txt&title=Nano%20filters)

   - Subskrybuj listę filtrów [Nano filters - Whitelist](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

6. Ciesz się z działającego **Nano Defendera**!

</details></blockquote><hr>

{{% pageinfo %}}
⚠️ **UWAGA!!!!** ⚠️ Nie gwarantuję, że Nano Defender będzie w pełni działał na Operze, gdyż nie obsługuje ona pewnych API, które Chrome obsługuje, więc może się zdarzyć, że coś nie będzie działać i niestety ze strony autora rozszerzenia nie ma wsparcia dla użytkowników Opery.
{{% /pageinfo %}}

## **IV. ![Chrome][Chrome]GOOGLE CHROME/![Chromium][Chromium]CHROMIUM/![Vivaldi][Vivaldi]VIVALDI**
1. Zainstaluj [**Nano Defender**](https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb "https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb")
2. Jeśli używasz [Nano Adblockera](https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo "https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo"), lista **Nano Defender Integration** powinna się automatycznie po chwili aktywować - opcjonalnie sprawdź i aktywuj.
3. Jeśli używasz uBlocka Origin wykonaj dodatkowe kroki:

   - Subskrybuj listę filtrów [Adblock Warning Removal List](ubo://subscribe?location=https%3A%2F%2Feasylist-downloads.adblockplus.org%2Fantiadblockfilters.txt&title=Adblock%20Warning%20Removal%20List)

   - Subskrybuj listę filtrów [Nano Defender Integration](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoMirror%2FNanoDefender.txt&title=Nano%20Defender%20Integration)
   - Wejdź do panelu sterowania uBlocka, zaznacz **Jestem zaawansowanym użytkownikiem** w karcie **Ustawienia**. Następnie kliknij na zębatkę, która się pojawiła obok tej opcji i zmień wartość `unset` dla wpisu `userResourcesLocation` na: `https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt`

      **Uwaga: Jeśli już wykorzystujesz opcję User Resources, to zamień uBlock Origin na Nano Adblocker lub ręcznie połącz (scal) zasoby z uBlock Origin**
![img-1](https://i.imgur.com/4fOOUO8.png)

   - Subskrybuj listę filtrów [Nano filters](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoBase.txt&title=Nano%20filters)

   - Subskrybuj listę filtrów [Nano filters - Whitelist](ubo://subscribe?location=https%3A%2F%2Fgitcdn.xyz%2Frepo%2FNanoAdblocker%2FNanoFilters%2Fmaster%2FNanoFilters%2FNanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist)

4. Ciesz się z działającego **Nano Defendera**! -->

[Firefox]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/firefox/firefox_24x24.png "Mozilla Firefox"
[Waterfox Classic]: https://raw.githubusercontent.com/WaterfoxCo/Waterfox-Classic/classic/browser/branding/unofficial/default24.png "Waterfox Classic"
[Waterfox G]: https://raw.githubusercontent.com/WaterfoxCo/Waterfox/current/waterfox/browser/branding/default24.png "Waterfox"
[Chrome]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chrome/chrome_24x24.png "Google Chrome"
[Chromium]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chromium/chromium_24x24.png "Chromium"
[Vivaldi]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/vivaldi/vivaldi_24x24.png "Vivaldi"
[Opera]: https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/opera/opera_24x24.png "Opera"
