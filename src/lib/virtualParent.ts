import { setContext } from "svelte";
import VirtualRoot from "./VirtualRoot.svelte";

let uid = 0;

class VirtualParent {
    uid = uid++;
    childId = 0;
    root: HTMLElement | undefined;

    rootMounted = (el: HTMLElement) => {
        this.root = el;
        setContext(this, this);
    }

    generateChildId = () => this.childId++;
}

export type { VirtualParent };

export function virtualParent() {
    return new VirtualParent();
}
