import React from 'react';

class BlinkText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      content: this.props.content
    }
  }

  blink = () => {
    let displayData = !(this.state.showContent);
    this.setState({
      showContent: displayData
    })
  };

  render() {
    return (
      <>
        {this.state.showContent ? this.state.content : ''}
      </>
    )
  }

  componentDidUpdate() {
    setTimeout(this.blink, 3000)
  }

  componentDidMount() {
    setTimeout(this.blink, 3000)
  }

}

export default BlinkText;