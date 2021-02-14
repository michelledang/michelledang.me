import styled from 'styled-components';
import Image from 'next/image';
import { colors } from './constants';

export const StyledA = styled.a`
  color: ${colors.main};
  @media only screen and (min-width: 768px) {
    &:hover {
      color: ${colors.accent};
      background-color: ${colors.main};
      text-decoration: none;
    }
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
      alt={'Scroll up arrow.'}
      width={16}
      height={16}
    />
  );
};

const ChevronWrapper = styled(Image)`
  ${(props) => (props.down ? 'transform: rotate(90deg)' : '')};
  ${(props) => (props.up ? 'transform: rotate(270deg)' : '')};
  ${(props) => (props.left ? 'transform: rotate(180deg)' : '')};
  color: ${colors.main};
  @media only screen and (min-width: 768px) {
    &:hover {
      background-color: ${colors.accent};
      border-radius: 50%;
    }
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: 32px;
`;
