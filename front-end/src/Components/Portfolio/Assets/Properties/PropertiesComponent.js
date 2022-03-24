import React, { useState } from 'react';
import CreateTable from '../../../../Util/CreateTable';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';

import { addCommas } from '../../../../Helper/AddCommasToNumbers';

function PropertiesComponent(props) {
  const { properties, propertiesTotal } = props;
  const [ expandContent, setExpandContent ] = useState(false);
  
  const handleExpandContent = (e) => {
    setExpandContent(!expandContent);
  };

  return (
      <section className='properties'>
          <h2 className='properties-header'>
              Properties: ${ addCommas(propertiesTotal) }

              <span onClick={handleExpandContent}>
                  {
                      expandContent ?
                      <ExpandLessRoundedIcon />
                      :
                      <ExpandMoreRoundedIcon />
                  }
              </span>
          </h2>

          <Fade in={expandContent}>
              <Collapse      
                  collapsedSize='100%'
                  in={expandContent}
                  orientation='vertical'
                  timeout='auto'
                  unmountOnExit
              >
                  <CreateTable props={properties} />
              </Collapse>
          </Fade>  
    </section>
    
  );
};

export default PropertiesComponent;