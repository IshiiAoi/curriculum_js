class Taiyaki{
  constructor(content){
    this.content = content;
  }

  say(){
    console.log(`中身は${this.content}です`);
  }
}

let anko = new Taiyaki('あんこ');
anko.say();

let cream = new Taiyaki('クリーム');
cream.say();

let cheese = new Taiyaki('チーズ');
cheese.say();