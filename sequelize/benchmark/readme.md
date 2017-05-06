#Benchmark

## Introduction

Ce projet contient tous les tests de performances pour tester Sequelize

## Environnement

Tous les tests ont été effectués sur Mac OS. Pour fonctionner correctement, certaines bibliothèques ont besoin que certains modules soient installés dans le système, avant de passer à l'installation, merci de bien installer toutes les dépendances

## Dépendances

docker et docker-compose: Pour créer une base de donnée dans une machine virtuelle.


## Installation

Installer Sequelize CLI pour gérer les migrations
`npm i -g sequelize-cli`

Installer les dépendances
`npm install`

Lancer docker et la base Postgres
`docker-compose up`

Faire la migration des tables
`sequelize db:migrate`

Ajouter des données dans les tables
`sequelize db:seed:all`

Lancer le test brut
`npm run test:brut`

## Tests

### Performances brute

On va tester les performances de Sequelize sur des requêtes simple (SELECT, INSERT, UPDATE, DELETE). En guise d'indicateur, on va faire les mêmes requêtes en natif pour voir s'il y a des différences notables entre les deux.

### Tests d'optimisation des requêtes SQL générée

On va tester les requêtes SQL que génère Sequelize pour voir si elles sont optimisées par rapport à ce qu'on pourrait faire nativement.

