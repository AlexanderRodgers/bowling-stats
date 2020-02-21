import React, { useState, useEffect } from 'react';
import Pinbutton from '../components/PinButton';
import FrameSelection from '../components/FrameSelection';
import { Button } from '@material-ui/core';
import { CREATE_GAME } from '../api/queries';
import { useMutation } from '@apollo/react-hooks';


const Main = (props) => {
  const [frame, setFrame] = useState(1);
  const [createGame, { gameData }] = useMutation(CREATE_GAME);
  // const [createUser, { userData }] = useMutation(ADD_USER);
  const [debug, setDebug] = useState(false);
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

  const resetGame = () => {
    localStorage.setItem('game', '{}');
    localStorage.setItem('frame', '{}');
  }

  const getGameObject = () => {
    let game = JSON.parse(localStorage.getItem('game'));
    if (!game) {
      game = {
        userId: getUserId(),
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

  const getUserId = () => {
    let userObjectString = localStorage.getItem('user');
    let user;
    if (userObjectString) {
      user = JSON.parse(userObjectString).userId;
    }
    return userObjectString ? user : null;
  }

  //TODO
  const spare = () => {
    setPins([true, true, true, true, true, true, true, true, true, true]);
    addThrowToFrame();
  }

  const addFrameToGame = () => {
    let mainFrame = frame;
    let game = getGameObject();
    game.userId = getUserId();
    let currentFrame = {};
    currentFrame.frame = frame;
    currentFrame.shots = [];
    if (game.frames.length !== 0) {
      game.frames.forEach(({ frame }, index) => {
        if (frame === mainFrame) {
          game.frames.splice(index, 1);
        }
      });
    }
    addThrowToFrame();
    currentFrame.shots.push(JSON.parse(localStorage.getItem('frame')));
    game.frames.push(currentFrame);
    localStorage.setItem('game', JSON.stringify(game));
  }

  const addThrowToFrame = () => {
    const pinNumbers = [];
    for (let i = 1; i < 11; i++) {
      if (pins[i - 1]) {
        pinNumbers.push(i);
      }
    }
    let currentFrame = getFrameObject();
    let currentThrow = {};
    currentThrow.bowl = throwNumber;
    currentThrow.pins = pinNumbers;
    currentFrame.frame = frame;
    if (!currentFrame.shots) {
      currentFrame.shots = [];
    }
    if (currentFrame.shots.length !== 0) {
      // Overwrite the throw if it already exists.
      currentFrame.shots.forEach(({ bowl }, index) => {
        if (bowl === throwNumber) {
          currentFrame.shots.splice(index, 1);
        }
      });
    }
    currentFrame.shots.push(currentThrow);
    localStorage.setItem('frame', JSON.stringify(currentFrame));
    return currentFrame;
  }

  const addNewGame = () => {
    let game = getGameObject();
    createGame({
      variables: {
        gameInput: {
          userId: game.userId,
          famres: game.frames
        }
      }
    }).then(res => {
      gameData = res.data.createGame;
    }).catch(e => console.log(e));
  }

  return (
    <div>
      <Pinbutton togglePinState={togglePinState}></Pinbutton>
      <FrameSelection
        frame={frame}
        updateFrame={updateFrame}
        setThrowNumber={setThrowNumber}
        throwNumber={throwNumber}
        addThrowToFrame={addThrowToFrame}
        addFrameToGame={addFrameToGame}></FrameSelection>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }} onClick={() => addNewGame()}>Submit</Button>
      <Button onClick={() => setDebug(!debug)}>Debug {debug ? 'On' : 'Off'}</Button>
      <Button style={{ float: "right" }} onClick={() => resetGame()}>Reset</Button>
      {debug && <p>{localStorage.getItem('game')}</p>}
    </div>
  );
};

export default Main