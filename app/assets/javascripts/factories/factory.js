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
        months: {'1': 108454, '2': '', '3': '', '4': '', '5': '','6': 144605, '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 1, group: 'Honoraires',
        name: 'Chanteloup 2', type: 'Faibles',
        months: {'1': '', '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': 202500, '10': '', '11': '', '12': ''}
      },
      {
        id: 2, group: 'Honoraires',
        name: 'Matigues', type: 'Moyennes',
        months: {'1': '', '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': 17453, '10': '', '11': '', '12': 17453}
      },
      {
        id: 3, group: 'Honoraires',
        name: 'Nandy 1', type: 'Faibles',
        months: {'1': 156644, '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 4, group: 'Autres recettes',
        name: 'Retour fonds propres', type: 'Moyennes',
        months: {
          '1': 944500, '2': '', '3': 1142590, '4': 250000, '5': 215000, '6': 365630,
          '7': 148600, '8': 500000, '9': 141365, '10': '', '11': 300000, '12': 125000
        }
      },
      {
        id: 5, group: 'Autres recettes',
        name: 'Apports compte courant + Capital', type: 'Faibles',
        months: {
          '1': 221000, '2': 40000, '3': 100000, '4': 50000, '5': 100000, '6': 50000,
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },
      {
        id: 6, group: 'Autres recettes',
        name: 'Prise marge sur SCI', type: 'Faibles',
        months: {
          '1': 223000, '2': 22995, '3': 203908, '4': '', '5': 221000, '6': 100000,
          '7': 200000, '8': 377000, '9': '', '10': 230000, '11': '', '12': 200000
        }
      },
      {
        id: 7, group: 'Autres recettes',
        name: 'Honoraires SAV SCI TTC', type: 'Certaines',
        months: {
          '1': 18000, '2': '', '3': '', '4': '', '5': '', '6': '',
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },
      {
        id: 8, group: 'Autres recettes',
        name: 'Divers', type: 'Faibles',
        months: {
          '1': '', '2': '', '3': '', '4': 30000, '5': '', '6': 15000,
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      }
    ];

    factory.depenses   = [
      {
        id: 0, group: 'Charges bureaux',
        name: 'Ste Geneviève 2', type: 'Hypothèses',
        months: {'1': 108454, '2': '', '3': '', '4': '', '5': '','6': 144605, '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 1, group: 'Charges bureaux',
        name: 'Nandy 1', type: 'Certaines',
        months: {'1': 156644, '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 2, group: 'Salaires',
        name: 'Retour fonds propres', type: 'Hypothèses',
        months: {
          '1': 944500, '2': '', '3': 1142590, '4': 250000, '5': 215000, '6': 365630,
          '7': 148600, '8': 500000, '9': 141365, '10': '', '11': 300000, '12': 125000
        }
      },
      {
        id: 3, group: 'Salaires',
        name: 'Prise marge sur SCI', type: 'Possibles',
        months: {
          '1': 223000, '2': 22995, '3': 203908, '4': '', '5': 221000, '6': 100000,
          '7': 200000, '8': 377000, '9': '', '10': 230000, '11': '', '12': 200000
        }
      },
      {
        id: 4, group: 'Salaires',
        name: 'Divers', type: 'Certainesd',
        months: {
          '1': '', '2': '', '3': '', '4': 30000, '5': '', '6': 15000,
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },
      {
        id: 4, group: 'Déplacements/représentations',
        name: 'Ste Geneviève des Bois 2', type: 'Possibles',
        months: {'1': 108454, '2': '', '3': '', '4': '', '5': '','6': 144605, '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 5, group: 'Déplacements/représentations',
        name: 'Chanteloup 2', type: 'Hypothèses',
        months: {'1': '', '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': 202500, '10': '', '11': '', '12': ''}
      },
      {
        id: 6, group: 'Déplacements/représentations',
        name: 'Matigues', type: 'Possibles',
        months: {'1': '', '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': 17453, '10': '', '11': '', '12': 17453}
      },
      {
        id: 7, group: 'Déplacements/représentations',
        name: 'Nandy 1', type: 'Certaines',
        months: {'1': 156644, '2': '', '3': '', '4': '', '5': '','6': '', '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''}
      },
      {
        id: 8, group: 'Frais assistance et montage',
        name: 'Retour fonds propres', type: 'Possibles',
        months: {
          '1': 944500, '2': '', '3': 1142590, '4': 250000, '5': 215000, '6': 365630,
          '7': 148600, '8': 500000, '9': 141365, '10': '', '11': 300000, '12': 125000
        }
      },
      {
        id: 9, group: 'Frais assistance et montage',
        name: 'Prise marge sur SCI', type: 'Hypothèses',
        months: {
          '1': 223000, '2': 22995, '3': 203908, '4': '', '5': 221000, '6': 100000,
          '7': 200000, '8': 377000, '9': '', '10': 230000, '11': '', '12': 200000
        }
      },
      {
        id: 10, group: 'Frais assistance et montage',
        name: 'Honoraires SAV SCI TTC', type: 'Certaines',
        months: {
          '1': 18000, '2': '', '3': '', '4': '', '5': '', '6': '',
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },

      {
        id: 11, group: 'Autres charges',
        name: 'Avances fonds propres operations', type: 'Possibles',
        months: {
          '1': 300000, '2': '', '3': 100000, '4': 250000, '5': 250000, '6': 250000,
          '7': 250000, '8': 250000, '9': 250000, '10': 250000, '11': 250000, '12': 250000
        }
      },
      {
        id: 12, group: 'Autres charges',
        name: 'Remboursement compte courant/Dividendes', type: 'Hypothèses',
        months: {
          '1': 530000, '2': 8333, '3': 500000, '4': 8333, '5': '', '6': '',
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': 300000
        }
      },
      {
        id: 13, group: 'Autres charges',
        name: 'Fonds propres acquisition terrain', type: 'Hypothèses',
        months: {
          '1': 830000, '2': 200000, '3': '', '4': '', '5': '', '6': '',
          '7': '', '8': 450000, '9': 200000, '10': 550000, '11': 450000, '12': 450000
        }
      },
      {
        id: 14, group: 'Autres charges',
        name: 'Pertes sur OPAoyer foncière', type: 'Hypothèses',
        months: {
          '1': '', '2': '', '3': -334000, '4': '', '5': '', '6': 1900000,
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },
      {
        id: 15, group: 'Autres charges',
        name: 'Participation/apport en société', type: 'Hypothèses',
        months: {
          '1': 4500, '2': 4500, '3': 4500, '4': 4500, '5': 4500, '6': 4500,
          '7': 4500, '8': 4500, '9': 4500, '10': 4500, '11': 4500, '12': 4500
        }
      },
      {
        id: 16, group: 'Autres charges',
        name: 'Impôt sur les Sociétés', type: 'Certaines',
        months: {
          '1': '', '2': '', '3': '', '4': '', '5': '', '6': '',
          '7': '', '8': '', '9': '', '10': '', '11': 1440000, '12': 350000
        }
      },
      {
        id: 17, group: 'Autres charges',
        name: 'Divers', type: 'Hypothèses',
        months: {
          '1': '', '2': '', '3': 438000, '4': '', '5': '', '6': 15000,
          '7': '', '8': '', '9': '', '10': '', '11': '', '12': ''
        }
      },
      { id: 18, group: 'Autres taxtes' },
      { id: 19, group: 'Charges exceptionelles' },
      { id: 20, group: 'Chèques émis non débités ELGEA' }
    ]

    return factory;
  }]);
})();