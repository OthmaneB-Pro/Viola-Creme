import styled from "styled-components";

type BlocType = {
  className: string;
};

export default function Bloc({ className }: BlocType) {
  return <BlocStyled className={className} />;
}

const BlocStyled = styled.div`
  width: 230px;
  height: 85px;
  transform: rotate(-5deg);
  position: absolute;
  z-index: -1;
`;
