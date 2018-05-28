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
    this._heal = heal;} }

class BlackMage extends Mage{
  constructor(magicAttacks, ultima);{
  super(magicAttacks);
  this._ultima = ultima;}
}
}

addMagic(newMagic){
  this._magicAttacks.push(newMagic);}

blackMage(blackMage.magicAttacks);


class Warrior{
  constructor(attack, guard){
    this._attack = attack;
    this._guard = guard;
  }
  
 get attack(){
   return this_.attack;
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
    this._attack = attack;
    this._haste = haste;}
  get steal(){
    return this._steal; }
  get attack(){
    return this._attack;}
  get haste(){
    return this._haste;}
}

class Bandit extends Thief{
  constructor(steal, attack, shadowPartner){
    super(steal, attack);
    this._shadowPartner = shadowPartner; } }

  
class Assassin extends Thief {
  constructor(steal, attack, lucky7s){
    super(steal, attack);
    this._lucky7s = lucky7s; } }
