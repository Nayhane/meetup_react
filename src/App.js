import React, { PureComponent } from 'react'
import './App.css'
import Title from './components/Title'
import TopicsList from './topics/TopicsList'
import RsvpList from './rsvps/RsvpList'




const topics = [
  { topic: 'Software Development (3)',
    count: 1
  },
  { topic: 'Web Development (3)',
    count: 2
  },
  { topic: 'Computer programmimg (2)',
    count: 3
  },
  { topic: 'Python (2)',
    count: 4
  },
  { topic: 'Agile Project Management (2)',
    count: 5
  },
  { topic: 'Live Coding (2)',
    count: 6
  },
  { topic: 'Data Analytics (2)',
    count: 7
  },
  { topic: 'Neural networks (2)',
    count: 8
  },
  { topic: 'Artificial Intelligence (2)',
    count: 9
  },
  { topic: 'Data Mining(2)',
    count: 10
  }
]




class App extends PureComponent {

  render() {
    return (
      <div className="App">
         <Title content="Top 10 " />
        <div>
          <main>
           <TopicsList/>
           <RsvpList />
          </main>
        </div>
      </div>
    )
  }
}

const rsvps = [
	{
	  "venue": {
	    "venue_name": "L'Albero dei Gelati",
	    "lon": -73.983864,
	    "lat": 40.672104,
	    "venue_id": 18235642
	  },
	  "visibility": "public",
	  "response": "yes",
	  "guests": 0,
	  "member": {
	    "member_id": 428877,
	    "member_name": "Margaret Johnston"
	  },
	  "rsvp_id": 1694689556,
	  "mtime": 1508416064753,
	  "event": {
	    "event_name": "Wednesday Daytime Meetup",
	    "event_id": "244342120",
	    "time": 1508954400000,
	    "event_url": "https://www.meetup.com/parkslope/events/244342120/"
	  },
	  "group": {
	    "group_topics": [
	      {
	        "urlkey": "knitting",
	        "topic_name": "Knitting"
	      },
	      {
	        "urlkey": "spinners",
	        "topic_name": "Spinners"
	      },
	      {
	        "urlkey": "crocheting",
	        "topic_name": "Crocheting"
	      }
	    ],
	    "group_city": "Brooklyn",
	    "group_country": "us",
	    "group_id": 255707,
	    "group_name": "Park Slope Knitting Circle",
	    "group_lon": -73.99,
	    "group_urlname": "parkslope",
	    "group_state": "NY",
	    "group_lat": 40.67
	  }
	},
	{
	  "venue": {
	    "venue_name": "The Oil and Gas Technology Centre",
	    "lon": -2.131917,
	    "lat": 57.142223,
	    "venue_id": 25528154
	  },
	  "visibility": "public",
	  "response": "yes",
	  "guests": 0,
	  "member": {
	    "member_id": 238435510,
	    "photo": "https://secure.meetupstatic.com/photos/member/7/c/0/a/thumb_271351754.jpeg",
	    "member_name": "Pav"
	  },
	  "rsvp_id": 1694689558,
	  "mtime": 1508416064822,
	  "event": {
	    "event_name": "The industrial app opportunity for entrepreneurs as part of IoT hosted at OGTC",
	    "event_id": "243876045",
	    "time": 1508949000000,
	    "event_url": "https://www.meetup.com/Aberdeen-Technology-Entrepreneurs-Club/events/243876045/"
	  },
	  "group": {
	    "group_topics": [
	      {
	        "urlkey": "startup-businesses",
	        "topic_name": "Startup Businesses"
	      },
	      {
	        "urlkey": "professional-networking",
	        "topic_name": "Professional Networking"
	      },
	      {
	        "urlkey": "smallbiz",
	        "topic_name": "Small Business"
	      },
	      {
	        "urlkey": "newtech",
	        "topic_name": "New Technology"
	      },
	      {
	        "urlkey": "web",
	        "topic_name": "Web Technology"
	      },
	      {
	        "urlkey": "entrepreneurship",
	        "topic_name": "Entrepreneurship"
	      },
	      {
	        "urlkey": "technology-startups",
	        "topic_name": "Technology Startups"
	      }
	    ],
	    "group_city": "Aberdeen",
	    "group_country": "gb",
	    "group_id": 19826542,
	    "group_name": "Aberdeen Technology Entrepreneurs Club",
	    "group_lon": -2.1,
	    "group_urlname": "Aberdeen-Technology-Entrepreneurs-Club",
	    "group_lat": 57.15
	  }
	},
	{
	  "visibility": "public",
	  "response": "yes",
	  "guests": 0,
	  "member": {
	    "member_id": 11053176,
	    "photo": "https://secure.meetupstatic.com/photos/member/9/3/2/e/thumb_243217678.jpeg",
	    "member_name": "Susan G"
	  },
	  "rsvp_id": 1694689559,
	  "mtime": 1508416064926,
	  "event": {
	    "event_name": "Time for a movie night.",
	    "event_id": "244268800",
	    "time": 1509242400000,
	    "event_url": "https://www.meetup.com/SingleAndSmiling/events/244268800/"
	  },
	  "group": {
	    "group_topics": [
	      {
	        "urlkey": "singles",
	        "topic_name": "Singles"
	      },
	      {
	        "urlkey": "diningout",
	        "topic_name": "Dining Out"
	      },
	      {
	        "urlkey": "newintown",
	        "topic_name": "New In Town"
	      },
	      {
	        "urlkey": "nightlife",
	        "topic_name": "Nightlife"
	      },
	      {
	        "urlkey": "socialnetwork",
	        "topic_name": "Social Networking"
	      },
	      {
	        "urlkey": "fun-times",
	        "topic_name": "Fun Times"
	      },
	      {
	        "urlkey": "adventure",
	        "topic_name": "Adventure"
	      },
	      {
	        "urlkey": "dating-and-relationships",
	        "topic_name": "Dating and Relationships"
	      },
	      {
	        "urlkey": "dedicated-dog-lovers",
	        "topic_name": "Dedicated Dog Lovers"
	      },
	      {
	        "urlkey": "adjusting-to-single-life",
	        "topic_name": "Adjusting to Single Life"
	      },
	      {
	        "urlkey": "cat-lovers",
	        "topic_name": "Cat Lovers"
	      },
	      {
	        "urlkey": "single-life",
	        "topic_name": "Single Life"
	      },
	      {
	        "urlkey": "bachelor",
	        "topic_name": "Bachelor"
	      },
	      {
	        "urlkey": "single-girlfriends",
	        "topic_name": "Single Girlfriends"
	      }
	    ],
	    "group_city": "Reno",
	    "group_country": "us",
	    "group_id": 19684703,
	    "group_name": "Single and Smiling!",
	    "group_lon": -119.81,
	    "group_urlname": "SingleAndSmiling",
	    "group_state": "NV",
	    "group_lat": 39.53
	  }
	}
]

const rsvp = rsvps[0]


export default App
