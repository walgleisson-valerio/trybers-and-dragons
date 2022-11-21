import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static createdInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.increaseInstances();
  }

  private static increaseInstances() {
    Ranger.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}