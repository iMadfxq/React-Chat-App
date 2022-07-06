import './setName-modal.styles.scss'

export default function SetNameModal() {

  const closeModal = (e) => {
e.target.parentElement.classList.add('closed')
  }
  return (
    <section className="wrapper">
      <span onClick={closeModal} className='closeButton'>🆇</span>
      <section className="SetNameModal">
        <form>
          <label>
            <span>How do you wanna be called?</span>
            <input type="text" required/>
          </label>
          <button>Set Name</button>
        </form>
        <p>**I'll not let you change it later**</p>
      </section>
    </section>
  )
}