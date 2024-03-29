import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class RsvpItem extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.shape({
      rsvp_id: PropTypes.number.isRequired,
      member: PropTypes.shape({
        member_name: PropTypes.string.isRequired,
        photo: PropTypes.string
      }),
      event: PropTypes.shape({
        event_name: PropTypes.string.isRequired
      })
    }).isRequired
  }

  render() {
    const member = this.props.rsvp.member
    const event = this.props.rsvp.event

    return (
      <div className="background">
      <img alt="" className="photo" src={member.photo} />
      <h4>{ event.event_name }</h4>

      <i>{ member.member_name } just joined this event</i>
      <br />
      </div>
    )
  }
}

export default RsvpItem
