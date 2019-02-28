import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';

export default class SelectAutocomplete extends PureComponent {
  handleChange = (newValue) => {
    if (newValue instanceof Object && !newValue.value) this.props.transferTargetMentor(newValue);
  };

  getArrayOfMentors = () => this.props.options.map((it, i) => ({ label: it.mentorName, ind: i }));

  render() {
    const { options } = this.props;
    return (
      <div>
        {options.length ? (
          <CreatableSelect
            isClearable
            onChange={this.handleChange}
            options={this.getArrayOfMentors()}
          />
        ) : (
          <p className="loadingMassage">
            Loading<span className="loadingMassageDotFirst">.</span>
            <span className="loadingMassageDotSecond">.</span>
            <span className="loadingMassageDotThird">.</span>
          </p>
        )}
      </div>
    );
  }
}

SelectAutocomplete.propTypes = {
  options: PropTypes.array.isRequired,
};
