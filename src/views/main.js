import React, { useState } from 'react';
import Pinbutton from '../components/PinButton';
import FrameSelection from '../components/FrameSelection';
import { Button } from '@material-ui/core';
import { CREATE_GAME, ADD_USER } from '../api/queries';
import { useMutation } from '@apollo/react-hooks';


const Main = (props) => {
  const [frame, setFrame] = useState(0);
  const [createGame, { data }] = useMutation(CREATE_GAME);
  const [createUser, { userData }] = useMutation(ADD_USER);

  const updateFrame = (frameNumber) => {
    setFrame(frameNumber);
    console.log(frame);
  }

  const addNewGame = () => {
    createGame({
      variables: {
        gameInput: {
          userId: "5e48d94c6e004a3a40168d5a",
          frames: [
            {
              frame: 1,
              shots: [
                {
                  bowl: 1,
                  pins: [1, 2, 3, 4]
                },
                {
                  bowl: 2,
                  pins: [5, 6, 7]
                }
              ]
            }
          ]
        }
      }
    }).then(res => {
      console.log(res);
    }).catch(e => console.log(e));
  }

  return (
    <div>
      <Pinbutton></Pinbutton>
      <FrameSelection updateFrame={updateFrame}></FrameSelection>
      <Button variant="contained" color="primary" style={{ marginTop: "10px", width: "100%" }} onClick={() => addNewGame()}>Submit</Button>
    </div>
  );
};

export default Main