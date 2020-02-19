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

  const updateFrame = (frameNumber) => {
    setFrame(frameNumber);
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

  const getGameObject = () => {
    const game = localStorage.getItem('game');
    if (!game) {
      game = {
        userId: 'null',
        frames: []
      }
    }
    return game;
  }

  const getFrameObject = () => {
    let frame = JSON.parse(localStorage.getItem('frame'));
    if (!frame) {
      frame = {
        frame: 1,
        shots: []
      }
    }
    return frame;
  }

  const addFrameToGame = () => {
    let game = getGameObject();
    let currentFrame = {};
    currentFrame.frame = frame;
    currentFrame.shots = [];
    currentFrame.shots.push(JSON.parse(localStorage.getItem('frame')));
    game.frames.push(currentFrame);
  }

  const addThrowToFrame = () => {
    const pinNumbers = [];
    for (let i = 1; i < 11; i++) {
      if (pins[i - 1]) {
        pinNumbers.push(i);
      }
    }
    let frame = getFrameObject();
    frame.frame = throwNumber;
    frame.pins = pinNumbers
    localStorage.setItem('frame', JSON.stringify(frame));
    return frame;
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
      <Pinbutton togglePinState={togglePinState}></Pinbutton>
      <FrameSelection updateFrame={updateFrame} setThrowNumber={setThrowNumber} throwNumber={throwNumber} addThrowToFrame={addThrowToFrame}></FrameSelection>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }} onClick={() => addNewGame()}>Submit</Button>
    </div>
  );
};

export default Main