import React from "react";
// import { BlinkText } from '../partials';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../styles/probutton.css';
import { Mainmodal } from '../partials';



class Probutton extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <div className="probutton" onClick={this.onOpenModal}>
          Hire an Artisan
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Mainmodal />
        </Modal>
      </>
    )
  }
}

export default Probutton;