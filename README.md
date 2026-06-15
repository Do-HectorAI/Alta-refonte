# Alta Assurances — Site web

Site vitrine statique (HTML / CSS / JS, sans étape de build) pour Alta Assurances,
organisme de formation DDA certifié Qualiopi.

## Structure

```
index.html              Accueil (épuré)
a-propos.html           À propos
formations.html         Nos formations (page placeholder, à refaire)
faq.html                FAQ
contact.html            Contact (formulaire mailto:)
connexion.html          Connexion / Inscription (maquette)
mentions-legales.html   Mentions légales
cgv.html                CGV / CGU
assets/
  css/styles.css        Feuille de style globale (commentée)
  js/main.js            Interactions (menu, accordéon, cartes, mailto)
  img/                  Logos, photos, icônes
  docs/                 Catalogue PDF
references/             Ancien site (sauvegarde, non publié)
```

## Direction artistique

- **Titres** : Clash Display · **Corps** : Satoshi (chargées depuis Fontshare)
- **Couleurs** : `#12223A` (principal), `#314D7A`, `#4E72AC` — fonds clairs dominants
- Boutons toujours arrondis, beaucoup d'espace blanc, transitions douces, 100 % responsive

## Publication sur GitHub Pages

1. Repository → **Settings** → **Pages**
2. *Build and deployment* → Source : **Deploy from a branch**
3. Branch : **main** / dossier **/ (root)** → **Save**
4. Le site sera disponible à l'adresse indiquée par GitHub (quelques minutes).

Le fichier `.nojekyll` désactive le traitement Jekyll (publication directe des fichiers).

## À compléter avant mise en ligne définitive

- **Mentions légales** : raison sociale, forme juridique, SIRET, hébergeur, directeur de publication, etc. (champs `[À compléter]`).
- **CGV/CGU** : tarifs, paiement, rétractation, règlement des litiges (champs `[À compléter]`) — à valider juridiquement.
- **Page « Nos formations »** : à construire (catalogue détaillé).
- **Connexion / Inscription** : brancher la plateforme externe (voir le commentaire balisé dans `connexion.html`).
- **Instagram** : lien à fournir si souhaité (actuellement masqué ; LinkedIn conservé).
