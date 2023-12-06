import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ParallaxScroll = ({ children, style }) => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    set({ offset: window.scrollY })
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <animated.div
      style={{
        ...style,
        transform: offset.to((o) => `translateY(${o * -0.5}px)`),
      }}
    >
      {children}
    </animated.div>
  )
}

export { ParallaxScroll };