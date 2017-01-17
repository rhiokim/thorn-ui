import React from 'react'
import {withRouter} from 'react-router'
import {Button} from '@blueprintjs/core'

class ForwardingEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  }

  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    const {goBack} = this.props.router
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Edit Port Forwarding Rule<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
          <form className="form-horizontal" action="#">
            <fieldset className="content-group">
              <legend className="text-bold">Basic inputs</legend>

              <div className="form-group">
                <label className="control-label col-lg-2">Service Port</label>
                <div className="col-lg-10">
                  <input className="pt-input" type="text" placeholder="" dir="auto" defaultValue="53" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">IP Address</label>
                <div className="col-lg-10">
                  <input className="pt-input" type="text" placeholder="" dir="auto" defaultValue="123.123.123.123" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Internal Port</label>
                <div className="col-lg-10">
                  <input className="pt-input" type="text" placeholder="" dir="auto" defaultValue="53" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Protocol</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a protocol...</option>
                      <option value="all">ALL</option>
                      <option value="tcp">TCP</option>
                      <option value="udp">UDP</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Status</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option value="enabled">Enabled</option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Common Service Port</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a common service port...</option>
                      <option value="dns">DNS</option>
                      <option value="ftp">FTP</option>
                      <option value="http">HTTP</option>
                      <option value="nntp">NNTP</option>
                      <option value="pop3">POP3</option>
                      <option value="pptp">PPTP</option>
                      <option value="smtp">SMTP</option>
                      <option value="sock">SOCK</option>
                      <option value="telnet">TELNET</option>
                    </select>
                  </div>
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

export default withRouter(ForwardingEdit)
