import React from 'react';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.state = {
      items: this.props.items,
      disabled: true
    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</button>
        <ul>
        {
          this.state.items.map(function(item) {
            return <li>{item}</li>
          })
        }
        </ul>
      </div>
    )
  }
};

git:最先进的分布式版本控制系统
版本控制软件
repository :版本库／仓库　＝＝　目录
  每个文件都能被追踪
