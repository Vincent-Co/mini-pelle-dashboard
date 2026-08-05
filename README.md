# Dashboard Média — Mini-Pelle Rhinocéros

Dashboard d'acquisition (HubSpot + Google Ads + Meta Ads) hébergé sur Netlify.

## Contenu du dépôt

| Fichier | Rôle | Mis à jour |
|---|---|---|
| `index.html` | Le dashboard : design, graphiques, filtres. **Statique.** | Rarement (évolutions de design) |
| `data.js` | Uniquement les chiffres (funnel, dépenses, campagnes…). | **Automatiquement chaque lundi** par la tâche Claude |

`index.html` charge `data.js` au démarrage. Pour rafraîchir les chiffres, seul `data.js` change → déploiement Netlify léger et automatique.

## Déploiement

Netlify est connecté à ce dépôt. À chaque `push` (donc à chaque mise à jour de `data.js`), Netlify redéploie automatiquement le site. Aucune action manuelle.

## Vues

- **Mensuel (MoM)** : 13 mois glissants.
- **Hebdomadaire (WoW)** : 14 semaines glissantes.
- Sélecteur de dates (De → À) pour zoomer sur une sous-période.
- 3 onglets : Funnel HubSpot · Google Ads · Meta Ads.

---
Généré par Tayrona Digital.
