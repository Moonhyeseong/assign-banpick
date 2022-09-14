import React, { useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({ leftTime, setLeftTime, curruntTime }) => {
  const milToSeconds = leftTime => {
    let leftSeconds = Math.floor(leftTime / 1000)
      .toString()
      .padStart(2, '0');
    return leftSeconds;
  };

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setLeftTime(curruntTime - new Date().getTime());
    }, 1000);
    leftTime < 0 && clearInterval(timer);

    return () => clearInterval(timer);
  }, [curruntTime, leftTime, setLeftTime]);

  return (
    <TimerText>
      {milToSeconds(leftTime) > 0 ? milToSeconds(leftTime) : `00`}
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
