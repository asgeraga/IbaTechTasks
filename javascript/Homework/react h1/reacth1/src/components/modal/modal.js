import React from 'react';

import './modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="zat">
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Do you want to delete this file?</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                    <div className="d-flex">
                    <button className="btn" onClick={props.close}>CANCEL</button>
                    <button className="btn">OK</button>
                    </div>

                </div>

            </div>
        </div>
    )
        </div>
    )
        
}

export default modal;