import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.increaseInstances();
  }

  private static increaseInstances() {
    Mage.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}