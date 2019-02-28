import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Table extends PureComponent {
  render() {
    const { targetMentorData, tasksInfo } = this.props;
    return (
      <div className = 'tableClass_wrapper'>
       <h2 className = 'mentorName'>Mentor: {targetMentorData.mentorName}</h2>
       <table>
        <thead>
          <tr>
            <th key={123}></th>
            {targetMentorData.students.map((item, index) => <th key={index}>
              <a href={item.gitHub || null} target="_blank">{item.student}</a>
            </th>)}
          </tr>
        </thead>
        <tbody>
        {tasksInfo.tasksInfo.map((item, index) => <tr className={ item.status } key={index}>
          <td className='table_tasksData'
            data-taskstatus = {item.status} key={123}>
            <a href={item.gitHub} target="_blank">{item.task}</a>
          </td>
          {targetMentorData.students.map((itm, indx) => {
            if (!itm.checkedTasks.length) return <td className='banished' key= {indx}>{'banished'}</td>;
            if (!itm.checkedTasks.some(items => items.task === item.task)) return <td className='' key= {indx}>{'no mark'}</td>;
            return itm.checkedTasks.map((items) => {
              if (items.task === item.task) return <td className='checked' key= {indx}>{items.mark}</td>;
              return null;
            });
          })}
          </tr>)}
        </tbody>
       </table>
      </div>
    );
  }
}

Table.propTypes = {
  targetMentorData: PropTypes.object.isRequired,
  tasksInfo: PropTypes.object.isRequired,
};
