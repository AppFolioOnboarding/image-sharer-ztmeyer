/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import App from '../../components/App';

describe('<App />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<App />);
    assert(wrapper.contains('Tell us what you think'));
    assert(wrapper.contains('Copyright: AppFolio Inc. Onboarding'));

    const feedbackForm = wrapper.find('form');
    assert.strictEqual(feedbackForm.length, 1);
  });
});
