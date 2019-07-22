/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import FeedbackForm from '../../components/FeedbackForm';

describe('<FeedbackForm />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<FeedbackForm />);
    const formGroup = wrapper.find('FormGroup');
    assert.strictEqual(formGroup.length, 2);

    const button = wrapper.find('Button');
    assert.strictEqual(button.length, 1);
    assert.strictEqual(button.text(), 'Submit');
  });
});
