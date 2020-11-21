import React from 'react';

import {
  Container,
  Navbar,
  LogoArea,
  ActionsArea,
  LogofArea,
  LogoCourseSVG,
  CourseIcon,
  EmailIcon,
  LogoffIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
} from './styles';

const Menu = () => {
  return (
    <Navbar>
      <LogoArea>
        <LogoCourseSVG />
      </LogoArea>

      <ActionsArea>
        <ul>
          <li>
            <a href="?" className="active">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="?">
              <CourseIcon />
            </a>
          </li>
          <li>
            <a href="?">
              <UserIcon />
            </a>
          </li>
          <li>
            <a href="?">
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href="?">
              <SettingsIcon />
            </a>
          </li>
        </ul>
      </ActionsArea>

      <LogofArea>
        <LogoffIcon />
      </LogofArea>
    </Navbar>
  );
};

function Sidebar() {
  return (
    <Container>
      <Menu />
    </Container>
  );
}

export default Sidebar;
