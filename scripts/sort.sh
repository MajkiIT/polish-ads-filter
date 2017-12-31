#!/bin/bash

for (( i=1; $i <= 37; i++ )) ; do

	let poczatek=i
	let koniec=i+1
	
	poczatek1=`cat -n adblock.txt | grep "!$poczatek#" | awk '{print $1;}'`
	koniec1=`cat -n adblock.txt | grep "!$koniec#" | awk '{print $1;}'`
	
	let koniec2=(koniec1-1)
	
	sed -n "${poczatek1},${koniec2}p" adblock.txt > sekcja$poczatek.txt
	sort -u sekcja$poczatek.txt > sekcja_po$poczatek.txt

done
