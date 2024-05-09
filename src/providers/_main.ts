export abstract class Provider {
	saveEnabled = false;
	
	constructor(){}
	
	abstract load(): Promise<string>;
	abstract save({}): void;
  }