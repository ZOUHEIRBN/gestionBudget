export class Fund{
  id?
  budget_type:string
  market_ref:string
  rubric: string
  accountant_no:number;
  operation:string;
  date:Date;

  direction?:number;
  psa?:number;
  najd?:number;
  planning_company?:number;
  xy_advisor?:number;
  holding?:number;
  total_sum:number = 0;
  constructor(){
    //this.id = this.generate_random_str(64);
  }

  generate_random_str(len = 5){
    let s = ""
    for (let i = 0; i < len; i++) {
      let c = String.fromCharCode(65 + Math.floor(26*Math.random()))
      s = s + c
    }
    return s
  }
  fillFromJSON(jsonObj) {
    for (var propName in jsonObj) {
      if(['date'].includes(propName)){
        this[propName] = new Date(jsonObj[propName])
      }
      else{
        this[propName] = jsonObj[propName]
      }

    }
}
  setTotalSum(){
    let sum = 0;
    if(this.budget_type === "Investissement"){
      if(this.psa){
        sum += this.psa
      }
      if(this.najd){
        sum += this.najd
      }
      if(this.planning_company){
        sum += this.planning_company
      }
      if(this.xy_advisor){
        sum += this.xy_advisor
      }
      if(this.holding){
        sum += this.holding
      }
    }
    else{
      if(this.direction){
        sum += this.direction
      }
    }
    this.total_sum = sum
  }

}

