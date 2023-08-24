import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toast from './index';

test('renders toast with title and description', () => {
  const onConfirm = jest.fn();
  render(
    <Toast
      title="Toast Title"
      description="This is a sample toast description."
      type="info"
      onConfirm={onConfirm}
    />
  );

  const titleElement = screen.getByText('Toast Title');
  const descriptionElement = screen.getByText('This is a sample toast description.');
  const confirmButton = screen.getByText('Confirm');
  const cancelButton = screen.getByText('Cancel');

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(confirmButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();

  fireEvent.click(confirmButton);
  expect(onConfirm).toHaveBeenCalledTimes(1);
});
