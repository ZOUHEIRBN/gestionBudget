export class Market{
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
    this.owner = this.generate_random_str();
    this.mo = this.generate_random_str(10);
    this.market_no = this.generate_random_str(10);
    this.object = this.generate_random_str(64);
  }
  fillFromJSON(jsonObj) {
      for (var propName in jsonObj) {
          this[propName] = jsonObj[propName]
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
