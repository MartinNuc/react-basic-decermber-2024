import {useMousePosition} from './use-mouse-position';

export const MyMouse = () => {
  const {x, y} = useMousePosition();
  
  return (
    <div>My mouse x position is {x} and y position is {y}</div>
  );
};
