import "./setName-modal.styles.scss";

import { useRef } from "react";
import { useEffect } from "react";

export default function SetNameModal() {
  const confirmModal = useRef(null);
  const setNameModal = useRef(null);
  const nameInput = useRef(null)

  const closeSetNameModal = (e) => {
    confirmModal.current.classList.add("open");
  };

  const noNameHandleClick = (e) => {
    e.stopPropagation();
    if (e.target.textContent === "Yes") {
      confirmModal.current.classList.remove("open");
      confirmModal.current.classList.add("closed");
      setNameModal.current.classList.add("closed");
    }
    if (e.target.textContent === "No") {
      confirmModal.current.classList.remove("open");
      confirmModal.current.classList.add("closed");
      nameInput.current.focus()
    }
  };
  useEffect(() => {
    nameInput.current.focus()
  }, [])
  return (
    <>
      <section ref={setNameModal} className="wrapper">
        <span onClick={closeSetNameModal} className="closeButton">
          🆇
        </span>
        <section className="SetNameModal">
          <form>
            <label>
              <span>How do you wanna be called?</span>
              <input type="text" ref={nameInput} required />
            </label>
            <button>Set Name</button>
          </form>
          <p>**I'll not let you change it later**</p>
        </section>
      </section>
      <section className="confirm-closing" ref={confirmModal}>
        <section className="confirm-modal">
          <h3>I won't let you change your name later, are you sure?</h3>
          <section>
            <button onClick={noNameHandleClick}>Yes</button>
            <button onClick={noNameHandleClick}>No</button>
          </section>
        </section>
      </section>
    </>
  );
}
