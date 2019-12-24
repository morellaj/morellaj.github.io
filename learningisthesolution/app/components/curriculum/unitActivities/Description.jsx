// Package dependencies
import React, {Fragment, useState} from 'react';
import styled from 'styled-components';


// Component dependencies
import More from './More';


/***************************************/
// Component for the description of activities
/***********************************/
export default function Description(props) {
  const [more, setMore] = useState(false);
  const desc = props.description;
  const cutoff = props.cutoff?props.cutoff:60;
  const description = !more && desc? desc.slice(0, cutoff):desc;
  return(
    <Fragment>
      {description && <div>
        {description}
        <More setMore={setMore} more={more}/>
      </div>
      }
    </Fragment>
  )
}


// Styling
const Container = styled.div`
  text-align: center;
  padding: 5px;
  margin: 0 0 20px 20px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 1px 1px 1px 1px #8888;
`