import React from 'react'

export default class RuleView extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return(
      <div>rule view</div>
    )
  }
}
