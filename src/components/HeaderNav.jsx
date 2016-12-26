import React from 'react'
import {Menu, MenuDivider, MenuItem, Popover, Position} from "@blueprintjs/core"

import logo from '../assets/images/logo_light.png'
import profile from '../assets/images/image.png'

export default class HeaderNav extends React.Component {
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
        <MenuItem iconName="add" text="New Rule" />
        <MenuItem iconName="map" text="New Whitelist" />
        <MenuDivider />
        <MenuItem iconName="add" text="Manage port forwarding" />
        <MenuItem iconName="map" text="Manage iptable" />
      </Menu>
    )

    return (
      <div className="navbar">
        <nav className="pt-navbar">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">CDNetworks</div>
            <input className="pt-input" placeholder="Search files..." type="text" />
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button className="pt-button pt-minimal pt-icon-home">Home</button>
            <button className="pt-button pt-minimal pt-icon-document">Files</button>
            <span className="pt-navbar-divider"></span>

            <Popover content={ruleMenu} position={Position.BOTTOM_RIGHT}>
              <button className="pt-button pt-minimal pt-icon-add"></button>
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
