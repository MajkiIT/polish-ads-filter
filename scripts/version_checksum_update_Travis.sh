#!/bin/bash

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
    # Założenie: kodowanie UTF-8 i styl końca linii Unix
    # Usuwanie starej sumy kontrolnej i pustych linii
    grep -v '! Checksum: ' $i | grep -v '^$' > $i.chk
    # Generowanie sumy kontrolnej... Binarny MD5 zakodowany w Base64
    suma_k=`cat $i.chk | openssl dgst -md5 -binary | openssl enc -base64 | cut -d "=" -f 1`
    # Zamiana atrapy sumy kontrolnej na prawdziwą
    sed -i "/! Checksum: /c\! Checksum: $suma_k" $i
    rm -r $i.chk

    # Przejście do katalogu, w którym znajduje się lokalne repozytorium git
    cd $sciezka/..
    
    # Ustawianie nazwy kodowej (krótszej nazwy listy filtrów) do opisu commita w zależności od tego, co jest wpisane w polu „Codename:". Jeśli nie ma takiego pola, to codename=nazwa_pliku.
    if grep -q "! Codename" $i; then
        filtr=$(grep -oP '! Codename: \K.*' $i);
    else
        filtr=$(basename $i);
    fi
    
    # Dodawanie zmienionych plików do repozytorium git
    git add $i
    git commit -m "Update $filtr to version $wersja [ci skip]"
    git push https://MajkiIT:${GH_TOKEN}@github.com/MajkiIT/polish-ads-filter.git HEAD:master
done
