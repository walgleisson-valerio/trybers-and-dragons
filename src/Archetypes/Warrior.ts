import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.increaseInstances();
  }

  private static increaseInstances() {
    Warrior.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}