import React from "react";
import Button from 'react-bootstrap/Button';
import ModalComponent from "./modal-component";

interface Props{
    showModal: boolean;
    handleOpenCloseModal: any;
} 

interface State{
    
}

export default class ButtonComponent extends React.Component <Props, State> {


    render(){

        const  {showModal, handleOpenCloseModal} = this.props 


        return(
            <div>
                 <Button variant="outline-primary" onClick={() => this.props.handleOpenCloseModal()}>Primary</Button>
                 <ModalComponent showModal={this.props.showModal} handleOpenCloseModal={this.props.handleOpenCloseModal} />
            </div>
        );
    }
}
