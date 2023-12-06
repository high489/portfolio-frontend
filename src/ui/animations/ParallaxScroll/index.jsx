import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ParallaxScroll = ({ children, style, speed = 0.1 }) => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const handleScroll = () => {
    set({ offset: window.scrollY })
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <animated.div
      style={{
        ...style,
        transform: offset.to((o) => `translateY(${o * -speed}px)`),
      }}
    >
      {children}
    </animated.div>
  )
}

export { ParallaxScroll };