import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '.';
import * as props from '../../../../__mocks__/mockProps';

Enzyme.configure({ adapter: new Adapter() });

describe('<Table/>', () => {
  const component = mount(<Table {...props} />);
  const list = component.find('thead > tr');
  const { targetMentorData, tasksInfo } = props;

  it('should render', () => {
    const wrapper = shallow(
        <Table {...props}/>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive correct props', () => {
    expect(props).toEqual({ targetMentorData, tasksInfo });
  });

  it("should render table head with student's names correctly", () => {
    expect(list.find('th')).toHaveLength(targetMentorData.students.length + 1);
  });

  it('should render task\'s collumn correctly', () => {
    const tasks = component.find('.table_tasksData');
    expect(tasks).toHaveLength(tasksInfo.tasksInfo.length);
    expect('Code Jam "CV"').toEqual(tasksInfo.tasksInfo[0].task);
  });

  it('should render task\'s marks', () => {
    const tasksChecked = component.find('.checked');
    expect(27).toBe(tasksChecked.length);
  });
});
