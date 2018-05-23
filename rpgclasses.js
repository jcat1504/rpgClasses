class Mage{
  constructor(magicAttacks, protect){
    this._magicAttacks = magicAttacks;
    this._protect = protect;
  }
  get magicAttacks(){
    return this._magicAttacks;
  }
  get protect(){
    return this._protect;
  }

class WhiteMage extends Mage {
  constructor(protect, heal){
    super(protect);
    this.heal = heal;} }

class BlackMage extends Mage{
  constructor(magicAttacks, ultima);{
  super(magicAttacks);
  this.ultima = ultima;}
}
}

addMagic(newMagic){
  this._magicAttacks.push(newMagic);}


class Warrior{
  constructor(attack, guard){
    this.attack = attack;
    this.guard = guard;
  }
  
 get attack(){
   return this.attack;
 }
 get guard(){
   return this.guard;
 } }

 class Paladin extends Warrior{
   constructor(attack, guard, charge) {
     super(attack, guard);
     this.charge = charge;} }

class Dragoon extends Warrior{
  constructor(attack, highJump){
    super(attack);
    this.highJump = highJump; } }

   
  
