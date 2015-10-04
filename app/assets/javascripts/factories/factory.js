(function () {
  'use strict';

  angular.module('ElgeaApp').factory('factory', [function() {
    var factory = this;

    factory.pmrOptions = ['Faibles', 'Moyennes', 'Certaines']
    factory.pmdOptions = ['Hypothèses', 'Possibles', 'Certaines']
    factory.editions   = [
      {id: 0, value: 'Edition niveau 1'},
      {id: 1, value: 'Edition niveau 2'},
      {id: 2, value: 'Edition niveau 3'}
    ]

    factory.monthlyReport = [
      {month: 'Juillet 2015', totalRecettes: 2478945, totalRecettesCumulan: 6473693, totalDepenses: 1912000, totalDepensesCumulan: 5748126},
      {month: 'Août 2015', totalRecettes: 62995, totalRecettesCumulan: 6536688, totalDepenses: 517428, totalDepensesCumulan: 6265554},
      {month: 'Septembre 2015', totalRecettes: 1446498, totalRecettesCumulan: 7983186, totalDepenses: 1142045, totalDepensesCumulan: 7407599},
      {month: 'Octobre 2015', totalRecettes: 330000, totalRecettesCumulan: 8313186, totalDepenses: 485383, totalDepensesCumulan: 7892982},
      {month: 'Novembre 2015', totalRecettes: 536000, totalRecettesCumulan: 8849186, totalDepenses: 484745, totalDepensesCumulan: 8377727},
      {month: 'Décembre 2015', totalRecettes: 675235, totalRecettesCumulan: 9524421, totalDepenses: 2520155, totalDepensesCumulan: 10897882},
      {month: 'Janvier 2016', totalRecettes: 1686000, totalRecettesCumulan: 1686000, totalDepenses: 527255, totalDepensesCumulan: 527255},
      {month: 'Février 2016', totalRecettes: 877000, totalRecettesCumulan: 2563000, totalDepenses: 1025764, totalDepensesCumulan: 1553019},
      {month: 'Mars 2016', totalRecettes: 361318, totalRecettesCumulan: 2924318, totalDepenses: 730314, totalDepensesCumulan: 2283333},
      {month: 'Avril 2016', totalRecettes: 230000, totalRecettesCumulan: 3154318, totalDepenses: 1060135, totalDepensesCumulan: 3343468},
      {month: 'Mai 2016', totalRecettes: 300000, totalRecettesCumulan: 3454318, totalDepenses: 2475764, totalDepensesCumulan: 5819232},
      {month: 'Juin 2016', totalRecettes: 342543, totalRecettesCumulan: 3796771, totalDepenses: 1637200, totalDepensesCumulan: 7456432}
    ]

    factory.recettes   = [
      {
        id: 0, group: 'Honoraires',
        name: 'Ste Geneviève des Bois 2', type: 'Faibles',
        months: {'2015-07': 108454, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': 144605, '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 1, group: 'Honoraires',
        name: 'Chanteloup 2', type: 'Faibles',
        months: {'2015-07': '', '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': 202500, '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 2, group: 'Honoraires',
        name: 'Matigues', type: 'Moyennes',
        months: {'2015-07': '', '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': 17453, '2016-04': '', '2016-05': '', '2016-06': 17453}
      },
      {
        id: 3, group: 'Honoraires',
        name: 'Nandy 1', type: 'Faibles',
        months: {'2015-07': 156644, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 4, group: 'Autres recettes',
        name: 'Retour fonds propres', type: 'Moyennes',
        months: {
          '2015-07': 944500, '2015-08': '', '2015-09': 1142590, '2015-10': 250000, '2015-11': 215000, '2015-12': 365630,
          '2016-01': 148600, '2016-02': 500000, '2016-03': 141365, '2016-04': '', '2016-05': 300000, '2016-06': 125000
        }
      },
      {
        id: 5, group: 'Autres recettes',
        name: 'Apports compte courant + Capital', type: 'Faibles',
        months: {
          '2015-07': 221000, '2015-08': 40000, '2015-09': 100000, '2015-10': 50000, '2015-11': 100000, '2015-12': 50000,
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },
      {
        id: 6, group: 'Autres recettes',
        name: 'Prise marge sur SCI', type: 'Faibles',
        months: {
          '2015-07': 223000, '2015-08': 22995, '2015-09': 203908, '2015-10': '', '2015-11': 221000, '2015-12': 100000,
          '2016-01': 200000, '2016-02': 377000, '2016-03': '', '2016-04': 230000, '2016-05': '', '2016-06': 200000
        }
      },
      {
        id: 7, group: 'Autres recettes',
        name: 'Honoraires SAV SCI TTC', type: 'Certaines',
        months: {
          '2015-07': 18000, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '', '2015-12': '',
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },
      {
        id: 8, group: 'Autres recettes',
        name: 'Divers', type: 'Faibles',
        months: {
          '2015-07': '', '2015-08': '', '2015-09': '', '2015-10': 30000, '2015-11': '', '2015-12': 15000,
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      }
    ];

    factory.depenses   = [
      {
        id: 0, group: 'Charges bureaux',
        name: 'Ste Geneviève 2', type: 'Hypothèses',
        months: {'2015-07': 108454, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': 144605, '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 1, group: 'Charges bureaux',
        name: 'Nandy 1', type: 'Certaines',
        months: {'2015-07': 156644, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 2, group: 'Salaires',
        name: 'Retour fonds propres', type: 'Hypothèses',
        months: {
          '2015-07': 944500, '2015-08': '', '2015-09': 1142590, '2015-10': 250000, '2015-11': 215000, '2015-12': 365630,
          '2016-01': 148600, '2016-02': 500000, '2016-03': 141365, '2016-04': '', '2016-05': 300000, '2016-06': 125000
        }
      },
      {
        id: 3, group: 'Salaires',
        name: 'Prise marge sur SCI', type: 'Possibles',
        months: {
          '2015-07': 223000, '2015-08': 22995, '2015-09': 203908, '2015-10': '', '2015-11': 221000, '2015-12': 100000,
          '2016-01': 200000, '2016-02': 377000, '2016-03': '', '2016-04': 230000, '2016-05': '', '2016-06': 200000
        }
      },
      {
        id: 4, group: 'Salaires',
        name: 'Divers', type: 'Certainesd',
        months: {
          '2015-07': '', '2015-08': '', '2015-09': '', '2015-10': 30000, '2015-11': '', '2015-12': 15000,
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },
      {
        id: 4, group: 'Déplacements/représentations',
        name: 'Ste Geneviève des Bois 2', type: 'Possibles',
        months: {'2015-07': 108454, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': 144605, '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 5, group: 'Déplacements/représentations',
        name: 'Chanteloup 2', type: 'Hypothèses',
        months: {'2015-07': '', '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': 202500, '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 6, group: 'Déplacements/représentations',
        name: 'Matigues', type: 'Possibles',
        months: {'2015-07': '', '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': 17453, '2016-04': '', '2016-05': '', '2016-06': 17453}
      },
      {
        id: 7, group: 'Déplacements/représentations',
        name: 'Nandy 1', type: 'Certaines',
        months: {'2015-07': 156644, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '','2015-12': '', '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''}
      },
      {
        id: 8, group: 'Frais assistance et montage',
        name: 'Retour fonds propres', type: 'Possibles',
        months: {
          '2015-07': 944500, '2015-08': '', '2015-09': 1142590, '2015-10': 250000, '2015-11': 215000, '2015-12': 365630,
          '2016-01': 148600, '2016-02': 500000, '2016-03': 141365, '2016-04': '', '2016-05': 300000, '2016-06': 125000
        }
      },
      {
        id: 9, group: 'Frais assistance et montage',
        name: 'Prise marge sur SCI', type: 'Hypothèses',
        months: {
          '2015-07': 223000, '2015-08': 22995, '2015-09': 203908, '2015-10': '', '2015-11': 221000, '2015-12': 100000,
          '2016-01': 200000, '2016-02': 377000, '2016-03': '', '2016-04': 230000, '2016-05': '', '2016-06': 200000
        }
      },
      {
        id: 10, group: 'Frais assistance et montage',
        name: 'Honoraires SAV SCI TTC', type: 'Certaines',
        months: {
          '2015-07': 18000, '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '', '2015-12': '',
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },

      {
        id: 11, group: 'Autres charges',
        name: 'Avances fonds propres operations', type: 'Possibles',
        months: {
          '2015-07': 300000, '2015-08': '', '2015-09': 100000, '2015-10': 250000, '2015-11': 250000, '2015-12': 250000,
          '2016-01': 250000, '2016-02': 250000, '2016-03': 250000, '2016-04': 250000, '2016-05': 250000, '2016-06': 250000
        }
      },
      {
        id: 12, group: 'Autres charges',
        name: 'Remboursement compte courant/Dividendes', type: 'Hypothèses',
        months: {
          '2015-07': 530000, '2015-08': 8333, '2015-09': 500000, '2015-10': 8333, '2015-11': '', '2015-12': '',
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': 300000
        }
      },
      {
        id: 13, group: 'Autres charges',
        name: 'Fonds propres acquisition terrain', type: 'Hypothèses',
        months: {
          '2015-07': 830000, '2015-08': 200000, '2015-09': '', '2015-10': '', '2015-11': '', '2015-12': '',
          '2016-01': '', '2016-02': 450000, '2016-03': 200000, '2016-04': 550000, '2016-05': 450000, '2016-06': 450000
        }
      },
      {
        id: 14, group: 'Autres charges',
        name: 'Pertes sur OPAoyer foncière', type: 'Hypothèses',
        months: {
          '2015-07': '', '2015-08': '', '2015-09': -334000, '2015-10': '', '2015-11': '', '2015-12': 1900000,
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },
      {
        id: 15, group: 'Autres charges',
        name: 'Participation/apport en société', type: 'Hypothèses',
        months: {
          '2015-07': 4500, '2015-08': 4500, '2015-09': 4500, '2015-10': 4500, '2015-11': 4500, '2015-12': 4500,
          '2016-01': 4500, '2016-02': 4500, '2016-03': 4500, '2016-04': 4500, '2016-05': 4500, '2016-06': 4500
        }
      },
      {
        id: 16, group: 'Autres charges',
        name: 'Impôt sur les Sociétés', type: 'Certaines',
        months: {
          '2015-07': '', '2015-08': '', '2015-09': '', '2015-10': '', '2015-11': '', '2015-12': '',
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': 1440000, '2016-06': 350000
        }
      },
      {
        id: 17, group: 'Autres charges',
        name: 'Divers', type: 'Hypothèses',
        months: {
          '2015-07': '', '2015-08': '', '2015-09': 438000, '2015-10': '', '2015-11': '', '2015-12': 15000,
          '2016-01': '', '2016-02': '', '2016-03': '', '2016-04': '', '2016-05': '', '2016-06': ''
        }
      },
      { id: 18, group: 'Autres taxtes' },
      { id: 19, group: 'Charges exceptionelles' },
      { id: 20, group: 'Chèques émis non débités ELGEA' }
    ]

    return factory;
  }]);
})();