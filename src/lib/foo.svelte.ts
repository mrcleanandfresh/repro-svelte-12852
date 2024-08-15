import { Extendable } from './extendable.svelte';

export class FooExtendable extends Extendable {
	constructor() {
		super();
	}

	get isSomeState() {
		return this._isSomeState;
	}

	get hasSomething() {
		return this._hasSomething;
	}
}
