// ============================================================
// ARTICLES DE "L'HISPORIQUE"
// ============================================================
// Pour ajouter un article : copie un bloc { ... } ci-dessous,
// colle-le juste après l'accolade [ qui suit cette ligne,
// et change les informations entre guillemets " ".
//
// section : "football"  ou  "autres-sports"  ou  "actu"
// featured : mets "true" sur UN SEUL article, celui que tu veux
//            voir en gros en haut de la page d'accueil.
// content : le texte complet de l'article. Pour faire un
//           paragraphe, sépare le texte par \n\n (comme ci-dessous).
// date : format année-mois-jour, ex "2026-07-04"
// ============================================================

const articles = [
  {
    id: "1",
    section: "football",
    category: "Ligue 1",
    title: "Ton grand titre arrive ici",
    excerpt: "C'est ici que tu écriras le résumé de ton article principal de la semaine.",
    content: "Écris ici le texte complet de ton article.\n\nTu peux faire plusieurs paragraphes en laissant une ligne vide entre chaque, comme ici.",
    author: "Ton Nom",
    date: "2026-07-04",
    featured: true
  },
  {
    id: "2",
    section: "football",
    category: "Analyse",
    title: "Titre de ton deuxième article",
    excerpt: "Un court résumé de deux ou trois lignes qui donne envie de lire la suite.",
    content: "Le texte complet de cet article.",
    author: "Ton Nom",
    date: "2026-07-04",
    featured: false
  },
  {
    id: "3",
    section: "autres-sports",
    category: "Rugby — Top 14",
    title: "Titre sur le Top 14",
    excerpt: "Un court résumé de deux ou trois lignes qui donne envie de lire la suite.",
    content: "Le texte complet de cet article.",
    author: "Ton Nom",
    date: "2026-07-04",
    featured: false
  },
  {
    id: "4",
    section: "actu",
    category: "Société",
    title: "Titre de ton article actu",
    excerpt: "Un court résumé de deux ou trois lignes qui donne envie de lire la suite.",
    content: "Le texte complet de cet article.",
    author: "Ton Nom",
    date: "2026-07-04",
    featured: false
  }
];
