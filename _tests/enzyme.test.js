import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Using Enzyme to wrap around React test utilities to shallow render the tree and test it.
import App from '../client/coponents/App';
import Container from '../client/components/Container';
import SubmitUrlComponent from '../client/components/SubmitUrlComponent';

configure({ adapter: new Adapter() });

// Unit tests for MiraQL
describe('MiraQL unit tests', () => {
  describe('App', () => {
    let wrapper;
    const props = {
      
    }
  })
})

