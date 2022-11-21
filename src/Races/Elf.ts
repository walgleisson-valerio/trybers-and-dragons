import Race from './Race';

export default class Elf extends Race {
  private static _createdIntances = 0;
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.increaseInstances();
  }

  private static increaseInstances(): void {
    Elf._createdIntances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdIntances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}