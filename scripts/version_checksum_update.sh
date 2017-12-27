#!/bin/bash
# Skrypt został zrobiony przez hawkeye116477

for i in "$@"; do
    # Sciezka to katalog, w którym jest skrypt
    sciezka=$(dirname "$0")

    # Ustawianie nazwy listy filtrów w zależności od nazwy pliku. Jeśli nazwa pliku nie jest zamieszczona w warunkach if, to trzeba podać nazwę listy filtrów.
    if [[ $(basename $i) == *"adblock_social_list.txt"* ]]; then
        filtr="Polish social filters";
    elif [[ $(basename $i) == *"adblock_cookies.txt"* ]]; then
        filtr="Polish cookies filters";
    elif [[ $(basename $i) == *"adblock_anty-dotacje.txt"* ]]; then
        filtr="Polish anti-donate filters";
    elif [[ $(basename $i) == *"adblock_wewnetrzne.txt"* ]]; then
        filtr="Polish inside filters";
    elif [[ $(basename $i) == *"adblock_adguard.txt"* ]]; then
        filtr="Polish filters - supplement for AdGuard";
    elif [[ $(basename $i) == *"adblock_ublock.txt"* ]]; then
        filtr="Polish filters - supplement for uBlock";
    elif [[ $(basename $i) == *"adblock.txt"* ]]; then
        filtr="Official Polish filters for AdBlock, uBlock Origin & AdGuard";
    elif [[ $(basename $i) == *"hostfile.txt"* ]]; then
        filtr="Polish filters to Pi hole";
    else
        printf "Podaj nazwę listy filtrów: "
        read filtr
    fi

    # Ustawienie polskiej strefy czasowej
    export TZ=":Poland"

    # Aktualizacja daty i godziny w polu Last modified
    export LC_ALL=en_US.UTF-8
    data=$(date +"%d %b %Y %H:%M:%S UTC%:::z")
    sed -i '/! Last modified:/c\'"! Last modified: $data" $i

    # Aktualizacja wersji
    wersja=$(date +"%Y%m%d%H%M")
    sed -i '/! Version:/c\'"! Version: $wersja" $i

    # Aktualizacja pola aktualizacja
    export LC_ALL=pl_PL.UTF-8
    aktualizacja=$(date +"%a, %d %b %Y, %H:%M:%S UTC%:::z")
    sed -i '/! v./c\'"! v.$wersja aktualizacja: $aktualizacja" $i

    # Aktualizacja sumy kontrolnej
    perl $sciezka/addChecksum.pl $i

    # Przejście do katalogu gdzie znajduje się lokalne repozytorium git
    cd $sciezka/..
    
    # Dodawanie zmienionych plików do repozytorium git
    git add $i
    printf "Podaj rozszerzony opis commitu do pliku $filtr, np 'Fix #1, fix #2' (bez ciapków; jeśli nie chcesz rozszerzonego opisu, to możesz po prostu nic nie wpisywać): "
    read roz_opis
    git commit -S -m "Update $filtr to version $wersja" -m "${roz_opis}"
done

# Wysyłanie zmienionych plików do repozytorium git
echo "Czy chcesz teraz wysłać do gita zmienione pliki?"
select yn in "Tak" "Nie"; do
    case $yn in
        Tak ) 
        git push
        break;;
        Nie ) break;;
esac
done
        
