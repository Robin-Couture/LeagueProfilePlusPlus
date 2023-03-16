## **TP : l'interaction entre JavaScript et le DOM et l'utilisation de l'API Fetch**

### **Objectifs**:

    - Comprendre comment JavaScript et le DOM interagissent pour créer des applications web interactives.
    - Savoir utiliser l'API Fetch pour récupérer des données d'API externes.
    - Savoir manipuler le DOM pour afficher dynamiquement des données en réponse à un événement.
  

### **Prérequis**

    - Connaissance de base de HTML et CSS.
    - Connaissance de base de JavaScript.
  
### **Étape 1 : Création de l'interface utilisateur**
    - Créez un fichier HTML nommé index.html.
    - Ajoutez une balise div avec un identifiant container.
    - Ajoutez un bouton avec un identifiant btn et le texte "Afficher les photos".
    - Ajoutez un fichier CSS nommé style.css et liez-le à votre fichier HTML.
    - Dans votre fichier CSS, ajoutez du style à votre bouton pour qu'il ait un aspect visuel agréable.
  
### **Étape 2 : Écoute de l'événement de clic sur le bouton**
    - Dans votre fichier JavaScript, créez une fonction  nommée fetchPhotos qui sera appelée lors du clic sur le bouton.
    - Utilisez la méthode addEventListener pour écouter l'événement de clic sur le bouton et appeler la fonction fetchPhotos.
  
### **Étape 3 : Récupération des données d'API externes**

    - Dans la fonction fetchPhotos, utilisez **l'API Fetch** pour récupérer des données à partir d'une API externe.
    - La plupart des API externes nécessitent une clé d'API pour y accéder, assurez-vous donc d'en avoir une avant de continuer.
    - Utilisez la méthode fetch pour récupérer les données d'API et stockez-les dans une variable.
    - Les données d'API sont généralement au format JSON, utilisez donc la méthode json() pour convertir les données récupérées en un objet JavaScript.


###  **Étape 4 : Manipulation du DOM pour afficher les données récupérées**

    - Dans la fonction fetchPhotos, utilisez la méthode getElementById pour récupérer l'élément avec l'identifiant container.
    - Parcourez l'objet JavaScript contenant les données d'API et créez des éléments HTML pour chaque élément.
    - Pour chaque élément, créez un élément img avec l'URL de l'image et ajoutez-le à l'élément container.
    Étape 5 : Finalisation du projet
    - Testez votre projet en cliquant sur le bouton pour afficher les photos.
    - Ajoutez du style à votre projet pour le rendre plus agréable à regarder.


### Etape 5: Partage du projet

    -  Partagez votre projet avec vos amis et montrez-leur votre nouvelle compétence en programmation web. 
    -  Pour cela tentez de synchroniser votre projet avec github en utilisant Git.
    -  Ensuite déployez votre site avec Github Pages, Vercel ou encore Netlify. Appelez l'enseignant lorsque vous atteignez cette étape...
