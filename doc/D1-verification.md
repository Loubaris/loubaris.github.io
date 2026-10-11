# Vérification du D1 — consignes RenduD1_COO26-27

Le PDF suit maintenant le plan des sections 1 à 10 et les limites de pages demandées.
Il n’est pas encore complet pour une remise : les preuves et données manquantes sont signalées.
L’analyse porte sur l’archive develop fournie, identifiant ZIP 8dfc5190fccc50e5b58f17bb0700c56eddc0fd09.
Le dépôt loubaris.github.io sert uniquement à partager le rapport, pas à valider le backend Maven.

| Exigence du rapport | Vérification | État |
|---|---|---|
| Rapport PDF, sections numérotées, table des matières | 15 pages ; sections 1 à 10 ; sommaire avec pages vérifiées | Présent |
| Première page : équipe et membres | Team-J, cinq noms complets du D0 | Présent |
| Première page : rôles principaux | Fadilou PO, Wahid architecte, Justice QA, Younes Ops, Adam intégration externe ; confirmés dans le chat | Présent |
| Section 1 : tableau des 15 exigences | État, points forts, points faibles, isolation Oui/Non | Présent |
| Section 2 : tableau alphabétique | ADJEGAN, ATI-ATCHA, LOUBARIS, MOROU, TSOULI ; 15 exigences et état | Présent |
| Section 2 : rangs personnels 1 à 15 | Aucune permutation personnelle fournie ; ne peut être déduite des rôles | Manquant |
| Section 3 : cas d’utilisation global | Diagramme avec exigences stratégiques en violet, fonctions absentes explicites | Présent |
| Section 3 : classes du backend et entrées | Services, modèles, repositories, ports paiement/livraison/IA ; diagrammes lisibles | Présent |
| Section 3 : une séquence nominale TD1 | Une seule séquence reconstituée du code et rapprochée du D0 ; texte TD1 non fourni | À confirmer |
| Patrons : rôles des classes et respect formel | Aucun patron GoF complet revendiqué ; ports simulés distingués d’un Adapter GoF | Présent pour l’implémentation observée |
| Section 4 : une page maximum | Page 9 uniquement | Respecté |
| Section 4 : nombre de tests unitaires via SonarQube | 93 tests JUnit exécutés, mêlant unitaires et intégration ; pas de métrique Sonar de tests unitaires | Manquant |
| Section 4 : couverture via SonarQube | Aucun pourcentage disponible | Manquant |
| Section 4 : capture SonarQube | Non fournie ; emplacement explicite | Manquant |
| Section 4 : tableau d’intégration étroite | 6 composants ; comptages ciblés ; nominal/défaillance distingués | Présent |
| Section 4 : noms exacts de tests Mockito | ProcessPaymentTest.gatewayExceptionIsIsolatedAndDoesNotBreakFlow existe ; pas de tests Mockito correspondants pour livraison, IA, capacités | Partiel |
| Section 4 : stratégie Git en deux lignes | Configuration observable documentée ; politique de PR/branches réelle non confirmée | À confirmer |
| Sections 5 à 9 : six sous-parties par exigence | Responsable, stratégie métier, classes, connexion, patron, qualité | Présent |
| Sections 5 à 9 : comparaison au D0 | Écarts concrets séparés des choix de conception observés | Présent |
| Sections 5 à 9 : deux pages maximum par exigence | D5* p.10, R5* p.11, R6* p.12, A3* p.13, AI3* p.14 — une page chacune | Respecté |
| Sections 5 à 9 : réalisation individuelle réelle | R6*/A3* absentes ; D5*/R5*/AI3* partielles au regard du D0 | Limites du code signalées |
| Section 10 : une page maximum | Page 15 uniquement | Respecté |
| Section 10 : bilan de collaboration | Constats techniques disponibles ; faits d’équipe et leçons non fournis | À compléter |
| Section 10 : points et coefficients | 100 points chacun, 500/500, coefficient 1,0 ; confirmé par l’équipe | Présent |

## Précision des comptages d’intégration étroite

Il s’agit ici de tests limités aux interactions d’un service avec son port simulé ou ses repositories en mémoire, sans systèmes distants réels.
Les cas sont comptés individuellement, pas à partir du nombre total d’une classe quand des tests hors composant sont présents.

- Livraison : les 3 scénarios de DeliveryTraking.feature ; aucun scénario actif de panne fournisseur ni d’incident FAILED.
- Paiement : les 9 tests JUnit de ProcessPaymentTest, avec Mockito. Les 5 scénarios Payment.feature sont exécutés mais exclus du chiffre de la colonne pour éviter de mélanger les périmètres.
- IA : les 8 tests DishRecommendationServiceTest (qui exercent DishService) et 7 tests de CartServiceTest : firstAdditionRequestsRecommendationsWithTheUpdatedCart, subsequentAdditionsDoNotRequestRecommendationsAgain, failedAIIsNotRetriedAndDoesNotPreventOrderCreation, emptyingTheSameCartDoesNotResetTheAttempt, newCartGetsItsOwnRecommendationAttempt, invalidAdditionDoesNotConsumeTheFirstAttempt, prefilledCartDoesNotTriggerLateRecommendations. Total 15. Les 4 tests d’adaptateur et les 4 scénarios BDD IA sont hors chiffre.
- Capacités : acceptsOrdersUntilCapacityIsFull et rejectsWhenCapacityTimeSlotIsFull ; plus les scénarios Configure preparation capacity for a time slot et Accept orders while capacity is available and reject orders when full. Total 4.
- R6* et A3* : 0.

## Conformité du dépôt backend — distincte du format du rapport

| Exigence du dépôt backend | Constat |
|---|---|
| mvn clean package | Validé localement : JAR produit, 126 tests réussis (93 JUnit + 33 Cucumber), 0 échec, 0 erreur, 0 ignoré |
| Tag BACKEND sur main | Non vérifiable : archive sans historique Git ; aucun tag créé ou publié |
| CI exécute mvn clean package | Aucun workflow fourni ne lance exactement cette commande ; l’un lance clean test, l’autre package |
| doc/J-renduD0.pdf et doc/J-renduD1.pdf | Fichiers préparés ; leur présence dans le vrai dépôt backend au tag BACKEND reste à vérifier |
| README ≤ 30 lignes, rôles, exigences, commandes, packages, Kanban | README backend fourni : 39 lignes ; proposition corrigée préparée, Kanban à fournir |

## Informations nécessaires pour finaliser

1. Chaque membre fournit une permutation des 15 exigences, de 1 (moins maîtrisée) à 15 (mieux maîtrisée).
2. Fournir les métriques et la capture réelles de SonarQube pour le cœur.
3. Confirmer le scénario nominal TD1 et la stratégie Git/PR.
4. Fournir quelques faits sur la collaboration : réussites, difficultés, leçons.
5. Traiter dans le backend les tests Mockito et fonctionnalités stratégiques manquants si leur réalisation est requise pour la remise.

Aucun taux de couverture, classement personnel ou bilan de collaboration n’a été inventé.
