#!/bin/bash

delay=2

# Exercício 1

echo -e "\nNavegando ate unix_tests"
cd unix_tests
sleep $delay

# Exercício 2

echo -e "\nExecutando comando ls -l"
ls -l
sleep $delay

# Exercício 3

echo -e "\nAlterando permissões do arquivo bunch_of_things.txt"
chmod 666 bunch_of_things.txt
ls -l
sleep $delay

# Exercício 4

echo -e "\nRetirando permissões do arquivo bunch_of_things.txt"
chmod 444 bunch_of_things.txt
ls -l
sleep $delay

# Exercício 5

echo -e "\nVoltando com permissões iniciais do arquivo bunch_of_things.txt"
chmod 644 bunch_of_things.txt
ls -l
sleep $delay
