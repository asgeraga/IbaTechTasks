import React, { Component } from 'react';

import Modal from './components/modal/modal.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div >
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      <p style={{color:'white'}}>Once you delete this file, it won’t be possible to undo this action.
                          Are you sure you want to delete it? </p>
                </Modal>
            </div>
        );
    }
}

export default App;