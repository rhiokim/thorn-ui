import React from 'react';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <div className="page-header-content">
        <div className="page-title">
          <h4>Starters - Fixed Secondary</h4>
        </div>

        <div className="heading-elements">
          <ul className="breadcrumb heading-text">
            <li><a href="index.html"><i className="icon-home2 position-left"></i> Home</a></li>
            <li><a href="layout_navbar_fixed_secondary.html">Starters</a></li>
            <li className="active">Fixed secondary</li>
          </ul>
        </div>
      </div>
    );
  }
}
