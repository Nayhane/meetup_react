import { UPDATE_TOPICS } from '../actions/topics/update-topics'



export default function (state = [], { type, payload } = {}) {
	switch (type) {
    case UPDATE_TOPICS :
      return [...payload]

    default:
      return state
  }
}
