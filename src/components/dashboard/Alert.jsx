import React from 'react'

export default class Alert extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="panel bg-primary">
            <div className="panel-heading hidden">
              <h6 className="panel-title">Primary solid</h6>
            </div>

            <div className="panel-body">
              Primary solid panel using <code>.bg-primary</code> class
            </div>
          </div>
        </div>
      </div>
    )
  }
}
