import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/button-component';

interface Props{
  handleOpenCloseModal: any;
}


interface State {
  showModal: boolean;
}


export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false 
    };
  }

  handleOpenCloseModal(): void {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const  {showModal} = this.state 

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <ButtonComponent showModal={showModal} handleOpenCloseModal={this.props.handleOpenCloseModal} />
        </header>
      </div>
    );
  }
}