import React, { useState, useEffect } from 'react';
import Pinbutton from '../components/PinButton';
import FrameSelection from '../components/FrameSelection';
import { Button } from '@material-ui/core';
import { CREATE_GAME, ADD_USER } from '../api/queries';
import { useMutation } from '@apollo/react-hooks';


const Main = (props) => {
  const [frame, setFrame] = useState(1);
  const [createGame, { gameData }] = useMutation(CREATE_GAME);
  const [createUser, { userData }] = useMutation(ADD_USER);
  const [throwNumber, setThrowNumber] = useState(1);
  const [pins, setPins] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [disabledPins, setDisabledPin] = React.useState([false, false, false, false, false, false, false, false, false, false]);

  const updateFrame = (frameNumber) => {
    setFrame(frameNumber);
  }

  const updateDisabled = () => {
    const newDisabledPins = disabledPins;
    for (let pin in pins) {
      if (pins[pin] && throwNumber !== 3) {
        newDisabledPins[pin] = true;
      }
    }
    setDisabledPin(newDisabledPins);
  }

  const togglePinState = (pinNumber, e) => {
    const newFrame = pins;
    newFrame[pinNumber - 1] = !newFrame[pinNumber - 1];
    if (newFrame[pinNumber - 1]) {
      e.target.style.backgroundColor = 'green';
    } else {
      e.target.style.backgroundColor = 'white';
    }
    setPins(newFrame);
  }

  const addNewGame = () => {
    createGame({
      variables: {
      }
    }).then(res => {
      gameData = res.data.createGame;
    }).catch(e => console.log(e));
  }

  return (
    <div>
      <Pinbutton togglePinState={togglePinState} disabledPins={disabledPins}></Pinbutton>
      <FrameSelection updateFrame={updateFrame} setThrowNumber={setThrowNumber} throwNumber={throwNumber} updateDisabled={updateDisabled}></FrameSelection>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }} onClick={() => addNewGame()}>Submit</Button>
    </div>
  );
};

export default Main