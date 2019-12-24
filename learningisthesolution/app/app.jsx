// Package dependencies
import  React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, hashHistory} from 'react-router-dom'

// Component dependencies
import Home from './components/home/HomePage';
import CharacterPage from './components/curriculum/CharacterPage'
import PDFPage from './components/pdfs/PDFPage';
import AnnotationLayer from 'react-pdf/dist/Page/AnnotationLayer.css';


ReactDOM.render((
  <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/activities" component={CharacterPage}/>
      <Route path="/pdf" component={PDFPage}/>
  </BrowserRouter>), document.getElementById('main'));