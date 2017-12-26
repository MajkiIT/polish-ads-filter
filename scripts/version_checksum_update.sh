
#!/bin/bash
# Skrypt został zrobiony przez hawkeye116477

# Ustawienie polskiej strefy czasowej
export TZ=":Poland"

# Aktualizacja daty i godziny w polu Last modified
export LC_ALL=en_US.UTF-8
data=$(date +"%d %b %Y %H:%M:%S UTC%:::z")
sed -i '/! Last modified:/c\'"! Last modified: $data" $1

# Aktualizacja wersji
wersja=$(date +"%Y%m%d%H%M")
sed -i '/! Version:/c\'"! Version: $wersja" $1

# Aktualizacja pola aktualizacja
export LC_ALL=pl_PL.UTF-8
aktualizacja=$(date +"%a, %d %b %Y, %H:%M:%S UTC%:::z")
sed -i '/! v./c\'"! v.$wersja aktualizacja: $aktualizacja" $1

# Aktualizacja sumy kontrolnej
sciezka=$(dirname "$0")
perl $sciezka/addChecksum.pl $1
