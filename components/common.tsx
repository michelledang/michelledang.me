import styled from 'styled-components';
// import { colors } from './layout';
const colors = {
  main: '#00613a',
  accent: '#ffc2ce',
  background: '#abd6c4',
};

export const StyledA = styled.a`
  color: ${colors.main};
  &:hover {
    color: ${colors.accent};
    background-color: ${colors.main};
    text-decoration: none;
  }
`;

export const Chevron = ({
  up,
  down,
  left,
}: {
  up?: boolean;
  down?: boolean;
  left?: boolean;
}) => {
  return (
    <ChevronWrapper
      up={up}
      down={down}
      left={left}
      colors={colors}
      src={'/images/chevron.svg'}
    />
  );
};

const ChevronWrapper = styled.img`
  ${(props) => (props.down ? 'transform: rotate(90deg)' : '')};
  ${(props) => (props.up ? 'transform: rotate(270deg)' : '')};
  ${(props) => (props.left ? 'transform: rotate(180deg)' : '')};
  color: ${colors.main};
  width: 16px;
  height: 16px;
  &:hover {
    background-color: ${colors.accent};
    border-radius: 50%;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;
