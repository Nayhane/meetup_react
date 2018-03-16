import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import './RsvpList.css'
import { connect } from 'react-redux'


class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  renderRsvp(rsvp) {
    return <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />
  }

  render() {
    return (
     <div>
      <div className='list'>
        <h2>RSVP list</h2>
      </div>
      <div>
        { this.props.rsvps.map(this.renderRsvp) }
      </div>
    </div>
    )
  }
}
const mapStateToProps = ({ rsvps }) => ({
  rsvps
})

export default connect(mapStateToProps)(RsvpList)
