// Associe chaque ancre interne (#xxx) à l'onglet (viewId) qui contient réellement cette section.
// Le site fonctionne par onglets : une section n'existe dans la page que si son onglet est actif,
// donc un lien "#xxx" seul ne suffit pas à y accéder depuis un autre onglet.
export const ANCHOR_VIEW_MAP = {
  accueil: 'accueil',

  presentation: 'a-propos',
  mission: 'a-propos',
  vision: 'a-propos',
  valeurs: 'a-propos',
  cibles: 'a-propos',

  'nos-solutions': 'nos-solutions',
  'solutions-structuration': 'nos-solutions',
  'solutions-developpement': 'nos-solutions',
  'solutions-placements': 'nos-solutions',
  'solutions-conseil': 'nos-solutions',
  'solutions-execution': 'nos-solutions',
  'solutions-conservation': 'nos-solutions',
  'solutions-gestion': 'nos-solutions',

  investir: 'investir',
  'pourquoi-investir': 'investir',

  financer: 'financer',
  'besoin-financement': 'financer',
  'emprunt-obligataire': 'financer',
  'ouverture-capital': 'financer',

  partenaires: 'partenaires',
  equipe: 'partenaires',

  'marche-financier': 'marche-financier',
  'marche-cemac': 'marche-financier',
  'instruments-actions': 'marche-financier',
  'instruments-obligations': 'marche-financier',
  'education-financiere': 'marche-financier',

  actualites: 'actualites-documents',
  documents: 'actualites-documents',
  'actualites-recents': 'actualites-documents',
  publications: 'actualites-documents',
  communiques: 'actualites-documents',

  contact: 'contact',
};

// Ex: resolveAnchor('#solutions-execution') -> { viewId: 'nos-solutions', anchorId: 'solutions-execution' }
export function resolveAnchor(href) {
  if (!href || !href.startsWith('#') || href.length <= 1) {
    return { viewId: 'accueil', anchorId: null };
  }
  const anchorId = href.slice(1);
  const viewId = ANCHOR_VIEW_MAP[anchorId] || 'accueil';
  return { viewId, anchorId };
}
