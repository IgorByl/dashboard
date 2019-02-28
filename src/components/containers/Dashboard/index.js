import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from '../../../redux/actions';
import SelectAutocomplete from '../../presentational/SelectAutocomplete';
import Table from '../../presentational/Table';
import service from '../../../service';

class Dashboard extends PureComponent {
  componentDidMount = () => {
    this.props.actions.setData();
  };

  onClickLogout = (e) => {
    e.preventDefault();
    service
      .get('/logout')
      .then(() => this.props.history.push('/'))
      .catch(console.error);
  };

  render() {
    const { mentorStudentsData, targetMentorStudents } = this.props;
    return (
      <div>
        <SelectAutocomplete
          options={mentorStudentsData}
          transferTargetMentor={this.props.actions.transferTargetMentor}
        />
        <a className="mentorName exit" onClick={this.onClickLogout}>
          Exit
        </a>
        {targetMentorStudents.mentorsInfo ? (
          <Table
            targetMentorData={
              mentorStudentsData[targetMentorStudents.mentorsInfo.ind]
            }
            tasksInfo={mentorStudentsData[mentorStudentsData.length - 1]}
          />
        ) : null}
      </div>
    );
  }
}

Dashboard.propTypes = {
  mentorStudentsData: PropTypes.array.isRequired,
};

function mentorStudentsDataSelector(state) {
  return state.mentorStudentsData;
}

function targetMentorStudentsSelector(state) {
  return state.targetMentorStudents;
}

const mapStateToProps = createStructuredSelector({
  mentorStudentsData: mentorStudentsDataSelector,
  targetMentorStudents: targetMentorStudentsSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
