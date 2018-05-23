class Mage{
  constructor(magicAttacks, protect){
    this.magicAttacks = magicAttacks;
    this.protect = protect;
  }
  get magicAttacks(){
    return this.magicAttacks;
  }
  get protect(){
    return this.protect;
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
 }
