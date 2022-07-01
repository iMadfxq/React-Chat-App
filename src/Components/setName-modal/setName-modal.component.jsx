import './setName-modal.styles.scss'

export default function SetNameModal() {
  return (
    <section className="wrapper">
      <section className="SetNameModal">
        <form>
          <label>
            How do you wanna be called?
            <input type="text" />
          </label>
          <button>Set Name</button>
        </form>
        <p>I'll not let you change it later</p>
      </section>
    </section>
  )
}