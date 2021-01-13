import styled from 'styled-components';
import Image from 'next/image';

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
  &:hover {
    background-color: ${colors.accent};
    border-radius: 50%;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-bottom: 32px;
`;
