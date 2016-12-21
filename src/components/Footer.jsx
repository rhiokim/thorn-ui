import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-bottom footer">
        <ul className="nav navbar-nav visible-xs-block">
          <li><a className="text-center collapsed" data-toggle="collapse" data-target="#footer"><i className="icon-circle-up2"></i></a></li>
        </ul>

        <div className="navbar-collapse collapse" id="footer">
          <div className="navbar-text">
            &copy; 2017. <a href="#" className="navbar-link">Web Evolution Team</a> by <a href="http://cdnetworks.com" className="navbar-link" target="_blank">CDNetworks</a>
          </div>

          <div className="navbar-right">
            <ul className="nav navbar-nav">
              <li><a href="#">About</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
