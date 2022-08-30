import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { BASE_URL } from '../config';

const Simulator = ({ children, gameId }) => {
  useEffect(() => {
    const game = io.connect(`${BASE_URL}:8080/game`, {
      path: '/socket.io',
      transports: ['websocket'],
    });

    game.on('start', payload => {
      console.log(payload);
    });
  }, []);

  return <div>{children}</div>;
};

export default Simulator;
