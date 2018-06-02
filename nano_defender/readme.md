## Nano Defender to dodatek do uBlock Origin/Nano Adblockera mający za zadanie blokować skrypty anty-adblock

### aby zainstalować z nano adblockerem

#### na Chrome

1. wejdź w poniższe linki

<ul>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>
<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj obydwa dodatki

#### na Firefox ( działa tylko z ublockiem origin )

1. wejdź w link

<ul>

<code>https://github.com/krystian3w/NanoDefenderFirefox/releases</code>

</ul>

2. po pobraniu zainstaluj dodatek wybierając zaawansowaną opcje `zainstaluj dodatek z pliku` znajdującą się w panelu dodatków `about:addons` przeglądarki firefox

3. pamiętaj aby regularnie instalować nowszą wersje dodatku Nano Defender, ponieważ firefox nie obsługuje jego automatycznej aktualizacji

### aby zainstalować nano defender z ublockiem origin

1. zainstaluj ublock origin wraz z nano defenderem

2. wejdź w opcje dodatku ublock origin

3. wejdź w zakładkę "Ustawienia"

4. zaznacz opcje "Jestem zaawansowanym użytkownikiem"

5. kliknij w ikonkę trzech trybików
![img-1](https://i.imgur.com/4fOOUO8.png)

6. zmień wartość `userResourcesLocation unset` na 
```
userResourcesLocation https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoResources.txt
```

![img-2](https://i.imgur.com/hoxZwxz.png)

7. kliknij przycisk "Zastosuj zmiany"

8. wejdź w zakładkę "Listy filtrów"

9. włącz filtr "Adblock Warning Removal List" 

10. zasubskrubuj poniższe listy filtrów

<ul>

([Subskrybuj][NanoDefender]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt</code>

([Subskrybuj][NanoBase]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt</code>

([Subskrybuj][NanoWhitelist]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt</code>

([Subskrybuj][NanoAnnoyance]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt</code>

</ul>

### aby subskrybować dodatkowe listy wejdź tutaj

<code>https://github.com/MajkiIT/polish-ads-filter#about</code>

[NanoDefender]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration
[NanoBase]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20filters
[NanoWhitelist]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist
[NanoAnnoyance]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt&title=Nano%20filters%20-%20Annoyance
