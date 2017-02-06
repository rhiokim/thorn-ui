import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Menu, MenuDivider, MenuItem, Popover, Position} from '@blueprintjs/core'

import * as SearchAction from '../../actions/search'

class Logs extends React.Component {
  constructor() {
    super()

    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleDeactivateAlert = this.toggleDeactivateAlert.bind(this)
    this.changeCountHandler = this.changeCountHandler.bind(this)

    this.state = {
      logId: undefined,
      ruleId: undefined,
      limit: 12
    }
  }

  ruleMenu = (
    <Menu>
      <MenuItem iconName="add" text="View" onClick={this.handleClick.bind(this, 'view')} />
      <MenuItem iconName="add" text="View Rule" onClick={this.handleClick.bind(this, 'view-rule')}/>
      <MenuItem iconName="map" text="Clone" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuItem iconName="map" text="Copy to Clipboard" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuDivider />
      <MenuItem iconName="add" text="Deactivate" onClick={this.handleClick.bind(this, 'deactivate')} />
      <MenuItem iconName="map" text="Delete" onClick={this.handleClick.bind(this, 'delete')} />
    </Menu>
  )

  componentWillMount() {
    const {limit} = this.state
    this.props.fetchLogs({limit})
  }

  handleClick(act) {
    const {ruleId, logId} = this.state
    switch (act) {
      case 'view':
        this.props.router.push(`/logs/${logId}`)
      break
      case 'view-rule':
        this.props.router.push(`/rules/${ruleId}`)
      break
      case 'deactivate':
        this.setState({ isDeactivateAlert: true })
      break
      case 'delete':
        this.setState({ isOpen: true })
      break
      default:
      break
    }
  }

  clickActionMenu(hit) {
    console.log(hit._id)
    const id = hit._id
    const naxsi = hit._source.naxsi_sig

    this.setState({
      logId: id,
      ruleId: naxsi.id0
    })
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

  changeCountHandler(e) {
    const selected = e.target.selectedOptions[0]
    this.setState({limit: selected.value}, () => {
      const {limit} = this.state
      this.props.fetchLogs({limit})
    })
  }

  render() {
    const {hits} = this.props
    return (
      <div className="panel panel-flat">
      {/* Scrollable datatable */}
        <div className="panel-heading">
          <h5 className="panel-title">Protection Logs</h5>
          <div className="heading-elements hidden">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="reload"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div className="panel-body">
          <div className="row">
            <div className="col-lg-6">
            </div>
            <div className="col-lg-6">
              <label className="pt-label pt-inline pull-right">
                Show:

                <div className="pt-select">
                  <select onChange={this.changeCountHandler}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="table-responsive pre-scrollable">
          <table className="table" width="100%" ref="logTable">
            <thead>
              <tr>
                <th className="text-center" style={{width: 50 + 'px'}}>!</th>
                <th className="cl">MZ</th>
                <th className="cl">URI</th>
                <th className="cl">Status</th>
                <th className="cl-md hidden-xs">CScore</th>
                <th className="cl-sm hidden-xs">Client</th>
                <th className="cl-sm hidden-xs">Destination</th>
                <th className="text-center" style={{width: 50 + 'px'}}>
                  <i className="icon-menu9" title="Action"></i>
                </th>
              </tr>
            </thead>
            <tbody>
            {hits.map(hit => (
              <tr key={hit._id}>
                <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
                <td><span className="label label-info">{hit._source.naxsi_sig.zone0}</span></td>
                <td>{hit._source.naxsi_sig.uri}</td>
                <td>{hit._source.status}</td>
                <td className="text-danger">{hit._source.naxsi_sig.cscore0}</td>
                <td>{hit._source.naxsi_sig.ip}</td>
                <td>{hit._source.naxsi_sig.server}</td>
                <td>
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={this.clickActionMenu.bind(this, hit)}></a>
                  </Popover>
                </td>
              </tr>
            ))}
              <tr>
                <td colSpan="9"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-20 text-center">
          <ul className="pagination">
            <li><a href="#" className="legitRipple">‹</a></li>
            <li className="active"><a href="#" className="legitRipple">1</a></li>
            <li><a href="#" className="legitRipple">2</a></li>
            <li><a href="#" className="legitRipple">3</a></li>
            <li className="disabled"><a href="#">4</a></li>
            <li><a href="#" className="legitRipple">5</a></li>
            <li><a href="#" className="legitRipple">6</a></li>
            <li><a href="#" className="legitRipple">7</a></li>
            <li><a href="#" className="legitRipple">8</a></li>
            <li><a href="#" className="legitRipple">9</a></li>
            <li><a href="#" className="legitRipple">›</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hits: state.searchReducer.hits
})

const mapDispatchToProps = dispatch => bindActionCreators(SearchAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Logs)
