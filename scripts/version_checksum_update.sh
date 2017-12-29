#!/bin/bash
# Skrypt został zrobiony przez hawkeye116477

for i in "$@"; do
    # Ustawienie polskiej strefy czasowej
    export TZ=":Poland"

    # Aktualizacja daty i godziny w polu „Last modified"
    export LC_ALL=en_US.UTF-8
    data=$(date +"%d %b %Y %H:%M:%S UTC%:::z")
    sed -i '/! Last modified:/c\'"! Last modified: $data" $i

    # Aktualizacja wersji
    wersja=$(date +"%Y%m%d%H%M")
    sed -i '/! Version:/c\'"! Version: $wersja" $i

    # Aktualizacja pola „aktualizacja"
    export LC_ALL=pl_PL.UTF-8
    aktualizacja=$(date +"%a, %d %b %Y, %H:%M:%S UTC%:::z")
    sed -i '/! v./c\'"! v.$wersja aktualizacja: $aktualizacja" $i

    # Sciezka to miejsce, w którym znajduje się skrypt
    sciezka=$(dirname "$0")
    
    # Aktualizacja sumy kontrolnej
    perl $sciezka/addChecksum.pl $i

    # Przejście do katalogu, w którym znajduje się lokalne repozytorium git
    cd $sciezka/..
    
    # Ustawianie nazwy kodowej (krótszej nazwy listy filtrów) do opisu commita w zależności od tego, co jest wpisane w polu „Codename:". Jeśli nie ma takiego pola, to trzeba podać nazwę kodową dla listy filtrów.
    if grep -q "! Codename" $i; then
        filtr=$(grep -oP '! Codename: \K.*' $i);
    else
        printf "Podaj nazwę kodową dla listy filtrów $(basename $i): "
        read filtr
    fi
    
    # Dodawanie zmienionych plików do repozytorium git
    git add $i
    printf "Podaj rozszerzony opis commita do listy filtrów $filtr, np 'Fix #1, fix #2' (bez ciapek; jeśli nie chcesz rozszerzonego opisu, to możesz po prostu nic nie wpisywać): "
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
        
