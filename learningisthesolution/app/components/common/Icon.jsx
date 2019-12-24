// Package dependencies
import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, 
        faArrowRight,
        faArrowLeft,
        faPaperclip, 
        faBook, 
        faInfo, 
        faCloudShowersHeavy, 
        faWeightHanging, 
        faPencilAlt, 
        faWifi, 
        faFlask, 
        faInfoCircle,
         faExpandArrowsAlt,
         faCompressArrowsAlt,
        faAngleLeft,
        faAngleRight,
        faChild,
        faSmileBeam,
        faMoneyBillWaveAlt,
        faGraduationCap,
        faHandshake
       } from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle, 
        faClock, 
        faHeart, 
        faClipboard, 
        faStickyNote, 
        faCalendarAlt, 
        faSnowflake, 
        faComments,
        faListAlt
       } from '@fortawesome/free-regular-svg-icons';


/************************************************/
// Component for displaying icons
/************************************************/
export default function Icon(props){
  return(
    <Fragment>
      <FontAwesomeIcon 
        icon={iconList[props.icon].icon} 
        style={{'marginLeft':'5px', 'marginRight':'5px'}}/>
      {props.text && iconList[props.icon].text}
    </Fragment>
  )
}


// Constants
const iconList = {
  arrowRight: {icon: faArrowRight, text: 'Arrow Right'},
  arrowLeft: {icon: faArrowLeft, text: 'Arrow Left'},
  clipboard: {icon: faClipboard, text: 'Clipboard'},
  infoCircle: {icon: faInfoCircle, text: 'Info'},
  info: {icon: faInfo, text: 'Info'},
  worksheet: {icon: faClipboard, text: 'Worksheet'},
  flash: {icon: faStickyNote, text: 'flash'},
  reading: {icon: faBook, text: 'reading' },
  book: {icon: faBook, singleText: 'Online Interactive Book', multipleText: 'Online Interactive Books'},
  video: {icon: faPlay, text: 'video'},
  discussion: {icon: faComments, text: 'discussion'},
  writing: {icon: faPencilAlt, text: 'writing'},
  online: {icon: faWifi, text: 'online'},
  activity: {icon: faFlask, text: 'activity'},
  interactive: {icon: faFlask, singleText: 'Interactive Activity', multipleText: 'Interactive Activities'},
  easy: {icon: faCheckCircle, text: 'Minimal prep'},
  fast: {icon: faClock, text: 'Short'},
  favorite: {icon: faHeart, text: 'Favorite'},
  extended: {icon: faCalendarAlt, text: 'Extended activity'},
  weather: {icon: faCloudShowersHeavy, text: 'Weather dependent'},
  seasonal: {icon: faSnowflake, text: 'Seasonal'},
  hard: {icon: faWeightHanging, text: 'Lengthy prep'},
  expand: {icon: faExpandArrowsAlt, text: 'Expand arrows'},
  compress: {icon: faCompressArrowsAlt, text: 'Compress arrows'},
  angleRight: {icon: faAngleRight, text: 'Angle Right'},
  angleLeft: {icon: faAngleLeft, text: 'Angle Left'},
  list: {icon: faListAlt, text: 'List'},
  child: {icon: faChild, text: 'Child'},
  pretend: {icon: faChild, singleText: 'Guided Pretend Activity', multipleText: 'Guided Pretend Activities'},
  smile: {icon: faSmileBeam, text: 'Smile'},
  quiz: {icon: faChild, text: 'quiz'},
  parent: {icon: faChild, text: 'parent'},
  money: {icon: faMoneyBillWaveAlt, text: 'money'},
  smart: {icon: faGraduationCap, text: 'smart'},
  shake: {icon: faHandshake, text: 'shake'}
}