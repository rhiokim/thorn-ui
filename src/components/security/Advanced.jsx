import React from 'react'
import {withRouter} from 'react-router'
import {Button, Switch, AnchorButton, Intent} from '@blueprintjs/core'

class SecurityAdvanced extends React.Component {
  constructor() {
    super()

    this.handleEnabledChange = this.handleEnabledChange.bind(this)

    this.state = {
      isEnabled: false
    }
  }

  handleEnabledChange() {

  }

  render() {
    const {goBack} = this.props.router
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Advanced Security<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
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
              <legend className="text-bold">
                DoS Protection

                <Switch className="pull-left" defaultChecked={this.state.isEnabled} label="" onChange={this.handleEnabledChange} />
              </legend>

              <div className="form-group">
                <div className="col-lg-12">
                  <Switch defaultChecked={this.state.isEnabled} label="Enable ICMP-Flood Attack Filtering" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-xs-12 ml-20 pl-20">
                  <label className="pt-label pt-inline pl-10">
                    <span className=" text-bold">ICMP-Flood Packets Threshold (5~3600):</span>
                    <input className="pt-input" type="text" placeholder="" dir="auto" />
                    <span className="pt-inline pl-10">packets/second</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="col-lg-12">
                  <Switch defaultChecked={this.state.isEnabled} label="Enable UDP-Flood Attack Filtering" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-xs-12 ml-20 pl-20">
                  <label className="pt-label pt-inline pl-10">
                    <span className=" text-bold">UDP-Flood Packets Threshold (5~3600) :</span>
                    <input className="pt-input" type="text" placeholder="" dir="auto" />
                    <span className="pt-inline pl-10">packets/second</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="col-lg-12">
                  <Switch defaultChecked={this.state.isEnabled} label="Enable TCP-SYN-Flood Attack Filtering" onChange={this.handleEnabledChange} />
                </div>
                <div className="col-xs-12 ml-20 pl-20">
                  <label className="pt-label pt-inline pl-10">
                    <span className=" text-bold">TCP-SYN-Flood Packets Threshold (5~3600) :</span>
                    <input className="pt-input" type="text" placeholder="" dir="auto" />
                    <span className="pt-inline pl-10">packets/second</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="col-lg-12">
                  <Switch defaultChecked={this.state.isEnabled} label="Forbid Ping Packet From LAN Port" onChange={this.handleEnabledChange} />
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

export default withRouter(SecurityAdvanced)
