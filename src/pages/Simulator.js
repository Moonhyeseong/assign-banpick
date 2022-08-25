import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const Simulator = ({ children, gameId }) => {
  useEffect(() => {
    const game = io.connect('http://localhost:8080/game', {
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
