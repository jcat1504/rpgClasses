class Mage{
  constructor(magicAttacks, protect){
    this._magicAttacks = 0;
    this._protect = protect;
  }
incrementMagicAttacks()
  { this._magicAttacks ++;
   
  }
  get protect(){
    return this._protect;
  }

class WhiteMage extends Mage {
  constructor(protect, heal){
    super(protect);
    this._heal = heal;} }

class BlackMage extends Mage{
  constructor(magicAttacks, ultima);{
  super(magicAttacks);
  this._ultima = ultima;}
}
}


blackMage(blackMage.magicAttacks);


class Warrior{
  constructor(attack, guard){
    this._attack = 0;
    this._guard = guard;
  }
  incrementAttack(){
    this._attack ++;
 }
 get guard(){
   return this_.guard;
 } }

 class Paladin extends Warrior{
   constructor(attack, guard, charge) {
     super(attack, guard);
     this._charge = charge;} }

class Dragoon extends Warrior{
  constructor(attack, highJump){
    super(attack);
    this._highJump = highJump; } }

 
class Thief {
  constructor(steal, attack, haste){
    this._steal = steal;
    this._attack = 0;
    this._haste = haste; }
  get steal(){
    return this._steal; }
  incrementAttack(){
    this._attack ++;}
  get haste(){
    return this._haste;}
}

class Bandit extends Thief{
  constructor(steal, attack, shadowPartner){
    super(steal, attack);
    this._shadowPartner = shadowPartner;
  this._daggerStrike = daggerStrike; } }

  
class Assassin extends Thief {
  constructor(steal, attack, lucky7s){
    super(steal, attack);
    this._lucky7s = lucky7s; } }
