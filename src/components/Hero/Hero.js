import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Tommy CASSU<br />
          
        </SectionTitle>
        <SectionText>
        Je réalise actuellement un BTS SIO option développement et j'ai pour projet professionnel de devenir développeur FULL STACK
        </SectionText>
        <Button onClick={props.handleClick}>Plus d'infomations</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;