import React from 'react';
import { io } from 'socket.io-client';
import { BASE_URL } from '../config';

export const socket = io.connect(`${BASE_URL}:8080/room`, {
  path: '/socket.io',
  transports: ['websocket'],
});

export const SocketContext = React.createContext();
