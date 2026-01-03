
import proptype from 'prop-types'
import React from 'react'

// Function to replace Rixon with styled Rix and on
const formatRixon = (text) => {
  if (!text) return text;
  
  const parts = text.split(/(Rixon)/gi);
  return parts.map((part, index) => {
    if (part.toLowerCase() === 'rixon') {
      return (
        <React.Fragment key={index}>
          <span className="text-white">Rix</span>
          <span className="text-green-600">on</span>
        </React.Fragment>
      );
    }
    return part;
  });
};

export const TitleAndPara = ({ prop }) => {
  return (
    <div className="mx-auto text-center mb-5">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
        {prop.title}
      </div>  
    </div>
    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
      {formatRixon(prop.heading)}
    </h1>
    <p className="mt-3 text-lg font-medium tracking-wide leading-8 text-gray-300">
      {prop.description}
    </p>
  </div>
  )
}

TitleAndPara.propTypes = {
  prop: proptype.object.isRequired
}
export default TitleAndPara