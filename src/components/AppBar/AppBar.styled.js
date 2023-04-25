import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { colors } from 'components/CommonStyles/Variables';

const Bar = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const TweetsLogo = styled(Link)`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  &:focus {
    outline-color: ${colors.btnActive};
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.text};

  padding: 2px 10px;
  transition: color 250ms ease-out;
  &:hover,
  :focus {
    color: ${colors.btnActive};
    outline-color: ${colors.btnActive};
  }
  &.active {
    color: ${colors.btnActive};
  }
`;

const FilterLabel = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.text};

  margin-left: auto;
  display: flex;
  align-items: baseline;
  column-gap: 10px;
`;

const FilterSelect = styled.select`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;

  background-color: ${colors.btnBgrnd};
  border-radius: 5px;

  &:focus {
    outline-color: ${colors.btnActive};
  }
`;

export {
  Bar,
  HeaderWrapper,
  TweetsLogo,
  StyledLink,
  FilterLabel,
  FilterSelect,
};
