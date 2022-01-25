#!/bin/bash

delay=2

# Exercício 1

echo -e "\nNavegando ate unix_tests"
cd unix_tests
sleep $delay

# Exercício 2

echo -e "\nCriando arquivo skills2.txt"
cat > skills2.txt
sleep $delay

# Exercício 3

echo -e "\nAdicionando itens ao arquivo skills2.txt"
cat >> skills2.txt
sleep $delay

# Exercício 4

echo -e "\nContando linhas do arquivo skills2.txt"
wc -l skills2.txt
sleep $delay

# Exercício 5

echo -e "\nCriando arquivo topskills.txt a partir do skills2.txt ordenando e mostrando as 3 primeiras linhas"
cat skills2.txt | sort | head -3 > topskills.txt
sleep $delay

# Exercício 6

echo -e "\nCriando arquivo phrases2.txt"
cat > phrases2.txt
sleep $delay

# Exercício 7

echo -e "\nContando número de linhas que tem br no arquivo phrases2.txt tem"
grep -c br phrases2.txt
sleep $delay

# Exercício 8

echo -e "\nContando número de linhas que não tem br no arquivo phrases2.txt tem"
grep -cv br phrases2.txt
sleep $delay

# Exercício 9

echo -e "\nAdicionando 2 nomes de paises ao arquivo phrases2.txt"
cat >> phrases2
sleep $delay

# Exercício 10

echo -e "\nCriando arquivo bunch_of_things.txt com os arquivos phrases2.txt e countries.txt"
cat phrases2.txt countries.txt >> bunch_of_things.txt
sleep $delay

# Exercício 11

echo -e "\nOrdenando arquivo bunch_of_things.txt"
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $delay