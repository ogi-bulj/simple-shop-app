import { Path, Svg, SvgProps } from "react-native-svg";

const CloseIcon = (props: SvgProps) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M6 6l12 12m0-12L6 18"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
