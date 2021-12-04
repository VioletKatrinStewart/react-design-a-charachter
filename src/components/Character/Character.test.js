import { render } from '@testing-library/react';
import Character from './Character';

test('renders the character panel', () => {
  const container = render(<Character head="duck" middle="pink" bottom="blue" />);
  expect(container).toMatchSnapshot();
});
