import styled, { css } from 'styled-components';

import {
  LogoCourse,
  Course,
  Email,
  Home,
  Logoff,
  Settings,
  User,
} from '../Icons';

export const Container = styled.div`
  grid-area: SB;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  padding: 24px 36px 22px 32px;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  height: 100%;
  width: 100%;

  border-radius: 24px;
  background-color: var(--primary);
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 102px;
`;

export const ActionsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 64px;
  height: 100%;
  width: 100%;

  ul > {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
  }

  > ul > li {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & + li {
      margin-top: 40px;
    }
  }

  > ul > li > a.active > svg {
    opacity: var(--opacity);
  }
`;

const CSSIcon = css`
  cursor: pointer;

  path > {
    fill: var(--iconMenu);
  }

  &:hover {
    opacity: var(--opacity);
  }
`;

export const LogoCourseSVG = styled(LogoCourse)`
  path > {
    fill: var(--iconMenu);
  }
`;

export const CourseIcon = styled(Course)`
  ${CSSIcon}
`;

export const EmailIcon = styled(Email)`
  ${CSSIcon}
`;

export const HomeIcon = styled(Home)`
  ${CSSIcon}
`;

export const LogoffIcon = styled(Logoff)`
  ${CSSIcon}
`;

export const SettingsIcon = styled(Settings)`
  ${CSSIcon}
`;

export const UserIcon = styled(User)`
  ${CSSIcon}
`;

export const LogofArea = styled.div``;
