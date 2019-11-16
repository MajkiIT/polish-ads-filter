## Wprowadzenie

"Polskie filtry dla Adblocka, uBlocka i AdGuarda" To sposób oceniania i kategoryzacji elementów. Nie możemy odpowiadać za sposób w jaki rozszerzenia blokujące reklamy korzystają z naszych list, ale obiecujemy aktywnie reagować na [pytania](https://github.com/MajkiIT/polish-ads-filter/issues).

---

## Założenia & Idee

- działamy zgodnie z prawem
- wierzymy w świadomy wybór użytkowników
- nasze listy nie obejmują elementów które są głównym kontentem
- dodajemy do listy możliwie wszystkie pozycje i nie poddajemy się
- wierzymy że użytkownicy sami potrafią znaleźć pożądane przez nich treści
- staramy się nie dodawać do filtrów treści pożądanych z punktu widzenia użytkowników
- staramy się zachować jak największą funkcjonalność stron które obejmuje nasz filtr
- staramy się zapewnić jak największą zgodność z pierwotną treścią stron które obejmuje nasz filtr
- wszystkie środki z dotacji przeznaczamy na dalsze [wsparcie i rozwój filtrów](https://patronite.pl/polskiefiltry)
- nim podejmiemy jakąś ważną decyzje, poddajemy ją [głosowaniu społeczności](https://fb.com/CertyficateIT/)

---

## FAQ

### Jaki adblock wybrać?

- admucher, pihole, dnsy... najmniej zaawansowana składnia blokowania reklam
- adblock, opera, privoxy... średnio zaawansowana składnia blokowania reklam
- ublock origin, adguard... najbardziej zaawansowana składnia blokowania reklam

##

najlepiej ublock origin + nano defender + polskie filtry<br/>
<code>https://github.com/MajkiIT/polish-ads-filter#about</code>

jak nie ma takiej możliwości to warto dodać dns'y adguarda<br/>
<code>https://adguard.com/pl/adguard-dns/overview.html</code>

### Czym się kierować przy wyborze listy filtrów?

pamiętaj by subskrybować te listy filtrów co do których<br/>
masz absolutną pewność, nie subskrybuj jeśli nie wiesz co robi

pamiętaj by subskrybować tylko aktualne listy filtrów<br/>
jeśli masz jakiś problem z listą filtrów, napisz do jej opiekuna

zwracaj uwagę by nie dublować niepotrzebnie list filtrów<br/>
oraz rozszerzeń/programów do blokowania reklam w internecie


##

### Nie działa mi! Co robić?

zasubskrubuj wymagane do działania listy filtrów
<code>https://github.com/MajkiIT/polish-ads-filter#about</code>

---

zaktualizuj wymagane do działania listy filtrów
<code>https://github.com/MajkiIT/polish-ads-filter/wiki/Dodawanie-i-aktualizacja-filtr%C3%B3w-w-Adblock-Plus,-uBlock-Origin-lub-AdGuard#aktualizowanie</code>

---

dalej nie działa?

`możesz sprawdzić za pomocą "dziennika żądań" zawartego w ublocku origin lub adguardzie, który filtr ci psuje daną strone.
po czym selektywnie powyłączać listy które zawierają ten filtr i zgłosić błąd do autorów list powodujących dany błąd`

- rek, zewn. ogólne [ENG]
  - proste do https://github.com/easylist/easylist/issues
  - trudne do https://github.com/uBlockOrigin/uAssets/issues
- rek, zewn. ogólne [PL]
  - https://github.com/MajkiIT/polish-ads-filter/issues

---

- ele. irytujące [ENG]
  - proste do https://github.com/ryanbr/fanboy-adblock/issues
  - trudne do https://github.com/AdguardTeam/AdguardFilters/issues
- ele. irytujące [PL]
  - https://polishannoyancefilters.netlify.com/issues/


##

### Jestem twórcą stron www, jak żyć?

pomyśl o nowych formach `nieinwazyjnej` monetyzacji

używaj cdn dla js/css i plików graficznych <br/>
https://statically.io/imgpx <br/>
https://statically.io/

zdecentralizuj swoje serwery <br/>
https://github.com/ipfs/go-ipfs#readme
