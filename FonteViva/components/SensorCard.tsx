import React from 'react';
import styled from 'styled-components/native';

interface Props {
  label: string;
  value: string;
}

const Card = styled.View`
  background-color: #1E1E1E;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid #333;
`;

const Label = styled.Text`
  font-size: 24px;
  color: #FFFFFF; /* branco forçado */
  font-weight: bold;
  margin-bottom: 4px;
`;

const Value = styled.Text<{ isNA?: boolean }>`
  font-size: ${(props) => (props.isNA ? 16 : 18)}px;
  font-weight: ${(props) => (props.isNA ? 'normal' : 'bold')};
  color: #1E88E5; /* branco forçado */
`;

export default function SensorCard({ label, value }: Props) {
  const isInvalid = value === '11' || value.toUpperCase() === 'N/A';
  const displayValue = isInvalid ? 'N/A' : value;

  return (
    <Card>
      <Label numberOfLines={1}>{label}</Label>
      <Value numberOfLines={1} isNA={isInvalid}>{displayValue}</Value>
    </Card>
  );
}
