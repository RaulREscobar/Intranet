import './Modal.css'
const Modal = ({children, isOpen, closeModal}) => {
  return (
    <article className= {`modals ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container">
           <button className="modal-close" onClick={()=>closeModal}>X</button>
           {children}
        </div>
    </article>
  );
};

export default Modal