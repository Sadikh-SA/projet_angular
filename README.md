# ProjetAngular
Description : Site de vente de livres.

Pour récupérer le projet lancer la commande:
git clone https://github.com/Sadikh-SA/projet_angular.git


S'assurer d'avoir node et npm installé. Si non, l'installer : https://nodejs.org/fr/download/ 

## Back-End
Description : le dossier Back-End du projet contient une l’API connectée à une base de données mongodb.

Déplacez-vous dans le dossier `Back-End/`
cd chemin/Back-End

Pour installer les dépendances et lancer le serveur, saisissez les commandes suivantes :

npm install (Pour installer les dépendances)
npm start (Pour démarrer l’API)

## Front-End
Description : Vue globale des fonctionnalités

Déplacez-vous dans le dossier `Front-End/`
cd chemin/Front-End

Pour compiler, installer les dépendances et exécuter l’application lancé les commandes suivantes :

npm install  (Pour installer les dépendances) 

ng serve –o (Pour lancé le serveur et ouvrir l’application dans le navigateur)

Dans le cas où le serveur ne se lance pas,
Faite un coup de : rm -rf node_modules
Et relancer les commandes précédentes.

## Tests unitaire avec Jasmine & Karma
- Executer l'API 
- Se deplacer dans le dossier Front-End puis lancer la commande: ng test puis visualiser par la console ou le navigateur.

