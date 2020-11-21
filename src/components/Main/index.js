import React from 'react';

import figureUserSVG from '../../assets/figure_user.svg';
import imageCourseSpanish from '../../assets/imageCourseSpanish.svg';
import imagePercentage from '../../assets/imagePercentage.svg';

import {
  Container,
  Header,
  Content,
  MyCurse,
  InfoCourse,
  Actions,
  LeftArrowIcon,
  RightArrowIcon,
} from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <Content>
          <h1>Hello Fábio!</h1>
          <p>It`s good to see you again.</p>

          <img src={figureUserSVG} alt="Figura Usuário" />
        </Content>
      </Header>

      <MyCurse>
        <InfoCourse>
          <div>
            <img src={imageCourseSpanish} alt="Logo Course" />
          </div>
          <div>
            <strong>Spanish B2</strong>
            <span>by Alejandro Velazquez</span>
          </div>

          <div>
            <img src={imagePercentage} alt="Logo Course" />
          </div>

          <div>
            <button type="button"> Continue </button>
          </div>
        </InfoCourse>

        <Actions>
          <LeftArrowIcon />
          <RightArrowIcon />
        </Actions>
      </MyCurse>
    </Container>
  );
}

export default Main;
