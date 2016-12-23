import React from 'react';
import {Link} from 'react-router';

export default class SideNav extends React.Component {
  render() {
    return(
      <div className="sidebar sidebar-main sidebar-default">
        {/* Main sidebar */}
        <div className="sidebar-content">

          {/* Main navigation */}
          <div className="sidebar-category sidebar-category-visible">
            <div className="category-title h6">
              <span>Main sidebar</span>
              <ul className="icons-list">
                <li><a href="#" data-action="collapse"></a></li>
              </ul>
            </div>

            <div className="category-content no-padding">
              <ul className="navigation navigation-main navigation-accordion">

                {/* Main */}
                <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"></i></li>
                <li><Link to="/"><i className="icon-home4"></i> <span>Dashboard</span></Link></li>
                <li>
                  <Link to="/netfilter"><i className="icon-home4"></i> <span>Netfilter</span></Link>
                  <ul>
                    <li><Link to="/netfilter/portfowarding">port forwarding</Link></li>
                    <li><Link to="/netfilter/iptable">iptable</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><i className="icon-stack"></i> <span>Rules / Whitelist</span></a>
                  <ul>
                    <li><Link to="/rules/new">New Rules</Link></li>
                    <li><Link to="/rules">Rules</Link></li>
                    <li><Link to="/rules/sets">Rule Sets</Link></li>
                    <li className="navigation-divider"></li>
                    <li><Link to="/whitelists/new">New Whitelist</Link></li>
                    <li><Link to="/whitelists">Whitelist</Link></li>
                    <li><Link to="/whitelists/sets">Whitelist Sets</Link></li>
                  </ul>
                </li>
                <li><a href="../changelog.html"><i className="icon-list-unordered"></i> <span>Settings</span></a></li>
                {/* /main */}

              </ul>
            </div>
          </div>
          {/* /main navigation */}

        </div>
        {/* /main sidebar */}
      </div>
    )
  }
}