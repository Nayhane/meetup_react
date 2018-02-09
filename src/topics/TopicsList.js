import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ComponentName extends PureComponent {
	static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
		topic: PropTypes.string.isRequired,
		count: PropTypes.number.isRequired
	})).isRequired
	}

	render() {
		return (
			
		)
	}
}

export default ComponentName
