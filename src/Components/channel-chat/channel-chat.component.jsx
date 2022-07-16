import MessageForm from "../message-form/message-form.component"
import ChannelMessages from "../channel-messages/channel-messages.component"

import './channel-chat.styles.scss'
import { useNavigate } from "react-router"

export default function Channel({channelName}) {
  const navigate = useNavigate()
  return (
    <section className="channel">
      <header className="channel__header">
        <h2>#{channelName}</h2>
        <button onClick={() => {
          navigate('/')
        }}>⌂ Home</button>
      </header>
      <ChannelMessages />
      <MessageForm />
    </section>
  )
}