#Benchmark

## Introduction

Ce projet contient tous les tests de performances pour tester Sequelize

## Tests

### Performances brute

On va tester les performances de Sequelize sur des requêtes simple (SELECT, INSERT, UPDATE, DELETE). En guise d'indicateur, on va faire les mêmes requêtes en natif pour voir s'il y a des différences notables entre les deux.

### Tests d'optimisation des requêtes SQL générée

On va tester les requêtes SQL que génère Sequelize pour voir si elles sont optimisées par rapport à ce qu'on pourrait faire nativement.

