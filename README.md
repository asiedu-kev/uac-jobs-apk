# uac-jobs-apk
Application de partage de bourses et d'opportunités professionnelles pour le compte du concours lancée par la MasterCard Foundation au profit de l'UAC

Pour concevoir cette application, nous avons utilisé la technologie react-native.
Ainsi pour démarrer le projet après l'avoir cloné,il faut d'abord installer react-native.

Ensuite lancer un yarn install car notre gestionnaire de paquet est yarn,utiliser npm créerait des conflits.

Après le yarn install, il faut ajouter au dossier android le fichier local.properties permettant d'avoir accès aux SDK d'android disponible sur votre machine.

Par la suite lancer le serveur avec yarn start puis démarrer l'appli après avoir mis en marche 
un émulateur ou connecté un device avec yarn android ou yarn run android.

En cas d'erreur,nettoyer le cache et reprenez le processus.

Pour nettoyer le cache,vous pouvez faire un yarn cache clean ou aller dans le répertoire android pour faire un ./gradlew clean puis relancer le projet.
Une fois l'application démarrée vous aurez le écrans suivants:

![alt text](https://github.com/josh050-programmer/uac-jobs-apk/blob/master/Screenshot_20201223-152328.png?raw=true)

![alt text](https://github.com/josh050-programmer/uac-jobs-apk/blob/master/Screenshot_20201223-001519.png?raw=true)
