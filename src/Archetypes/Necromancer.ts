import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.increaseInstances();
  }

  private static increaseInstances() {
    Necromancer.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}