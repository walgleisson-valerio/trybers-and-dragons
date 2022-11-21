import Race from './Race';

export default class Halfling extends Race {
  private static _createdIntances = 0;
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling.increaseInstances();
  }

  private static increaseInstances(): void {
    Halfling._createdIntances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdIntances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}