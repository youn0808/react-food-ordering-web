import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const MondalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.control}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <MondalOverlay>{props.children}</MondalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
