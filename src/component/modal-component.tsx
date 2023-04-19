
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props{
    showModal: boolean;
    handleOpenCloseModal: any;
} 
interface State {

}

export default class ModalComponent extends React.Component<Props, State> {
    render() {
        return (
            <Modal 

               show={this.props.showModal}
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer >
                        <Button variant="secondary" onClick={()=>this.props.handleOpenCloseModal()}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        );
    }
}
