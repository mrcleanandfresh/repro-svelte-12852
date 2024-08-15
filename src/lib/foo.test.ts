import { describe, test, expect } from 'vitest';
import { FooExtendable } from './foo.svelte';

describe('Foo', () => {
	test('hasSomething is false', () => {
		expect(new FooExtendable().hasSomething).toBe(false);
	});
	test('isSomeState is false', () => {
		expect(new FooExtendable().isSomeState).toBe(false);
	});
});
