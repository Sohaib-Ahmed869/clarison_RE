import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const FlyerTemplate1Preview = ({ formData }) => {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="space-y-8">
        {/* Rotating Images Section */}
        <div className="relative">
          {formData.mainImage ? (
            <img 
              src={formData.mainImage.preview}
              alt="Property"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-48 bg-blue-50 rounded-t-lg flex flex-col items-center justify-center">
              <h3 className="text-red-500 text-xl font-medium">Rotating Images_</h3>
              <p className="text-red-500 text-xl">maximum 4</p>
            </div>
          )}
          {/* Decorative Wave */}
          <div className="absolute bottom-0 w-full">
            <svg viewBox="0 0 400 40" className="w-full">
              <path d="M0 20 Q100 0 200 20 Q300 40 400 20 L400 40 L0 40 Z" fill="#90EE90"/>
            </svg>
          </div>
        </div>

        {/* Property Description */}
        <div className="space-y-2 bg-[#F3F5FA] p-1">
          <h3 className="text-navy-900 font-medium">PROPERTY DESCRIPTION</h3>
          <div className="border-b-2 border-purple-500 w-full"/>
          <p className="text-gray-600 text-sm">
            {formData.propertyDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </p>
        </div>

        {/* Property Details */}
        <div className="space-y-2">
          <h3 className="text-navy-900 font-medium">PROPERTY FOR SALE | DETAILS</h3>
          <div className="border-b-2 border-purple-500 w-full"/>
          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
            <DetailItem label="Property Type" value={formData.details.propertyType || "Office"} />
            <DetailItem label="Building Size" value={formData.details.buildingSite || "15,000 SF"} />
            <DetailItem label="Lot Size" value={formData.details.lotSize || "5 Acres"} />
            
            <DetailItem label="Asking Price" value={formData.details.askingPrice || "$12,000"} />
            <DetailItem label="Building Class" value={formData.details.buildingClass || "Class A"} />
            <DetailItem label="Zoning" value={formData.details.zoning || "C-1"} />
            
            <DetailItem label="# of Floors" value={formData.details.numFloors || "10"} />
            <DetailItem label="Avg. Floor Size" value={formData.details.avgFloorSize || "1,500 SF"} />
            <DetailItem label="# of Units" value={formData.details.numUnits || "20"} />
            
            <DetailItem label="Property Tenancy" value={formData.details.propertyTenancy || "Multiple"} />
            <DetailItem label="Year Built" value={formData.details.yearBuilt || "1955"} />
            <DetailItem label="Year Updated" value={formData.details.yearUpdated || "2005"} />
            
            <DetailItem label="Cap Rate %" value={formData.details.capRate || "5"} />
            <DetailItem label="NOI" value={formData.details.noi || "$245,000"} />
            <DetailItem label="Vacancy Rate %" value={formData.details.vacancyRate || "5"} />
            
            <DetailItem label="Parking Spaces Avail." value={formData.details.parkingSpaces || "200"} />
            <DetailItem label="Parking Ratio" value={formData.details.parkingRatio || "10 / 1,000 SF"} />
            <DetailItem label="# of Subleases" value={formData.details.numOfSuitesAvail || "8"} />
          </div>
        </div>

        {/* Property Highlights */}
        <div className="space-y-2">
          <h3 className="text-navy-900 font-medium">PROPERTY HIGHLIGHTS</h3>
          <div className="border-b-2 border-purple-500 w-full"/>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              {(formData.propertyHighlights || 'Lorem ipsum dolor sit amet\nSed do eiusmod tempor\nincididunt ut labore et dolore\nvoluptate velit esse cillum dolore\nveniam quis nostrud exercitation\nlaboris nisi ut aliquip\nex ea commodo consequat\nDuis aute irure dolor').split('\n').map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attachments and Links */}
        <div className="space-y-2">
          <h3 className="text-navy-900 font-medium">ATTACHMENTS AND LINKS</h3>
          <div className="border-b-2 border-purple-500 w-full"/>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Website</h4>
              <div className="border-b-2 border-purple-500">
                <p className="text-sm pb-1">{formData.attachments.websiteLink || 'fkjdnf'}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Documents</h4>
              <div className="border-b-2 border-purple-500">
                <p className="text-sm pb-1">
                  {formData.attachments.documents.length > 0 
                    ? formData.attachments.documents.map(doc => doc.displayName).join(', ')
                    : 'djfj;ds'}
                </p>
              </div>
            </div>
          </div>

          {/* Team Members and Additional Image */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* First Column - 2 Team Members */}
            <div className="space-y-4">
              {formData.attachments.teamMembers.slice(0, 2).map((member) => (
                <div key={member.id} className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image.preview}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="border-b-2 border-purple-500 flex-grow pb-1">
                    <p className="text-sm">{member.name || 'John Doe'}</p>
                    <p className="text-xs text-gray-600">{member.role || 'CRE Company Extraordinaire'}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column - 2 Team Members */}
            <div className="space-y-4">
              {formData.attachments.teamMembers.slice(2, 4).map((member) => (
                <div key={member.id} className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image.preview}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="border-b-2 border-purple-500 flex-grow pb-1">
                    <p className="text-sm">{member.name || 'John Doe'}</p>
                    <p className="text-xs text-gray-600">{member.role || 'CRE Company Extraordinaire'}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Image */}
            <div className="flex items-center justify-center">
              {formData.attachments.additionalImage ? (
                <img 
                  src={formData.attachments.additionalImage.preview}
                  alt="Additional"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ) : (
                <img 
                  src="/api/placeholder/400/320"
                  alt="Best Coffee"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for property details
const DetailItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-600">{label}</p>
    <div className="border-b-2 border-purple-500">
      <p className="text-sm pb-1">{value}</p>
    </div>
  </div>
);

export default FlyerTemplate1Preview;