import React from 'react'
import {findDOMNode} from 'react-dom'

import {Menu, MenuDivider, MenuItem, Popover, Position} from '@blueprintjs/core'
import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-buttons'
import 'datatables.net-fixedcolumns'

export default class Log extends React.Component {
  constructor() {
    super()

    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleDeactivateAlert = this.toggleDeactivateAlert.bind(this)

    this.state = {
      ruleId: undefined
    }

    $.extend( $.fn.dataTable.defaults, {
        // columnDefs: [{
        //     orderable: false,
        //     width: '100px',
        //     targets: [ 5 ]
        // }],
        dom: '<"datatable-header"fl><"datatable-scroll datatable-scroll-wrap"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        }
    });
  }

  ruleMenu = (
    <Menu>
      <MenuItem iconName="add" text="View" onClick={this.handleClick.bind(this, 'view')} />
      <MenuItem iconName="add" text="Edit" onClick={this.handleClick.bind(this, 'edit')}/>
      <MenuItem iconName="map" text="Clone" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuItem iconName="map" text="Copy to Clipboard" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuDivider />
      <MenuItem iconName="add" text="Deactivate" onClick={this.handleClick.bind(this, 'deactivate')} />
      <MenuItem iconName="map" text="Delete" onClick={this.handleClick.bind(this, 'delete')} />
    </Menu>
  )

  componentDidMount() {
    const el = findDOMNode(this.refs.logTable);

    // DT(el, {
    //     autoWidth: true,
    //     scrollY: 300
    // })
    // Scrollable datatable
    $(el).DataTable({
        columnDefs: [
            {
                orderable: false,
                targets: [ 0, 6 ]
            },
            {
                width: "40px",
                targets: [0]
            },
            {
                width: "100px",
                targets: [1]
            }
        ],
        scrollX: true,
        scrollY: '600px',
        scrollCollapse: true,
        fixedColumns: {
            leftColumns: 1,
            rightColumns: 1
        }
    });
  }

  handleClick(act) {
    const {ruleId} = this.state
    switch (act) {
      case 'view':
        this.props.router.push(`/rules/${ruleId}`)
      break
      case 'edit':
        this.props.router.push(`/rules/edit/${ruleId}`)
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

        <div className="panel-body hidden">
          This example shows the DataTables table body <code>scrolling</code> in the <code>vertical</code> direction. This can generally be seen as an alternative method to pagination for displaying a large table in a fairly small vertical area, and as such pagination has been disabled here. Note that this is not mandatory, it will work just fine with pagination enabled as well!.
        </div>

        <table className="table" width="100%" ref="logTable">
          <thead>
            <tr>
              <th>!</th>
              <th>MZ</th>
              <th>URI</th>
              <th>Var</th>
              <th>PCount</th>
              <th>BCount</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/login.php</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">FILE_EXT</span></td>
              <td>/admin/login.php</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">FILE_EXT</span></td>
              <td>/phpmyadmin/admin.php</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/phpmyadmin/install.php</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">BODY</span></td>
              <td>/service/setup.php</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">BODY</span></td>
              <td>/sso/login.jsp</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">BODY</span></td>
              <td>/events/invite.asp</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">BODY</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">HEADERS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">HEADERS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">$HEADERS_VAR</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
            <tr>
              <td className="text-center"><span className="pt-icon-standard pt-icon-error text-danger"></span></td>
              <td><span className="label label-info">ARGS</span></td>
              <td>/a</td>
              <td>&lt;/iframe&gt;</td>
              <td>54</td>
              <td>54</td>
              <td>
                <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                  <a className="icon-menu9" onClick={() => {}}></a>
                </Popover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
