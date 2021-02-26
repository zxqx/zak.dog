import React from 'react';
import { useSpring, animated } from 'react-spring';

interface Props {
  children: React.ReactNode;
}

export const Animated = ({ children }: Props) => {
  const animationProps = useSpring({
    from: {
      opacity: 0,
      marginTop: '0px',
    },
    to: {
      opacity: 1,
      marginTop: '20px',
    },
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};
