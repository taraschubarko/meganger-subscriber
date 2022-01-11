import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

class BotSubscriber extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      provider,
      label,
      className,
      host,
      token
    } = this.props;


  }

  onSubscribe() {
    axios.post(`${this.props.host}/api/v0/settings/subscribe/${this.props.provider}`, {}, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(response => {
      window.open(response.data, "", "width=400,height=400");
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onSubscribe()} className={this.props.className}>{this.props.label}</button>
      </div>
    );
  }
}

BotSubscriber.propTypes = {
  provider: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  host: PropTypes.string,
  token: PropTypes.string
};

BotSubscriber.defaultProps = {
  provider: 'telegram',
  label: 'Подписаться',
};

export default BotSubscriber;
