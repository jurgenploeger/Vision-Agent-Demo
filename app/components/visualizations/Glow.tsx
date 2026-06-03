import ShaderCanvas, { VisualizationProps } from "./ShaderCanvas";
import { GLOW_FRAGMENT } from "./shaders";

export default function Glow(props: VisualizationProps) {
  return <ShaderCanvas fragment={GLOW_FRAGMENT} {...props} />;
}
