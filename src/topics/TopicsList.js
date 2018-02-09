import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      topic: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })).isRequired
  }

  renderTopic(topic) {
    return (
      <li key={topic.topic} > {topic.topic} ({topic.count}) </li>
    )}

    render(){
      return (
        <ol>
          {this.props.topics.map(this.renderTopic)}
        </ol>
      )
    }
  }

  const mapStateToProps = ({ topics }) => ({
    topics
  })

  export default connect(mapStateToProps)(TopicsList)
