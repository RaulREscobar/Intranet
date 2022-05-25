import React from "react"

const Modal = ({children}) => {
  return (
    <article className="">
        <div className="">
           <button>X</button>
           {children}
        </div>
    </article>
  );
};

export default Modal