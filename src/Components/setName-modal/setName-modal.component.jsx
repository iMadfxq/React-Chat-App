import "./setName-modal.styles.scss";

import { useRef } from "react";

export default function SetNameModal() {

  const confirmModal = useRef(null)
  const setNameModal = useRef(null)


  const closeSetNameModal = (e) => {
    confirmModal.current.classList.add('open')
  };
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
              <input type="text" required />
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
            <button>No</button>
            <button>Yes</button>
          </section>
        </section>
      </section>
    </>
  );
}
