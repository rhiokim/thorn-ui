import React from 'react'

export default class RuleView extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Rule<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements hidden">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="reload"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div className="panel-body">
          MainRule "rx:.*" "msg:HTTPoxy - Attack " "mz:$HEADERS_VAR:Proxy" "s:$ATTACK:8" id:42000458 ;
        </div>
      </div>
    )
  }
}
