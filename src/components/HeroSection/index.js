import React, { useState } from 'react';
import bluevideo from '../../videos/bluevideo.mp4';
import { Button } from '../ButtonElements';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroSectionElements';


function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={bluevideo} type='bluevideo/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Decentralized ETH Staking</HeroH1>
        <HeroP>
        Help secure the Ethereum ecosystem and earn rewards in the process.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
