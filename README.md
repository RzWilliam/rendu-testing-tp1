# Gestionnaire de Membres pour une Boutique de Vêtements

## Groupe du TP
- William RODRIGUEZ
- Corentin KISTLER

## Description
Ce projet est un système de gestion des membres pour une boutique de vêtements, permettant l'inscription des membres, la gestion des commandes, et la navigation à travers plusieurs pages. Le projet inclut des tests unitaires, des tests d'intégration et des tests système utilisant Mocha, ainsi qu'un script Selenium pour simuler le parcours utilisateur complet.

## Installation
Assurez-vous d'avoir Node.js et npm installés sur votre machine. Clonez ce dépôt et installez les dépendances nécessaires :

```sh
git clone https://github.com/RzWilliam/rendu-testing-tp1.git
cd rendu-testing-tp1
npm install
```

## Exécution des Tests Mocha
Pour exécuter les tests unitaires, d'intégration et système avec Mocha, utilisez la commande suivante :
```bash
npm test
```
Cette commande exécutera tous les tests situés dans le dossier `__tests__`.

## Exécution de Selenium
Pour exécuter le script Selenium qui simule le parcours utilisateur complet, utilisez la commande suivante :
```bash
npm run selenium
```
Ce script ouvrira un navigateur, naviguera à travers les pages de l'application, et vérifiera le bon fonctionnement de l'inscription des membres et du processus de commande.

## Structure du Projet
```bash
/boutique
├── src
│ ├── controllers
│ │ ├── memberController.js
│ │ └── orderController.js
│ ├── models
│ │ ├── member.js
│ │ └── order.js
│ ├── views
│ │ ├── memberRegistration.html
│ │ ├── productSelection.html
│ │ ├── orderReview.html
│ │ └── orderConfirmation.html
│ ├── app.js
│ └── routes.js
├── __tests__
│ ├── unit
│ │ ├── member.test.js
│ │ └── order.test.js
│ ├── integration
│ │ ├── memberIntegration.test.js
│ │ └── orderIntegration.test.js
│ └── system
│ ├── memberSystem.test.js
│ └── orderSystem.test.js
├── seleniumTest.js
└── package.json

```