import Race from './Race';

export default class Orc extends Race {
  private static _createdIntances = 0;
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc.increaseInstances();
  }

  private static increaseInstances(): void {
    Orc._createdIntances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdIntances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}