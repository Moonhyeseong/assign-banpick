import React, { useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type TimerProps = {
  leftTime: number;
  setLeftTime: Dispatch<SetStateAction<number>>;
  initialTime: any;
};

const Timer = ({ leftTime, setLeftTime, initialTime }: TimerProps) => {
  const milToSeconds = (leftTime: number) => {
    const leftSeconds = Math.ceil(leftTime / 1000)
      .toString()
      .padStart(2, '0');
    return leftSeconds;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftTime(initialTime - new Date().getTime());
    }, 1000);
    leftTime < 0 && clearInterval(timer);

    return () => clearInterval(timer);
  }, [initialTime, leftTime, setLeftTime]);

  return (
    <TimerText data-testid="timer">
      {leftTime > 0 ? milToSeconds(leftTime) : `00`}
    </TimerText>
  );
};

export default Timer;

const TimerText = styled.p`
  font-size: 50px;
  text-align: center;
  color: ${props => props.theme.white.white100};
  font-weight: 700;
`;
