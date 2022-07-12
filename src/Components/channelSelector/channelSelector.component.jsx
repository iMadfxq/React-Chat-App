import './channelSelector.styles.scss'
import ChannelSelectorItem from '../channelSelector-item/channelSelector-item.component'

const generalChannelTopics = ['Send a greeting','Ask about my journey','Tell some jokes']
const jobsChannelTopics = ['Look for my portfolio','Find my resume','Contact me']


export default function ChannelSelector () {

  return (
    <section className="main__channelSelector">
      <ChannelSelectorItem title={'General'} topics={generalChannelTopics} />
      <ChannelSelectorItem title={'Jobs'} topics={jobsChannelTopics} />
  </section>

  )
}