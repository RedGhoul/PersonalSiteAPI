import classnames from "classnames";
import React, { Component } from "react";

class TextInputGroup extends Component {
  render() {
    const {
      label,
      type,
      name,
      error,
      placeholder,
      onChange,
      value
    } = this.props;
    let errorEle = null;
    if (error[name]) {
      errorEle = <div className="invalid-feedback">{error[name]}</div>;
    }
    return (
      <div>
        <div>
          <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
              type={type}
              name={name}
              className={classnames("form-control form-control-lg", {
                "is-invalid": error[name]
              })}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
            {errorEle}
          </div>
        </div>
      </div>
    );
  }
}

export default TextInputGroup;
