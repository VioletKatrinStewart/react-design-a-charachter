import { render } from '@testing-library/react';
import Picker from '../Picker/Picker';
import Character from '../Character/Character';

test('renders picker component', () => {
  const container = render(
    <div>
      <Picker head={'bird-head'} middle={'pink-middle'} pants={'blue-pants'} />
      <Character head="duck" middle="pink" bottom="blue" />
    </div>
  );
  expect(container).toMatchSnapshot();
});
// hello
