import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

interface Props {
  label: string;
  value: string;
  statusColor?: string;
}

const Card = styled.View`
  background-color: #1E1E1E;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid #333;
`;

const Label = styled.Text`
  font-size: ${theme.fontSize.subtitle}px;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const Value = styled.Text<{ statusColor?: string }>`
  font-size: ${theme.fontSize.title}px;
  font-weight: bold;
  color: ${(props) => props.statusColor || theme.colors.primary};
`;

export default function SensorCard({ label, value, statusColor }: Props) {
  return (
    <Card>
      <Label numberOfLines={1}>{label}</Label>
      <Value statusColor={statusColor} numberOfLines={1}>{value}</Value>
    </Card>
  );
}
