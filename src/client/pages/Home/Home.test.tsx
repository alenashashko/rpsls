import {render} from '@testing-library/react';
import { Home } from './Home';

test('Initial view should contain link to game page', () => {
    const { container } = render(<Home />);

    expect(container.querySelector('a[href="/game"]')).toBeTruthy();
});