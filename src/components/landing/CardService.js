import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';

const CardService = ({ media, title, description, children }) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Card className={`card-span h-100 ${isMatch ? 'mt-6' : 'my-4 shadow-sm'}`}>
      <div className="card-span-img">
        {media.icon}
      </div>
      <Card.Body className="pt-6 pb-4">
        <h5 className="mb-2">{title}</h5>
        {description && <p>{description}</p>}
        {children}
      </Card.Body>
    </Card>
  )
}

export default CardService;
