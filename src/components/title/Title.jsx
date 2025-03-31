import React from "react";
import PropTypes from "prop-types";

const Title = ({
  level=1,
  children,
  size="text-[2rem] lg:text-[2.5rem] lg:text-[3.5rem]",
  align="justify-center",
  className='',
}) => {
  const Tag = `h${level}`;

  return (
    <div className={`flex ${align}`}>
      <Tag className={`text-slate-900 font-medium !leading-tight tracking-tight  ${size} ${className}`}>
        {React.Children.map(children, (child) =>
          typeof child === "string" ? (
            child
          ) : (
            React.cloneElement(child, {
              className: `${child.props.className || ""} text-purple-600 italic inline-block`,
            })
          )
        )}
      </Tag>
    </div>
  );
};

Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  align: PropTypes.string,
  className: PropTypes.string,
};


export default Title;