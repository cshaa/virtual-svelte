import type { SvelteComponentTyped } from 'svelte';
export type Component<P = any, E = any, S = any> = SvelteComponentTyped<P, E, S>;

export type Props<T> = T extends Component<infer P, any, any> ? P : never;
export type Events<T> = T extends Component<any, infer E, any> ? E : never;
export type Slots<T> = T extends Component<any, any, infer S> ? S : never;

export interface ComponentConstructorParameters<P> {
	/**  An HTMLElement to render to. This option is required. */
	target: Element | ShadowRoot;
	/**  A child of `target` to render the component immediately before. */
	anchor?: Element;
	/** An object of properties to supply to the component. */
	props?: P;
	context?: Map<any, any>;
	hydrate?: boolean;
	intro?: boolean;
	$$inline?: boolean;
}

export type ComponentConstructor<
	C extends Component = Component,
	P extends Props<C> = Props<C>,
	U extends ComponentConstructorParameters<P> = ComponentConstructorParameters<P>
> = {
	new (options: U): C;
};

export type CurriedComponent<
	C extends SvelteComponentTyped,
	P extends Props<C>
> = SvelteComponentTyped<Omit<Props<C>, keyof P>, Events<C>, Slots<C>>;

export function curryComponent<C extends Component, P extends Props<C>>(
	component: ComponentConstructor<C>,
	curryProps: P
): ComponentConstructor<CurriedComponent<C, P>> {
	return <any>function (options: ComponentConstructorParameters<CurriedComponent<C, P>>) {
		return new component({
			...options,
			props: {
				...options.props,
				...curryProps
			}
		});
	};
}
