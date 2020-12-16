export class Fund{
  budget_type:string
  market_ref:string
  rubric: string
  accountant_no:number;
  operation:string;
  date:Date;

  psa:number;
  najd:number;
  planning_company:number;
  holding:number;
  total_sum:number = 0;

  setTotalSum(){
    let sum = 0;
    if(this.psa){
      sum += this.psa
    }
    if(this.najd){
      sum += this.najd
    }
    if(this.planning_company){
      sum += this.planning_company
    }
    if(this.holding){
      sum += this.holding
    }
    this.total_sum = sum
  }

}
