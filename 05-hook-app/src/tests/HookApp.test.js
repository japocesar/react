import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Test in <HookApp />', () => {
    test('should display the component', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
})