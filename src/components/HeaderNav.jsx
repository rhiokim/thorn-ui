import React from 'react'
import {Link, withRouter} from 'react-router'
import {Menu, MenuDivider, MenuItem, Popover, Position} from '@blueprintjs/core'

import logo from '../assets/images/logo_dark.png'

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
      case 'settings':
        this.props.router.push('/admin')
      break
      case 'edit-mz':
        this.props.router.push('/admin/mz')
      break
      case 'edit-score':
        this.props.router.push('/admin/score')
      break
      default:
      break
    }
  }

  render() {

    const configMenu = (
      <Menu>
        <MenuItem iconName="graph" text="Thorn Documentation" />
        <MenuItem iconName="graph" text="Update Thorn" />
        <MenuDivider />
        <MenuItem iconName="cog" text="Admin...">
          <MenuItem iconName="graph" text="Settings" onClick={this.handleClick.bind(this, 'settings')} />
          <MenuItem iconName="map" text="Edit Matching Zones" onClick={this.handleClick.bind(this, 'edit-mz')}/>
          <MenuItem iconName="th" text="Edit Score" shouldDismissPopover={false} onClick={this.handleClick.bind(this, 'edit-score')} />
          <MenuItem iconName="map" text="Import Ruleset" />
          <MenuItem iconName="zoom-to-fit" text="Database Backups" disabled={true} />
        </MenuItem>
      </Menu>
    );

    const ruleMenu = (
      <Menu>
        <MenuItem iconName="add" text="New Rule" onClick={this.handleClick.bind(this, 'new-rule')}/>
        <MenuItem iconName="map" text="New Whitelist" onClick={this.handleClick.bind(this, 'new-wl')} />
        <MenuItem iconName="map" text="Import Rule Set" onClick={this.handleClick.bind(this, 'import-rules')} />
        <MenuDivider />
        <MenuItem iconName="add" text="Manage port forwarding" onClick={this.handleClick.bind(this, 'new-port')} />
        <MenuItem iconName="map" text="Manage iptable" onClick={this.handleClick.bind(this, 'new-iptable')} />
      </Menu>
    )

    return (
      <div className="navbar">
        <nav className="pt-navbar">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading"><img src={logo} width="60%" alt=""/></div>
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
