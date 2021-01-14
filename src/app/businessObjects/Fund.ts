export class Fund{
  id?
  budget_type:string
  market_ref:string
  rubric: string
  accountant_no:number;
  operation:string;
  date:Date;

  psa:number;
  najd:number;
  planning_company:number;
  xy_advisor:number;
  holding:number;
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

