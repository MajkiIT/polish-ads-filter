## [Nano Defender](https://github.com/jspenguin2017/uBlockProtector/releases) to dodatek do [uBlocka Origin](https://github.com/gorhill/uBlock/releases) lub [Nano Adblockera](https://github.com/NanoAdblocker/NanoCore/releases) mający za zadanie blokować skrypty anty-adblock które uniemożliwiają dostęp do stron

### aby zainstalować nano adblocker z nano defenderem

#### na Chrome

1. wejdź w poniższe linki

<ul>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki

#### na Operze

1. wejdź w poniższe linki

<ul>

<code>https://addons.opera.com/pl/extensions/details/install-chrome-extensions/</code>

<code>https://chrome.google.com/webstore/detail/nano-adblocker/gabbbocakeomblphkmmnoamkioajlkfo</code>

<code>https://chrome.google.com/webstore/detail/nano-defender/ggolfgbegefeeoocgjbmkembbncoadlb</code>

</ul>

2. zainstaluj podane dodatki zgodnie z kolejnością

#### na Firefox Quantum ( [działa tylko z ublockiem origin](https://github.com/konoromihimaries/polishsubfilters/blob/master/note/nano_defender.md#aby-zainstalowa%C4%87-nano-defender-z-ublockiem-origin) )

1. wejdź w poniższe linki

<ul>

<code>https://addons.mozilla.org/pl/firefox/addon/ublock-origin/</code>

<code>https://github.com/LiCybora/NanoDefenderFirefox/releases/</code>

</ul>

2. zainstaluj podane dodatki

3. pamiętaj aby regularnie instalować nowszą wersje dodatku Nano Defender, ponieważ firefox nie obsługuje jego automatycznej aktualizacji

### aby zainstalować nano defender z ublockiem origin

1. zainstaluj ublock origin wraz z nano defenderem

2. wejdź w [opcje](https://user-images.githubusercontent.com/22258847/39938362-37c58cf4-5542-11e8-8203-57fc5a78a3d7.png) dodatku ublock origin

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

8. zasubskrubuj poniższe listy filtrów

<ul>

([Subskrybuj][NanoDefender]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt</code>

([Subskrybuj][NanoBase]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt</code>

([Subskrybuj][NanoWhitelist]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt</code>

([Subskrybuj][NanoAnnoyance]) <code>https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt</code>

([Subskrybuj][AdblockWarningRemovalList]) <code>https://easylist-downloads.adblockplus.org/antiadblockfilters.txt</code>

</ul>

### aby subskrybować dodatkowe listy wejdź tutaj

<code>https://github.com/MajkiIT/polish-ads-filter#about</code>

[NanoDefender]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt&title=Nano%20Defender%20Integration
[NanoBase]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt&title=Nano%20filters
[NanoWhitelist]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt&title=Nano%20filters%20-%20Whitelist
[NanoAnnoyance]: https://subscribe.adblockplus.org/?location=https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt&title=Nano%20filters%20-%20Annoyance
[AdblockWarningRemovalList]: https://subscribe.adblockplus.org/?location=https://easylist-downloads.adblockplus.org/antiadblockfilters.txt&title=Adblock%20Warning%20Removal%20List

##

###### oryginany poradnik `https://jspenguin2017.github.io/uBlockProtector/#extra-installation-steps-for-ublock-origin`
###### oryginany poradnik `https://jspenguin2017.github.io/uBlockProtector/#extra-installation-steps-for-ublock-origin`
