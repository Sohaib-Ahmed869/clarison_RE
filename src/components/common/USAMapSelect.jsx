import React, { useState, useMemo } from 'react';
import { USAMap } from '@mirawision/usa-map-react';

const USAMapSelect = ({selectedStateFromMap, setSelectedStateFromMap}) => {
  
  
  const mapSettings = useMemo(() => {
    const settings = {};
    
    // Set styling for all states
    const stateList = [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
    
    stateList.forEach((state) => {
      settings[state] = {
        fill: '#808080', // Default gray color
        stroke: '#FFFFFF', // White borders
        strokeWidth: 1,
        onClick: () => {
          setSelectedStateFromMap(selectedStateFromMap === state ? '' : state);
        }
      };
    });
    
    // Override settings for selected state
    if (selectedStateFromMap) {
      settings[selectedStateFromMap] = {
        ...settings[selectedStateFromMap],
        fill: '#800080', // Purple color for selected state
        stroke: '#FFFFFF',
        strokeWidth: 1
      };
    }
    return settings;
  }, [selectedStateFromMap]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <style>
        {`
          .usa-map {
            width: 100%;
            height: auto;
          }
          .usa-state {
            transition: fill 0.2s ease;
          }
          .usa-state:hover {
            fill: #9933CC !important;
            cursor: pointer;
          }
        `}
      </style>
      <USAMap
        customStates={mapSettings}
        defaultFill="#808080"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default USAMapSelect;