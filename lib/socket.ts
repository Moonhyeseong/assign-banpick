import { io } from 'socket.io-client';

export const socket = io(
  `${process.env.NEXT_PUBLIC_BASE_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
  {
    path: '/socket.io',
    transports: ['websocket'],
  }
);

export const initSocketConnection = () => {
  socket.connect();
  socket.emit('socket-conncet', 'socket connection success');
};
