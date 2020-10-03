const challenges = [
  {
    day: '01',
    link: '01-javascript-drum-kit',
    title: 'Javascript Drum Kit'
  },
  {
    day: '02',
    link: '02-js-and-css-clock',
    title: 'CSS + JS Clock'
  },
  {
    day: '03',
    link: '03-css-variables',
    title: 'Playing with CSS Variables and JS'
  },
  {
    day: '04',
    link: '04-array-cardio-day-1',
    title: 'Array Cardio Day 1'
  },
  {
    day: '05',
    link: '05-flex-panel-gallery',
    title: 'Flex Panels Image Gallery'
  },
  {
    day: '06',
    link: '06-type-ahead',
    title: 'Ajax Type Ahead'
  },
  {
    day: '07',
    link: '07-array-cardio-day-2',
    title: 'Array Cardio Day 2'
  },
  {
    day: '08',
    link: '08-fun-with-html5-canvas',
    title: 'Fun with HTML5 Canvas'
  },
  {
    day: '09',
    link: '09-dev-tools-domination',
    title: '14 Must Know Dev Tools Tricks'
  },
  {
    day: '10',
    link: '10-hold-shift-and-check-checkboxes',
    title: 'Hold Shift to Check Multiple Checkboxes'
  },
  {
    day: '11',
    link: '11-custom-video-player',
    title: 'Custom HTML5 Video Player'
  },
  {
    day: '12',
    link: '12-key-sequence-detection',
    title: 'Key Sequence Detection (KONAMI CODE)'
  },
  {
    day: '13',
    link: '13-slide-in-on-scroll',
    title: 'Slide In on Scroll'
  },
  {
    day: '14',
    link: '14-javascript-references-vs-copying',
    title: 'Object and Arrays - Reference VS Copy'
  },
  {
    day: '15',
    link: '15-local-storage',
    title: 'LocalStorage and Event Delegation'
  },
  {
    day: '16',
    link: '16-mouse-move-shadow',
    title: 'CSS Text Shadow Mouse Move Effect'
  },
  {
    day: '17',
    link: '17-sort-without-articles',
    title: 'Sorting Band Names without articles'
  },
  {
    day: '18',
    link: '18-adding-up-timesrwith-reduce',
    title: 'Tally String Times with Reduce'
  },
  {
    day: '19',
    link: '19-webcam-fun',
    title: 'Unreal Webcam Fun'
  },
  {
    day: '20',
    link: '20-speech-detection',
    title: 'Native Speech Recognition'
  },
  {
    day: '21',
    link: '21-geolocation',
    title: 'Geolocation based Speedometer and Compass'
  },
  {
    day: '22',
    link: '22-follow-along-link-highlighter',
    title: 'Follow Along Links'
  },
  {
    day: '23',
    link: '23-speech-synthesis',
    title: 'Speech Synthesis'
  },
  {
    day: '24',
    link: '24-sticky-nav',
    title: 'Sticky Nav'
  },
  {
    day: '25',
    link: '25-event-capture-propagation-bubbling-and-once',
    title: 'Event Capture, Propagation, Bubbling and Once'
  },
  {
    day: '26',
    link: '26-stripe-follow-along-nav',
    title: 'Stripe Follow Along Dropdown'
  },
  {
    day: '27',
    link: '27-click-and-drag',
    title: 'Click and Drag to Scroll'
  },
  {
    day: '28',
    link: '28-video-speed-controller',
    title: 'Video Speed Controller UI'
  },
  {
    day: '29',
    link: '29-countdown-timer',
    title: 'Countdown Clock'
  },
  {
    day: '30',
    link: '30-whack-a-mole',
    image: '30-whack-a-mole',
    title: 'Whack A Mole Game'
  },
];

document.getElementById('challenges').innerHTML = challenges.map(challenge => `
  <a href="/${challenge.link}/index.html" class="card">
    <img src="images/${challenge.link}.png" alt="Challenge ${challenge.day}: ${challenge.title}">
    <div class="description">
      <h3>Day ${challenge.day}</h3>
      <h2>${challenge.title}</h2>
    </div>
  </a>
`).join('');
