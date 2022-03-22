import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// import Button stories file as a module
import * as stories from './ButtonForm.stories';

const { Enabled, Disabled } = composeStories(stories);

it('renders button title text', () => {
  render(<Enabled />);
  expect(screen.getByText(/Iniciar sesión/i)).not.toBeNull();
});

it('onclick handler is not called when disabled', () => {
  const onClickSpy = jest.fn();
  render(<Disabled onClick={onClickSpy} />);
  screen.getByRole('button').click();
  expect(onClickSpy).not.toHaveBeenCalled();
});
