import React, { useState } from 'react';
import CreateTable from '../../../../Util/CreateTable';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Collapse from '@mui/material/Collapse';

function PropertiesComponent(props) {
  const { properties, propertiesTotal } = props;
  const [ expandContent, setExpandContent ] = useState(false);
  
  const handleExpandContent = (e) => {
    setExpandContent(!expandContent);
  };

  return (
      <section className='properties'>
          <h2 className='properties-header'>
              Properties: {propertiesTotal}

              <span onClick={handleExpandContent}>
                  {
                      expandContent ?
                      <ExpandLessRoundedIcon />
                      :
                      <ExpandMoreRoundedIcon />
                  }
              </span>
          </h2>

          <Collapse      
              collapsedSize='100%'
              in={expandContent}
              orientation='vertical'
              timeout='auto'
              unmountOnExit
          >
              <CreateTable props={properties} />
          </Collapse>
    </section>
    
  );
};

export default PropertiesComponent;