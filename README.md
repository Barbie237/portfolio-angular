# Portfolio — Anne Barbara Tebu
## Développeuse Web | Angular + TailwindCSS

---

## 📁 Structure du projet

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/               ← Barre de navigation fixe
│   │   │   ├── hero/                 ← Section d'accueil hero
│   │   │   ├── about/                ← Section "À propos"
│   │   │   ├── projects/             ← Grille des projets (cliquables)
│   │   │   ├── skills/               ← Barres de compétences
│   │   │   ├── contact/              ← Section contact
│   │   │   ├── footer/               ← Pied de page
│   │   │   └── project-detail/       ← Page détail projet (screenshots + lien)
│   │   ├── home/
│   │   │   └── home.component.ts     ← Page d'accueil (assemble les sections)
│   │   ├── models/
│   │   │   └── project.model.ts      ← Interface TypeScript Project
│   │   ├── services/
│   │   │   └── project.service.ts    ← Données de tous les projets
│   │   ├── app.component.ts          ← Composant racine + fond animé
│   │   ├── app.routes.ts             ← Routes: / et /project/:id
│   │   └── app.config.ts             ← Configuration Angular
│   ├── index.html
│   ├── main.ts
│   └── styles.css                    ← TailwindCSS + animations globales
├── tailwind.config.js                ← Thème personnalisé (couleurs, fonts)
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Installation et lancement

### Prérequis
- **Node.js** v18+ ([nodejs.org](https://nodejs.org))
- **npm** v9+

### Étapes

```bash
# 1. Aller dans le dossier du projet
cd portfolio-angular

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
# ou
ng serve
```

Ouvrez ensuite **http://localhost:4200** dans votre navigateur.

---

## ✨ Fonctionnalités

- **Page d'accueil** avec sections : Hero, À propos, Projets, Compétences, Contact
- **Navigation** fixe avec scroll smooth vers les sections
- **Fond animé** avec blobs colorés flottants
- **Grille de projets** cliquable — chaque carte mène vers une page dédiée
- **Page détail projet** (`/project/:id`) avec :
  - Bannière gradient + emoji
  - Description complète
  - Liste des tâches réalisées
  - **Galerie de captures d'écran** avec lightbox (clic pour agrandir)
  - **Lien vers le site en ligne** (si disponible)
  - Environnement technique
- **Design responsive** mobile-first avec TailwindCSS
- **Animations** CSS : entrées, hover, shimmer, pulse

---

## 🖼️ Ajouter de vraies captures d'écran

Dans `src/app/services/project.service.ts`, remplacez les URLs `placehold.co` par de vraies URLs :

```typescript
screenshots: [
  {
    url: 'assets/screenshots/comcam-dashboard.png',  // image locale
    caption: 'Dashboard principal'
  },
  {
    url: 'https://mon-site.com/screenshot.jpg',  // URL externe
    caption: 'Vue de la liste'
  }
]
```

Placez vos images locales dans `src/assets/screenshots/`.

---

## 🎨 Thème de couleurs

Défini dans `tailwind.config.js` :

| Variable     | Couleur   | Usage                    |
|-------------|-----------|--------------------------|
| `primary`   | `#FF6B9D` | Rose — accent principal  |
| `secondary` | `#C239B3` | Violet-rose              |
| `accent`    | `#FEC163` | Jaune doré — titres      |
| `dark`      | `#1A1A2E` | Fond principal           |
| `light`     | `#F8F9FA` | Texte clair              |

---

## 🔗 Ajouter un lien de projet

Dans `project.service.ts`, ajoutez le champ `liveUrl` :

```typescript
liveUrl: 'https://url-du-projet.com',
```

Un bouton "Voir le projet en ligne" apparaîtra automatiquement sur la page de détail.

---

## 📦 Build de production

```bash
npm run build
```

Les fichiers sont générés dans `dist/portfolio/`.
