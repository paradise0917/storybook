import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button from '../components/button/button';

export default {
  title: 'Button',
};

// export const text = () => <Button onClick={action('clicked')}>Hello Button2</Button>;

export const text = () => (
  <Button text={"Hello"} bgcolor={"red"}></Button>
);
