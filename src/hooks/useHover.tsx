import { useState } from 'react';

export default function useHover(): [boolean, { onMouseOver: any; onMouseOut: any; }] {
  const [isHovered, setIsHovered] = useState(false);
  
  return [isHovered, { onMouseOver: () => setIsHovered(true), onMouseOut: () => setIsHovered(false) }];
}
