import React from 'react'
import {withRouter} from 'react-router'
import {Button, AnchorButton, Dialog, Alert, Intent} from '@blueprintjs/core'

class WhitelistView extends React.Component {
  constructor() {
    super()

    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleDeactivateAlert = this.toggleDeactivateAlert.bind(this)

    this.state = {
      isEnabled: false,
      isDeactivateAlert: false,
      isOpen: false
    }
  }

  componentWillMount() {
    console.log(this.props.params)
  }

  toggleDialog() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleDeactivateAlert() {
    this.setState({
      isDeactivateAlert: !this.state.isDeactivateAlert
    })
  }

  render() {
    const {goBack} = this.props.router
    const {id} = this.props.params
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Whitelist<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements hidden">
            <AnchorButton href="#/rules/" text="Edit" iconName="add" intent={Intent.DEFAULT}/>
          </div>
        </div>

        <div className="panel-body">
          <p>
            BasicRule wl:1000 "mz:$URL_X:^/foo|$ARGS_VAR_X:^[0-9]";
          </p>

          <div className="text-left">
          </div>
          <div className="text-right">
            <Button className="pull-left mr-5" intent={Intent.DANGER} iconName="add" text="Delete" onClick={() => this.setState({ isOpen: true })} />
            <Button className="pull-left" intent={Intent.WARNING} iconName="add" text="Deactivate" onClick={() => this.setState({ isDeactivateAlert: true })} />
            <Button intent={Intent.DEFAULT} iconName="add" text="Cancel" onClick={goBack}/>
            <AnchorButton intent={Intent.PRIMARY} href={`#/whitelists/edit/${id}`} className="ml-5" text="Edit" iconName="add"/>
          </div>
        </div>

        <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={this.toggleDialog} title="Remove Rule">
          <div className="pt-dialog-body">
            Are you sure remove this rule?<br/>You can't restore this rule after delete.
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="No" />
              <Button intent={Intent.DANGER} onClick={this.toggleDialog} text="Sure" />
            </div>
          </div>
        </Dialog>

        <Alert isOpen={this.state.isDeactivateAlert} onConfirm={this.toggleDeactivateAlert} onCancel={this.toggleDeactivateAlert} confirmButtonText="Confirm" cancelButtonText="No" intent={Intent.WARNING} >Are you sure deactivate this rule?</Alert>
      </div>
    )
  }
}

export default withRouter(WhitelistView)
