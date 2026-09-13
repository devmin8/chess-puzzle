import { describe, expect, it } from 'vitest';

import { breadcrumbsFor, navItems } from './utils';

describe('navigation', () => {
	it('models the home item', () => {
		expect(navItems).toEqual([{ title: 'Home', url: '/' }]);
	});

	it('returns the home breadcrumb for the root path', () => {
		expect(breadcrumbsFor('/')).toEqual([{ label: 'Home' }]);
	});

	it('falls back to home for unknown paths', () => {
		expect(breadcrumbsFor('/unknown')).toEqual([{ label: 'Home', href: '/' }]);
	});
});
