import React from 'react';

const Title = ({ level = 2, children, className = '' }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={`text-slate-900 text-4xl lg:text-7xl font-medium !leading-tight tracking-tight font-geist ${className}`}>
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? (
          child
        ) : (
          React.cloneElement(child, {
            className: `${child.props.className || ''} text-purple-600 italic inline-block`,
          })
        )
      )}
    </Tag>
  );
};

export default Title;
