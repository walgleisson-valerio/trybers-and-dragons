import Race from './Race';

export default class Dwarf extends Race {
  private static _createdIntances = 0;
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf.increaseInstances();
  }

  private static increaseInstances(): void {
    Dwarf._createdIntances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdIntances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}