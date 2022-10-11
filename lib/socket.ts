import { io } from 'socket.io-client';
import { BASE_URL } from '../src/config';

export const socket = io(`${BASE_URL}:8080`, {
  path: '/socket.io',
  transports: ['websocket'],
});

export const initSocketConnection = () => {
  socket.connect();
  socket.emit('socket-conncet', 'socket connection success');
};
