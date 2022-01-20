import React from "react";
import PropTypes from "prop-types";
import axios from 'axios';

class MesengerBot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      provider,
      label,
      className,
      host,
      token,
      item,
      action,
      onSubscribe,
      onUnSubscribe
    } = this.props;


  }

  onSubscribe() {
    let _this = this;

    axios.post(`${this.props.host}/api/v0/settings/subscribe/${this.props.provider}`, {}, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(response => {
      let newWindow = null;
      newWindow = window.open(response.data, "", "width=400,height=400");
      var poolingInterval = setInterval(function () {
        if (!newWindow || newWindow.closed || newWindow.closed === undefined) {
          clearInterval(poolingInterval)
          poolingInterval = null
          newWindow = null
        }
        //console.log(newWindow)
        if (newWindow === null) {
          _this.getMySubscribe()
        }
      }, 250);
    })
  }

  onUnSubscribe(){
    let data = {};
    this.props.item.providers.map(val => {
      if(val.provider === this.props.provider){
        data = val;
      }
    })
    axios.post(`${this.props.host}/api/v0/settings/subscribe/provider/${data.id}/update`, {
      is_subscribe: false,
    }, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(response => {
      this.props.onUnSubscribe(response.data);
    });
  }

  getMySubscribe(){
    axios.get(`${this.props.host}/api/v0/settings/subscribe`, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(response => {
      this.props.onSubscribe(response.data);
    });
  }

  subs(){
    if(this.props.action === 'subscribe'){
      this.onSubscribe()
    }
    if(this.props.action === 'unsubscribe'){
      this.onUnSubscribe()
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subs()} className={this.props.className}>{this.props.label}</button>
      </div>
    );
  }
}

MesengerBot.propTypes = {
  provider: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  host: PropTypes.string,
  token: PropTypes.string,
  item: PropTypes.object,
  action: PropTypes.string,
  onSubscribe: PropTypes.func,
  onUnSubscribe: PropTypes.func
};

MesengerBot.defaultProps = {
  provider: 'telegram',
  label: 'Подписаться',
  action: 'subscribe'
};

export default MesengerBot;
