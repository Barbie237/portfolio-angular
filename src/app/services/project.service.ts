import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'comcam',
      title: 'COMCAM — Système de Gestion Forestière',
      shortDescription: 'Refonte complète d\'un système de collecte et diffusion des données sur l\'exportation des produits bois au Cameroun pour le Ministère des Forêts et de la Faune.',
      fullDescription: 'COMCAM est un système informatique de collecte et de diffusion des données sur l\'exportation des produits bois au Cameroun. Il permet au Ministère des Forêts et de la Faune de disposer de données statistiques fiables et en temps réel sur les volumes et les types des produits bois exportés (grumes, sciages, produits spéciaux, etc.).',
      emoji: '🌳',
      image: '../../assets/img/auth.jpg?text=COMCAM+Poratil',
      gradient: 'from-pink-500 to-purple-600',
      tags: ['Angular', 'Spring Boot', 'Playwright', 'TailwindCSS', 'Scrum'],
      features: [
        'Analyse fonctionnelle et rédaction du cahier des charges',
        'Modélisation BPMN des processus métiers',
        'Développement frontend avec Angular et TailwindCSS',
        'Tests E2E avec Playwright, Cucumber et Allure',
        'Animation des cérémonies Agile',
        'Collaboration étroite avec équipe Backend (Spring Boot / Clean Architecture)',
      ],
      screenshots: [
        { url: '../../assets/img/auth.jpg?text=COMCAM+Poratil', caption: 'Authentification COMCAM — authentification des agents du Ministère des Forêts et de la Faune avec accès chiffré' },
        { url: '../../assets/img/Users.jpg?text=COMCAM+Utilisateurs', caption: 'Module de gestion des utilisateurs — administration des rôles (Admin, Exportateur, PCFC, Responsable COMCAM) avec filtrage avancé' },
        { url: '../../assets/img/report.jpg?text=COMCAM+Rapport', caption: 'Rapport Allure des tests E2E Playwright/Cucumber — scénario BDD validé avec détail des étapes Given/When/Then (statut PASSED)' },
      ],
      company: 'Madia Sarl',
      period: 'Depuis mai 2025 - mars 2026',
      liveUrl: 'https://comcam-ng-ae92f0a8fd4b.herokuapp.com/',
      techEnv: ['Angular', 'TailwindCSS', 'Spring Boot', 'Postman', 'Swagger', 'Bitbucket', 'Jira', 'Cucumber', 'Allure', 'Playwright'],
    },
    {
      id: 'digital-menthor',
      title: 'Digital Menthor — Plateforme E-Learning',
      shortDescription: 'Application web de formation à distance facilitant l\'éducation en ligne avec un système complet de gestion des cours et des apprenants.',
      fullDescription: 'Digital Menthor est une application web de E-learning permettant de faciliter l\'éducation et la formation à distance. En tant que développeuse principale frontend, j\'ai implémenté les interfaces avec Angular, intégré les API Django et mis en place le système d\'authentification.',
      emoji: '📚',
      image: '../../assets/img/dm-dashboard.jpg',
      gradient: 'from-violet-600 to-blue-500',
      tags: ['Angular', 'TailwindCSS', 'Django', 'Bitbucket'],
      features: [
        'Développement principal du frontend Angular',
        'Design moderne et responsive avec TailwindCSS',
        'Intégration des API Django REST Framework',
        'Système d\'authentification sécurisé',
        'Tests unitaires et d\'intégration',
        'Gestion des rôles utilisateurs (apprenants, formateurs, admins)',
      ],
      screenshots: [
  {
    url: '../../assets/img/dm-dashboard.jpg',
    caption: 'Tableau de bord apprenant — accueil personnalisé avec suivi des cours, calendrier et tâches du jour'
  },
  {
    url: '../../assets/img/dm-cours-detail.jpg',
    caption: 'Page de détail d\'un cours — bannière visuelle, description et actions (continuer, mettre en favori)'
  },
  {
    url: '../../assets/img/dm-video.jpg',
    caption: 'Lecteur de cours vidéo — lecture intégrée, prise de notes et panneau Q&A contextuel'
  },
  {
    url: '../../assets/img/dm-login-admin.jpg',
    caption: 'Portail de connexion admin — authentification sécurisée avec SSO Google (MBOA DIGITAL)'
  },
  {
    url: '../../assets/img/dm-admin-home.jpg',
    caption: 'Dashboard administrateur MBOA DIGITAL — gestion des Courses, Users et Progress par organisation'
  },
  {
    url: '../../assets/img/dm-users.jpg',
    caption: 'Gestion des utilisateurs — liste avec statuts (Active, Pending, Disabled) et invitation par email'
  },
  {
    url: '../../assets/img/dm-user-detail.jpg',
    caption: 'Panneau de modification utilisateur — édition des informations, rôle et statut avec filtrage'
  },
  {
    url: '../../assets/img/dm-invite.jpg',
    caption: 'Modal d\'invitation — ajout d\'un membre à l\'organisation avec attribution de rôle'
  },
],
      company: 'MBOA DIGITAL',
      period: 'Oct 2024 — Avr 2025',
      techEnv: ['Angular', 'TailwindCSS', 'Postman', 'Bitbucket', 'Jira', 'Scrum'],
    },
    {
      id: 'ogpa',
      title: 'OGPA — Gestion de Projets Agricoles',
      shortDescription: 'Finaliste du Challenge App Afrique RFI 2023. Solution numérique pour les projets agropastoraux avec application web et mobile.',
      fullDescription: 'L\'Outil de Gestion des Projets Agricoles (OGPA) est une solution numérique complète pour les projets agropastoraux. Elle comprend une application mobile pour la collecte de données terrain et une application web pour gérer producteurs, projets, tâches, plans d\'affaires et tableaux de bord. Finaliste de la 7ème édition du challenge App Afrique RFI dans la catégorie « Le numérique au service de l\'agriculture ».',
      emoji: '🌾',
      image: '../../assets/img/ogpa-login.png',
      gradient: 'from-emerald-500 to-blue-500',
      tags: ['Vue.js', 'Node.js', 'Firebase', 'Chart.js', 'Google Maps'],
      features: [
        'Dashboard interactif avec Chart.js et Google Maps',
        'Intégration Firebase (Firestore, Realtime DB, Hosting)',
        'API REST et Cloud Functions avec Node.js',
        'Système multilingue avec i18n',
        'Documentation API complète avec Postman et Swagger',
        'Tests unitaires et d\'intégration',
      ],
screenshots: [
  {
    url: '../../assets/img/ogpa-login.png',
    caption: 'Page de connexion sécurisée avec SSO Google, Facebook et Twitter'
  },
  {
    url: '../../assets/img/ogpa-dashboard.png',
    caption: 'Dashboard analytique — KPIs financiers et graphiques Chart.js comparatifs annuels (crédits, producteurs financés)'
  },
  {
    url: '../../assets/img/ogpa-projets.png',
    caption: 'Liste des projets agricoles avec statuts par producteur, spéculation et agent de liaison'
  },
  {
    url: '../../assets/img/ogpa-business-plan.png',
    caption: 'Business plan approuvé — décision financier, taux d\'intérêt et téléchargement du plan d\'affaire'
  },
  {
    url: '../../assets/img/ogpa-recouvrement.png',
    caption: 'Module de recouvrement de crédit — suivi des remboursements avec historique et workflow en 5 étapes'
  },
  {
    url: '../../assets/img/ogpa-details-project.png',
    caption: 'Fiche projet détaillée — données agronomiques (NPK, pH), géolocalisation et calendrier cultural'
  },
  {
    url: '../../assets/img/ogpa-impact.png',
    caption: 'Analyse d\'impact social et économique — indicateurs de performance par projet agricole'
  },
  {
    url: '../../assets/img/ogpa-taches.png',
    caption: 'Suivi des tâches terrain — observations collectées, géolocalisation GPS et signature de l\'agent'
  },
  {
    url: '../../assets/img/ogpa-producteurs.png',
    caption: 'Gestion des producteurs — liste avec groupes, contacts WhatsApp et agents de liaison assignés'
  },
  {
    url:'../../assets/img/ogpa-plantes.png',
    caption: 'Gestion des plantes - listes des plantes utilisés par les agriculteurs pour leurs projets agronomes'
  }
],
liveUrl: 'https://agrix-chat.web.app',
      company: 'AgrixTech',
      period: 'Depuis fév 2023 - Oct 2024',
      techEnv: ['Vue.js', 'Node.js', 'Firebase', 'Firestore', 'Postman', 'Trello', 'Scrum'],
    },
    {
      id: 'mvs',
      title: 'MVS Admin — Plateforme Éducative Ludique',
      shortDescription: 'Tableau d\'administration d\'une plateforme de jeux éducatifs interactifs pour l\'apprentissage ludique (2 ans de développement).',
      fullDescription: 'MVS Admin est le tableau d\'administration de My Virtual School, une plateforme d\'apprentissage proposant des jeux éducatifs basés sur un apprentissage ludique et interactif. J\'ai également développé le frontend de MVS Web avec Next.js.',
      emoji: '🎮',
      image: '../../assets/img/mvs-about.png',
      gradient: 'from-fuchsia-600 to-violet-600',
      tags: ['PHP', 'Bootstrap', 'Firebase', 'Next.js', 'TailwindCSS'],
      features: [
        'Backend PHP sécurisé et performant',
        'Interface Bootstrap responsive',
        'Intégration Firebase pour la synchronisation temps réel',
        'Dashboard analytique des performances des élèves',
        'Frontend de la plateforme publique avec Next.js et TailwindCSS',
        'Gestion des contenus éducatifs',
      ],
      screenshots: [
        { url: '../../assets/img/mvs-about.png', caption: 'Présentation de My virtual School' },
        { url: '../../assets/img/mvs-courses.png', caption: 'Catalogue de jeux éducatifs' },
      ],
      company: 'My VirtualSchool',
      liveUrl: 'https://myvirtualschools.net/',
      period: 'Sep 2022 — Sep 2024',
      techEnv: ['PHP', 'HTML', 'Bootstrap', 'Firebase', 'Next.js', 'TailwindCSS', 'GitHub', 'Figma'],
    },
    {
      id: 'odado',
      title: 'ODADO — Auto-évaluation ONG',
      shortDescription: 'Application desktop d\'auto-évaluation pour les ONG, permettant de mesurer et suivre les performances institutionnelles.',
      fullDescription: 'ODADO est une application desktop (Electron.js) d\'auto-évaluation pour les ONG. Elle permet de mesurer, évaluer et suivre les performances organisationnelles tout en identifiant les axes d\'amélioration. J\'ai travaillé sur les interfaces Vue.js et les fonctionnalités d\'auto-diagnostic.',
      emoji: '📊',
      image:'../../assets/img/odado-end.jpg',
      gradient: 'from-sky-500 to-indigo-600',
      tags: ['Vue.js', 'Electron.js', 'Bootstrap'],
      features: [
        'Interfaces graphiques Vue.js dans Electron',
        'Design d\'interfaces avec CSS et Bootstrap',
        'Intégration des fonctionnalités d\'auto-diagnostic',
        'Tests unitaires et d\'intégration',
        'Rapports de performance exportables',
      ],
      screenshots: [
        {
    url: '../../assets/img/odado-results.jpg',
    caption: 'Module de planification — saisie des résultats attendus et plan d\'action avec responsable, délais et activités supplémentaires'
  },
  {
    url: '../../assets/img/odado-end.jpg',
    caption: 'Écran de fin de questionnaire ODADO — invitation à identifier les thématiques prioritaires et rédiger le plan de développement organisationnel'
  },      ],
      company: 'AgrixTech',
      period: 'Depuis fév 2023',
      techEnv: ['Electron.js', 'Vue.js', 'Bootstrap', 'GitHub', 'Trello', 'Scrum'],
    },
        {
      id: 'payrollr',
      title: 'Payrollr — Gestion des Salaires',
      shortDescription: 'Application web permettant la gestion interne des salaires des employés avec calculs automatisés et gestion des droits.',
      fullDescription: 'Payrollr est une application web permettant la gestion en interne des salaires des employés dans une entreprise. J\'ai développé les interfaces frontend avec React.js, mis en place le système d\'authentification et intégré les API Django REST.',
      emoji: '💰',
      gradient: 'from-amber-400 to-pink-500',
      tags: ['React.js', 'TailwindCSS', 'Django'],
      features: [
        'Interface React.js responsive et intuitive',
        'Design professionnel avec TailwindCSS',
        'Intégration des API Django REST',
        'Système d\'authentification avec gestion des rôles',
        'Calcul automatisé des salaires et primes',
        'Tests et débogage complets',
      ],
      screenshots: [    ],
      company: 'MBOA DIGITAL',
      period: 'Jan 2025 — Fév 2025',
      techEnv: ['React.js', 'TailwindCSS', 'Bitbucket', 'Jira'],
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
