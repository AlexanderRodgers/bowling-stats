import React, { useState } from 'react';
import Pinbutton from '../components/PinButton';
import FrameSelection from '../components/FrameSelection';
import { Button } from '@material-ui/core';
import { CREATE_GAME } from '../api/queries';


const Main = (props) => {
  const [frame, setFrame] = useState(0);

  const updateFrame = (frameNumber) => {
    setFrame(frameNumber);
    console.log(frame);
  }

  return (
    <div>
      <Pinbutton></Pinbutton>
      <FrameSelection updateFrame={updateFrame}></FrameSelection>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }}>Submit</Button>
    </div>
  );
};

export default Main