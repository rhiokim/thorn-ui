import React from 'react'
import {Link, withRouter} from 'react-router'
import {Menu, MenuDivider, MenuItem, Popover, Position} from "@blueprintjs/core"

import logo from '../assets/images/logo_dark.png'
import profile from '../assets/images/image.png'

class HeaderNav extends React.Component {

  handleClick(act) {
    switch (act) {
      case 'new-rule':
        this.props.router.push('/rules/new')
      break
      case 'new-wl':
        this.props.router.push('/whitelists/new')
      break
      case 'new-port':
        this.props.router.push('/netfilter/ports/new')
      break
      case 'new-iptable':
        this.props.router.push('/netfilter/iptable/new')
      break
      default:
      break
    }
  }

  render() {

    const configMenu = (
      <Menu>
        <MenuItem iconName="graph" text="Profile" />
        <MenuItem iconName="map" text="You" />
        <MenuItem iconName="th" text="Table" shouldDismissPopover={false} />
        <MenuItem iconName="zoom-to-fit" text="Nucleus" disabled={true} />
        <MenuDivider />
        <MenuItem iconName="cog" text="Settings...">
          <MenuItem iconName="add" text="Add new application" disabled={true} />
          <MenuItem iconName="remove" text="Remove application" />
        </MenuItem>
      </Menu>
    );

    const ruleMenu = (
      <Menu>
        <MenuItem iconName="add" text="New Rule" onClick={this.handleClick.bind(this, 'new-rule')}/>
        <MenuItem iconName="map" text="New Whitelist" onClick={this.handleClick.bind(this, 'new-wl')} />
        <MenuDivider />
        <MenuItem iconName="add" text="Manage port forwarding" onClick={this.handleClick.bind(this, 'new-port')} />
        <MenuItem iconName="map" text="Manage iptable" onClick={this.handleClick.bind(this, 'new-iptable')} />
      </Menu>
    )

    return (
      <div className="navbar">
        <nav className="pt-navbar">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"><img src={logo} width="60%" /></div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Link to="/" className="pt-button pt-minimal pt-icon-home">Home</Link>
            <span className="pt-navbar-divider"></span>

            <Popover content={ruleMenu} position={Position.BOTTOM_RIGHT}>
              <button className="pt-button pt-minimal pt-icon-add-to-artifact"></button>
            </Popover>
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <Popover content={configMenu} position={Position.BOTTOM_RIGHT}>
              <button className="pt-button pt-minimal pt-icon-cog"></button>
            </Popover>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(HeaderNav)
