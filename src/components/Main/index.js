import React, { useState, useEffect } from 'react';

import figureUserSVG from '../../assets/figure_user.svg';
import imageCourseSpanish from '../../assets/imageCourseSpanish.svg';
import imagePercentage from '../../assets/imagePercentage.svg';

import logoCouseFigma from '../../assets/logoCouseFigma.svg';
import logoCoursePhotoshop from '../../assets/logoCoursePhotoshop.svg';
import logoCourseInstagram from '../../assets/logoCourseInstagram.svg';
import logoCoursePhotography from '../../assets/logoCoursePhotography.svg';
import logoCourseDrawing from '../../assets/logoCourseDrawing.svg';

import {
  Container,
  Header,
  Content,
  MyCurse,
  InfoCourse,
  Actions,
  LeftArrowIcon,
  RightArrowIcon,
  FlameIcon,
  TimeIcon,
  CourseGridSetion,
  ListOptions,
  CourseDetails,
  ListCourse,
} from './styles';

import { all_course } from '../../data/listCourse.json';

function Main() {
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    const date = all_course.map((course) => {
      let url = '';

      // eslint-disable-next-line no-console
      console.log(course.image);

      switch (course.image) {
        case 'figma':
          url = logoCouseFigma;
          break;

        case 'photography':
          url = logoCoursePhotography;
          break;

        case 'instagram':
          url = logoCourseInstagram;
          break;

        case 'drawing':
          url = logoCourseDrawing;
          break;

        case 'photoshop':
          url = logoCoursePhotoshop;
          break;

        default:
          url = '';
      }

      return {
        ...course,
        image_url: url,
      };
    });

    setListCourse(date);
  }, []);

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
            <h3>Spanish B2</h3>
            <span>by Alejandro Velazquez</span>
          </div>

          <div>
            <img src={imagePercentage} alt="Logo Course" />
          </div>

          <div>
            <button type="button">Continue</button>
          </div>
        </InfoCourse>

        <Actions>
          <LeftArrowIcon />
          <RightArrowIcon />
        </Actions>
      </MyCurse>

      <CourseGridSetion>
        <h2>Course</h2>

        <ListOptions>
          <li className="active">All Courses</li>
          <li>The Newest</li>
          <li>Top Rated</li>
          <li>Most Popular</li>
        </ListOptions>

        <ListCourse>
          {listCourse.map((course) => (
            <CourseDetails key={course.name}>
              <div>
                <img
                  src={course.image_url}
                  alt={`Logo Course ${course.name}`}
                />
              </div>
              <div>
                <h3>{course.name}</h3>
                <span>{course.teacher}</span>
              </div>

              <div>
                <TimeIcon />
                <span>{`${course.hours}h ${course.minuts}min`}</span>
              </div>

              <div>
                <FlameIcon />
                <span>{course.avaliacao}</span>
              </div>

              <button type="button">View course</button>
            </CourseDetails>
          ))}
        </ListCourse>
      </CourseGridSetion>
    </Container>
  );
}

export default Main;
