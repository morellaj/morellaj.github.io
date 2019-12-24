//idea - can put container around document, make it same color as the standard background, and then fade the document
//opacity out when turning pages

// Package dependencies
import React, {useState, useEffect} from  'react';
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';
import Fullscreen from 'react-full-screen';

// Component dependencies
import Navbar from '../common/Navbar';
import ScreenButton from './ScreenButton';

// Component for displaying a pdf page
export default function PDFPage(props) {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [display, setDisplay] = useState(true);
  const [scale, setScale] = useState(1);
  const [full, setFull] = useState(false);
  const file = '/assets/' + props.location.search.slice(1, ) + '.pdf';
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  
  function handleResize(){
    if(window.innerWidth/window.innerHeight <= 16/9){
      setScale(window.innerWidth/960)
    }
    else{
      setScale(window.innerHeight/540);
    }
  }
  
  function onDocumentLoadSuccess(document) {
    setPage(1);
    setLastPage(1);
    setNumPages(document.numPages);
    handleResize();
  };

  
  function onItemClick(e){
    setDisplay(false);
    setPage(e.pageNumber);
  }
  
  function pageRender(){
    setLastPage(page);
    if(!display){
      setDisplay(1);
    }
  }
  
  return (
    <Fullscreen enabled={full} onChange={full => setFull(full)}>
      <InvisNavbar full={full}>
        <Navbar/>
      </InvisNavbar>
        <StyledDoc
          file={file}
          loading="Loading book..."
          error="Book not found :("
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={onItemClick}>    
          <MainPage display={display} pageNumber={page} scale={scale} renderTextLayer={false} onRenderSuccess={pageRender}>
            <ScreenButton full={full} setFull={setFull}/>
          </MainPage>
          <LastPage display={display} pageNumber={lastPage} scale={scale} renderTextLayer={false}>
            <Loading>Loading...</Loading>
            <ScreenButton full={full} setFull={setFull}/>
          </LastPage>
        </StyledDoc>
    </Fullscreen>
  )  
}

//Styling
const StyledDoc = styled(Document)`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 20px;
`
  
const MainPage = styled(Page)`
  display: ${props => props.display?'block':'none'};
`

const LastPage = styled(Page)`
  display: ${props => props.display?'none':'block'}
`

const InvisNavbar = styled.div`
  display: ${props => props.full?'none':'block'};
`

const Loading = styled.div`
  font-size: 25px;
  background-color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  padding: 5px;

  :hover{
    cursor: pointer;
  }
`