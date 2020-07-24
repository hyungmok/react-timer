import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';

describe('TimerButton', () => {
  let container;

  beforeEach(() => {
    container = shallow(
      <TimerButton buttonAction={jest.fn()} buttonValue={''} />
    );
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });
});
