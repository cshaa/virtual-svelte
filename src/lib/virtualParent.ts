import { onMount, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { curryComponent, type Props } from './utils';
import VirtualRoot from './VirtualRoot.svelte';

import type { Component, ComponentConstructor } from './utils';

let currentUid = 0;

class VirtualParent<C = any> {
	root = writable<HTMLElement>();

	generateChildId = () => currentUid++;
    childUpdated = (id: number, content: C) => {
        console.log(id, content);
    }
    childDestroyed = (id: number) => console.log(id);

	Root = curryComponent(VirtualRoot, { el: this.root });
}

export type { VirtualParent };

export function virtualParent() {
	return new VirtualParent();
}
