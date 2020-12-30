export class Market{
  id?
  owner;
  mo;
  market_no;
  object;
  begin_date:Date;
  deadline;
  end_date:Date;
  def_caution:number;
  total_sum:number;
  trimester_sum:number;
  agents_number:number;

  constructor(){
    this.id = this.generate_random_str(64);
  }
  fillFromJSON(jsonObj) {
      for (var propName in jsonObj) {
        if(['begin_date', 'end_date'].includes(propName)){
          this[propName] = new Date(jsonObj[propName])
        }
        else{
          this[propName] = jsonObj[propName]
        }

      }
  }
  generate_random_str(len = 5){
    let s = ""
    for (let i = 0; i < len; i++) {
      let c = String.fromCharCode(65 + Math.floor(26*Math.random()))
      s = s + c
    }
    return s
  }
}
