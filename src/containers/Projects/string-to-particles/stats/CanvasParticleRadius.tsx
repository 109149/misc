import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  particleRadius: number | undefined;
  handleParticleRadiusChange: (event: any) => void;
}

const CanvasParticleRadius = (props: Props) => {
  const { particleRadius, handleParticleRadiusChange, ...other } = props;

  return (
    <TextField
      id="particleRadius"
      label="Particle Radius"
      defaultValue={particleRadius}
      type="number"
      onChange={handleParticleRadiusChange}
      fullWidth
      {...other}
    />
  );
};

export default CanvasParticleRadius;
