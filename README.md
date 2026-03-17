# Projet Cartographique Saint-Lô Agglomération

Ce projet est une carte interactive web générée à partir de données QGIS via l'extension qgis2web.

## Description

La carte présente différentes couches d'informations géographiques pour la région de Saint-Lô Agglomération :

- **Courbes de niveau** (5m et 25m)
- **Réseau de sentiers de randonnée**
- **Différents types de chemins** (privés, publics, relatifs, légers)
- **Limites administratives**
- **Ombrages topographiques**

## Technologies utilisées

- **OpenLayers** - Bibliothèque de cartographie interactive
- **QGIS2Web** - Extension QGIS pour exporter des cartes web
- **HTML5/CSS3/JavaScript** - Technologies web standards

## Structure du projet

```
├── index.html              # Page principale de la carte
├── layers/                 # Données des couches géographiques
│   ├── *.js               # Fichiers JavaScript des couches
│   └── *.png              # Images d'ombrage et altitude
├── resources/              # Bibliothèques et ressources
│   ├── ol.js              # OpenLayers
│   ├── qgis2web.js        # Fonctionnalités spécifiques qgis2web
│   └── *.css              # Feuilles de style
├── styles/                 # Styles des couches
├── webfonts/              # Polices d'icônes
└── images/                # Images supplémentaires
```

## Utilisation

1. Clonez ce dépôt
2. Ouvrez `index.html` dans un navigateur web moderne
3. La carte se chargera automatiquement avec toutes les couches

## Fonctionnalités

- **Navigation** : Zoom, pan, rotation
- **Sélection de couches** : Activez/désactivez les différentes couches
- **Recherche** : Géocodage via Photon
- **Mesures** : Outils de mesure de distance et surface
- **Popups** : Informations détaillées au clic sur les éléments

## Déploiement

Ce projet peut être déployé sur n'importe quel serveur web statique (GitHub Pages, Netlify, etc.) car il ne nécessite aucun backend.

## Licence

Vérifiez la licence des données sources auprès de Saint-Lô Agglomération pour les conditions d'utilisation.