export const PLAN_COMPTABLE = {
  "budget_types": {
    "Fonctionnement": {
      "rubrics": ['Rémunérations du personnel', 'Achats non stockés de matières et de fournitures', 'Déplacements, missions et réceptions', 'Entretien et réparation', 'Frais postaux et frais de télécommuncations', 'Charges sociales diverses', 'Etat - T. V. A. récupérable', 'Impôts, taxes et droits assimilés', 'Installations techniques, matériel et outillage', 'Services bancaires', 'Transport', 'Mobilier, matériel de bureau et aménagement divers', 'Cotisations et dons', 'Charges sociales', 'Locations et charges locatives', 'Redevances de crédit-bail'],
    },
    "Investissement": {
      "rubrics": ['Rémunérations du personnel', 'Source de fond', 'Achat de matières premières', 'Achats de matières et fournitures consommables', 'Charges sociales diverses', 'Achats de travaux, études et prestations de service', 'Transports', "Rémunérationsdu personnel extérieur à l'entreprise", "Rémunérations d'intermédiaries et honoraires", 'Locations et charges locatives'],
    }
  },
  "rubrics": {
    "Frais postaux et frais de télécommuncations": {'account_no': []},
"Entretien et réparation": {'account_no': ['61335', '61331', '61332']},
"Achats de travaux, études et prestations de service": {'account_no': []},
"Transport": {'account_no': ['61425', '61428', '61426']},
"Cotisations et dons": {'account_no': ['61462']},
"Redevances de crédit-bail": {'account_no': ['61321']},
"Source de fond": {'account_no': ['Compte comptable']},
"Achat de matières premières": {'account_no': ['61111']},
"Charges sociales diverses": {'account_no': ['61764']},
"Installations techniques, matériel et outillage": {'account_no': ['23324', '23321']},
"Rémunérations du personnel": {'account_no': ['61711', '61712', '61713']},
"Achats non stockés de matières et de fournitures": {'account_no': ['61227', '61251']},
"Déplacements, missions et réceptions": {'account_no': []},
"Transports": {'account_no': []},
"Impôts, taxes et droits assimilés": {'account_no': ['61671', '61673']},
"Services bancaires": {'account_no': []},
"Mobilier, matériel de bureau et aménagement divers": {'account_no': ['2351', '2356', '2352', '2355']},
"Locations et charges locatives": {'account_no': ['61316', '61312', '61313']},
"Etat - T. V. A. récupérable": {'account_no': []},
"Achats de matières et fournitures consommables": {'account_no': ['61221']},
"Rémunérationsdu personnel extérieur à l'entreprise": {'account_no': ['61353']},
"Rémunérations d'intermédiaries et honoraires": {'account_no': []},
"Charges sociales": {'account_no': ['61741', '61745']},
  },
  "account_nums": {
    "2351": {'operations': ['Mobilier de bureau']},
    "61462": {'operations': ['Dons']},
    "61428": {'operations': ['Autres transports (Frais de correspondances)']},
    "61713": {'operations': ['Indemnités et avantages divers']},
    "61321": {'operations': ['Redevances des crédit-bail -mobilier', 'Redevances des crédit-bail - matériel']},
    "61673": {'operations': ['Taxes sur les véhicules']},
    "61745": {'operations': ['Assurances A.T']},
    "61251": {'operations': ['Achats de fournitures non stockables (Electricité)', 'Achats de fournitures non stockables (Carburant)', 'Achats de fournitures non stockables (Eau)']},
    "Compte comptable": {'operations': ['00/00/0000', '00/00/01', '00/00/000', 'Date', 'Solde final au 07/12/2020', 'Solde reporté au 07/12/2020', 'Total dotations au 07/12/2020', '00/00/00', 'Solde initial au 07/12/2020']},
    "61331": {'operations': ['Entretien et réparations des biens immobiliers']},
    "61431": {'operations': ['Voyages et déplacements']},
    "3456": {'operations': ['Etat - Crédit de T.V.A. suivant déclarations']},
    "61764": {'operations': ['Habillement et vêtement du travail']},
    "61263": {'operations': ['Achat des prestations de service']},
    "5115": {'operations': ['Transfert à la Direction Générale']},
    "61316": {'operations': ['Location de matériel de transport']},
    "61711": {'operations': ['Appointements et salaires']},
    "61425": {'operations': ['Transports sur achats']},
    "61741": {'operations': ['CNSS']},
    "61353": {'operations': ['Rémunérations du personnel détaché ou \nprêté  à  l’entreprise']},
    "2355": {'operations': ['Matériel informatique']},
    "61227": {'operations': ['Fournitures de bureau']},
    "61361": {'operations': ['Commissions et courtages']},
    "61111": {'operations': ['Achats de matières premières A']},
    "61435": {'operations': ['Missions (Hebergement)', 'Missions (Restauration)']},
    "34551": {'operations': ['Etat - T.V.A. récupérable sur les immobilisations']},
    "61313": {'operations': ["Location de matériel et d'outillage"]},
    "61671": {'operations': ["Droits d'enregistrement", 'Frais de timbre Cummunal']},
    "61221": {'operations': ['Achats de matières et fournitures A']},
    "61455": {'operations': ['Frais de téléphone + internet']},
    "23324": {'operations': ["Achat d'Outillage"]},
    "61451": {'operations': ['Frais postaux']},
    "6147": {'operations': ['Frais et commissions sur servicees bancaires']},
    "61433": {'operations': ['Frais de déménagement']},
    "5165": {'operations': ['', 'TOTAL GENERAL', 'Régies d’avances et accréditifs']},
    "61312": {'operations': ['Location de constructions']},
    "61365": {'operations': ['Honoraires']},
    "23321": {'operations': ['Achat de  Matériel']},
    "61421": {'operations': ['Transports du personnel']},
    "61335": {'operations': ['Maintenance (Matériel technique)', 'Maintenance (Matériel de transport)', 'Maintenance (Matériel informatique)']},
    "2352": {'operations': ['Matériel de bureau']},
    "2356": {'operations': ['Agencements installations et aménagements divers']},
    "61261": {'operations': ['Achat des travaux']},
    "61332": {'operations': ['Entretien et réparations des biens mobiliers']},
    "61426": {'operations': ['Transports sur ventes']},
    "61436": {'operations': ['Réceptions']},
    "61712": {'operations': ['Primes et graifications']},
    "61262": {'operations': ['Achat des études']},
    "34552": {'operations': ['Etat -T.V.A. récupérable sur les charges']}
  }
}
