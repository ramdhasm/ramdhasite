import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    textAlign: 'center',
    color: '#40514E'
  },
  'top-container': {
    backgroundColor: '#EAF6F6',
    paddingTop: [{ unit: 'px', value: 100 }]
  },
  'bottom-container': {
    background: '#66BFBF',
    color: 'white',
    padding: [{ unit: 'px', value: 50 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }]
  },
  'skill-row': {
    width: [{ unit: '%H', value: 0.5 }],
    lineHeight: [{ unit: 'px', value: 2 }],
    textAlign: 'left',
    margin: [{ unit: 'px', value: 50 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 100 }, { unit: 'string', value: 'auto' }]
  },
  'skill-image': {
    width: [{ unit: '%H', value: 0.25 }],
    float: 'left',
    marginRight: [{ unit: 'px', value: 30 }]
  },
  'a': {
    color: '#11999E',
    margin: [{ unit: 'px', value: 20 }, { unit: 'px', value: 15 }, { unit: 'px', value: 20 }, { unit: 'px', value: 15 }],
    textDecoration: 'none',
    fontFamily: ''Merriweather', sans-serif',
    fontSize: [{ unit: 'rem', value: 0.8 }]
  },
  'a:hover': {
    color: '#EAF6F6'
  },
  'top-cloud': {
    position: 'absolute',
    right: [{ unit: 'px', value: 300 }],
    top: [{ unit: 'px', value: 50 }]
  },
  'bottom-cloud': {
    position: 'absolute',
    left: [{ unit: 'px', value: 300 }],
    bottom: [{ unit: 'px', value: 300 }]
  },
  profile: {
    margin: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    lineHeight: [{ unit: 'px', value: 2 }]
  },
  skills: {
    margin: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    lineHeight: [{ unit: 'px', value: 2 }]
  },
  'contact-me': {
    margin: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    lineHeight: [{ unit: 'px', value: 2 }]
  },
  'contact-me-btn': {
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    textDecoration: 'none',
    backgroundColor: '#66BFBF',
    color: 'white',
    borderRadius: '5px'
  },
  'self-intro': {
    width: [{ unit: '%H', value: 0.3 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }]
  },
  'a': {
    margin: [{ unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }]
  },
  h1: {
    fontFamily: ''Merriweather', sans-serif',
    fontSize: [{ unit: 'rem', value: 3 }],
    color: '#66BFBF',
    lineHeight: [{ unit: 'px', value: 2 }]
  },
  h2: {
    fontFamily: ''Merriweather', sans-serif',
    fontSize: [{ unit: 'rem', value: 1.5 }],
    color: '#66BFBF',
    fontWeight: 'normal'
  },
  h3: {
    color: '#11999E'
  },
  hr: {
    border: [{ unit: 'string', value: 'dotted' }, { unit: 'string', value: '#EAF6F6' }, { unit: 'px', value: 6 }],
    borderBottom: [{ unit: 'string', value: 'none' }],
    width: [{ unit: '%H', value: 0.05 }]
  },
  'contact-me-btn': {
    background: '#11CDD4',
    backgroundImage: '-webkit-linear-gradient(top, #11CDD4, #11999E)',
    backgroundImage: '-moz-linear-gradient(top, #11CDD4, #11999E)',
    backgroundImage: '-ms-linear-gradient(top, #11CDD4, #11999E)',
    backgroundImage: '-o-linear-gradient(top, #11CDD4, #11999E)',
    backgroundImage: 'linear-gradient(to bottom, #11CDD4, #11999E)',
    WebkitBorderRadius: '8',
    MozBorderRadius: '8',
    borderRadius: '8px',
    fontFamily: ''Merriweather', sans-serif',
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 13 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }],
    textDecoration: 'none'
  },
  'contact-me-btn:hover': {
    background: '#30E3CB',
    backgroundImage: '-webkit-linear-gradient(top, #30E3CB, #2BC4AD)',
    backgroundImage: '-moz-linear-gradient(top, #30E3CB, #2BC4AD)',
    backgroundImage: '-ms-linear-gradient(top, #30E3CB, #2BC4AD)',
    backgroundImage: '-o-linear-gradient(top, #30E3CB, #2BC4AD)',
    backgroundImage: 'linear-gradient(to bottom, #30E3CB, #2BC4AD)',
    textDecoration: 'none'
  }
});
