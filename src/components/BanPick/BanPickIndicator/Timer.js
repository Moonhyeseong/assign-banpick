import React, { useEffect } from 'react';
import styled from 'styled-components';

const Timer = ({ leftTime, setLeftTime }) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setLeftTime(Number(leftTime) - 1);
    }, 1000);
    leftTime === -1 && clearInterval(timer);
    return () => clearInterval(timer);
  }, [leftTime, setLeftTime]);

  useEffect(() => {});

  return <TimerStyle>:{padTo2Digits(leftTime > 0 ? leftTime : 0)}</TimerStyle>;
};

export default Timer;

const TimerStyle = styled.p`
  font-size: 50px;
  text-align: center;
  color: ${props => props.theme.white.white100};
  font-weight: 700;
`;
