import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionTitle>Mes compétences</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            CSS <br />
            TailwindCSS <br />
            React.js ( débutant )
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PHP <br />
            Python <br />
            Java <br />
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
           MySQL <br />
          
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
           Git <br />
           VisualStudioCode
          
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    
  </Section>
);

export default Technologies;
