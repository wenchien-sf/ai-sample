
import React from 'react';

export interface TutorialStep {
  id: number;
  title: string;
  shortDesc: string;
  // Use React.ReactNode to represent any valid React node for the icon
  icon: React.ReactNode;
  // Use React.ReactNode to represent any valid React node for the content
  content: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
