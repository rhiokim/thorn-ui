import React from 'react'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Button, AnchorButton, Dialog, Alert, Intent} from '@blueprintjs/core'

import * as SearchAction from '../../actions/search'

class LogView extends React.Component {
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
    const {id} = this.props.params
    this.props.fetchLogById(id)
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

  contentBasic(log) {
    if (!log) {
      return <div className="panel-body">
          <i className="icon-spinner4 spinner no-edge-top"></i>
        </div>
    }

    const source = log._source
    const req = source.request.split(' ')
    const naxsi = source.naxsi_sig

    return (<div className="panel-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="active">
                  <th colSpan="4">Request</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Request URI</td>
                  <td colSpan="3">{req[1]}</td>
                </tr>
                <tr>
                  <td>Method</td>
                  <td>{req[0]}</td>
                  <td>Remote Address</td>
                  <td>{source.remote_addr}</td>
                </tr>
                <tr>
                  <td>Agent</td>
                  <td>{source.http_user_agent}</td>
                  <td>Status</td>
                  <td>{source.status}</td>
                </tr>
                <tr>
                  <td>Request Time</td>
                  <td>{source.time_local}</td>
                  <td>Body Length</td>
                  <td>{source.body_bytes_sent}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {naxsi ?
          <div className="table-responsive mt-20">
            <table className="table table-bordered">
              <thead>
                <tr className="active">
                  <th colSpan="4">NAXSI Detail</th>
                </tr>
              </thead>
              <tbody>
                {/*<tr>
                  <td>Total Processed</td>
                  <td>{naxsi.total_processed}</td>
                  <td>Total Blocked</td>
                  <td>{naxsi.total_blocked}</td>
                </tr>*/}
                <tr className="border-double">
                  <td>CheckRule</td>
                  <td>{naxsi.cscore0}</td>
                  <td>Socre</td>
                  <td>{naxsi.score0}</td>
                </tr>
                <tr>
                  <td>Matching Zone (<a href="#/rules/1031">{naxsi.id0}</a>)</td>
                  <td>{naxsi.zone0}</td>
                  <td>Variable</td>
                  <td>{naxsi.var_name0}</td>
                </tr>
                <tr className="border-solid">
                  <td>CheckRule</td>
                  <td>$XSS</td>
                  <td>Score</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>Matching Zone (<a href="#/rules/1031">1031</a>)</td>
                  <td>HEADER</td>
                  <td>Variable</td>
                  <td>user-agent</td>
                </tr>
                <tr>
                  <td>Matching Zone (<a href="#/rules/1032">1032</a>)</td>
                  <td>BODY</td>
                  <td>Variable</td>
                  <td>tid[sqltype]</td>
                </tr>
                <tr>
                  <td>Matching Zone (<a href="#/rules/400321">400321</a>)</td>
                  <td>BODY|NAME</td>
                  <td>Variable</td>
                  <td>tid[sqltype]</td>
                </tr>
              </tbody>
            </table>
          </div>
        : ''}
        </div>)
  }

  render() {
    const {goBack} = this.props.router
    const {log} = this.props

    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Log Detail<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements hidden">
            <AnchorButton href="#/rules/" text="Edit" iconName="add" intent={Intent.DEFAULT}/>
          </div>
        </div>

        {this.contentBasic(log)}

        <pre className="hidden">
          {JSON.stringify(this.props.log, null, 2)}
        </pre>

        <div className="panel-footer">
          <div className="heading-elements">
            <div className="heading-btn pull-right">
              <Button intent={Intent.DEFAULT} iconName="add" text="List" onClick={goBack}/>
              <Button className="ml-5 hidden" intent={Intent.PRIMARY}  iconName="add" text="Edit" />
            </div>
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

const mapStateToProps = state => ({
  log: state.searchReducer.selected
})

const mapDispatchToProps = dispatch => bindActionCreators(SearchAction, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogView))
