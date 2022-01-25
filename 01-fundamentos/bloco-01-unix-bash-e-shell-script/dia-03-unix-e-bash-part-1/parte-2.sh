#!/bin/bash

delay=2

# Exercício 1
echo -e "/nBaixando arquivo countries"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercício 2
echo -e "/nMostrando conteudo na tela"
cat countries.txt
sleep $delay

# Exercício 3
echo -e "/nMostrando conteudo página por página"
less countries.txt
sleep $delay

# Exercício 4
echo -e "/nMostrando conteudo e procurando Zambia"
less countries.txt
/Zambia
sleep $delay

# Exercício 5
echo -e "/nBuscando Brazil"
grep "Brazil" countries.txt
sleep $delay

# Exercício 6
echo -e "/nBuscando Brazil utilizando lower case"
grep -i "brazil" countries.txt
sleep $delay

# Exercício 7
echo -e "/nBuscando frases que não contenham a palavra fox"
grep -iv "fox" phrases.txt
sleep $delay

# Exercício 8
echo -e "/nContando o numero de palavras do arquivo phrases.txt"
wc -w phrases.txt
sleep $delay

# Exercício 9
echo -e "/nContando numero de linhas do arquivo phrases.txt"
wc -l phrases.txt 
sleep $delay

# Exercício 10
echo -e "/nCriando arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

# Exercício 11
echo -e "/nListando todos os arquivos em unix_tests"
ls -a
sleep $delay

# Exercício 12
echo -e "/nListando todos arquivos que terminam com txt"
ls -a *txt
sleep $delay

# Exercício 13
echo -e "/nListando todos os arquivos que terminam com txt ou tbt"
ls -a *txt *tbt
sleep $delay

# Exercício 14
echo -e "/nAcessando manual do comando ls"
man ls
sleep $delay