import React from 'react'
import {withRouter} from 'react-router'
import {Button, Switch, AnchorButton, Intent} from '@blueprintjs/core'

class SecurityBasic extends React.Component {
  constructor() {
    super()

    this.handleEnabledChange = this.handleEnabledChange.bind(this)

    this.state = {
      isEnabled: true
    }
  }

  handleEnabledChange() {}

  render() {
    const {goBack} = this.props.router
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Basic Security<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements hidden">
            <AnchorButton href="#/forward/new" text="New" iconName="add" intent={Intent.PRIMARY}/>
          </div>
        </div>

        <div className="panel-body">
          <p className="content-group-lg text-muted">
            Page Description Here
          </p>

          <form className="form-horizontal" action="#">
            <fieldset className="content-group">
              <legend className="text-bold">Firewall</legend>

              <div className="form-group pl-20">
                <div className="col-lg-12 ">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable SPI Firewall" onChange={this.handleEnabledChange} />
                </div>
              </div>
            </fieldset>
            <fieldset className="content-group">
              <legend className="text-bold">VPN</legend>

              <div className="form-group pl-20">
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable PPTP Pass-through" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable L2TP Pass-through" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable IPSec Pass-through" onChange={this.handleEnabledChange} />
                </div>
              </div>
            </fieldset>
            <fieldset className="content-group">
              <legend className="text-bold">ALG</legend>

              <div className="form-group pl-20">
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable FTP ALG" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable TFTP ALG" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable H323 ALG" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable SIP ALG" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-lg-12">
                  <Switch className="pt-inline" defaultChecked={this.state.isEnabled} label="Enable RTSP ALG" onChange={this.handleEnabledChange} />
                </div>
              </div>
            </fieldset>

            <div className="text-right">
              <Button className="pt-intent" iconName="add" text="Cancel" onClick={goBack}/>
              <Button className="pt-intent-primary ml-5" iconName="add" text="Save" />
            </div>
          </form>
        </div>


      </div>
    )
  }
}

export default withRouter(SecurityBasic)
