import React from 'react'

export default class RuleEdit extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return(
      <div>rule edit</div>
    )
  }
}
