import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const IconItem = ({
  tag: Tag = 'a',
  icon,
  bg,
  size,
  color,
  className,
  transform,
  iconClass,
  onClick,
  ...rest
}) => (
  <Tag
    // style={{
    //   background: 'linear-gradient(180deg, rgba(204,235,254,1) 0%, rgba(255,255,255,1) 100%)',
    // }}
    className={classNames(className, 'icon-item', {
      [`icon-item-${size}`]: size,
      [`bg-${bg}`]: bg,
      [`text-${color}`]: color
    })}
    {...rest}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} transform={transform} className='fs-1' />
  </Tag>
);


export default IconItem;
