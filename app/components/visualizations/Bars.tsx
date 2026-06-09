import ShaderCanvas, { VisualizationProps } from "./ShaderCanvas";
import { BARS_FRAGMENT } from "./shaders";

export default function Bars(props: VisualizationProps) {
  return <ShaderCanvas fragment={BARS_FRAGMENT} {...props} />;
}
