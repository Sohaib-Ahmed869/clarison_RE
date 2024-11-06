import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import FlyerPreview from './FlyerTemplate1Preview';
import FlyerTemplate1Preview from './FlyerTemplate1Preview';

const FlyerBuilderTemplate1 = () => {
  const [formData, setFormData] = useState({
    mainImage: null,
    propertyDescription: '',
    details: {
      propertyType: '',
      buildingSite: '',
      lotSize: '',
      askingPrice: '',
      buildingClass: '',
      zoning: '',
      numFloors: '',
      avgYearBuilt: '',
      numUnits: '',
      propertyTenancy: '',
      yearBuilt: '',
      yearUpdated: '',
      capRate: '',
      noi: '',
      vacancyRate: '',
      parkingSpaces: '',
      parkingRatio: '',
      numOfSuitesAvail: ''
    },
    propertyHighlights: '',
    attachments: {
      websiteLink: '',
      documents: [],
      teamMembers: [
        { id: 'member1', image: null, name: '', role: '' },
        { id: 'member2', image: null, name: '', role: '' },
        { id: 'member3', image: null, name: '', role: '' },
        { id: 'member4', image: null, name: '', role: '' }
      ],
      additionalImage: null
    }
  });

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleImageUpload = (e, imageType, memberId = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageType === 'main') {
          setFormData(prev => ({ ...prev, mainImage: { file, preview: reader.result, name: 'main-property-image' }}));
        } else if (imageType === 'member' && memberId) {
          setFormData(prev => ({
            ...prev,
            attachments: {
              ...prev.attachments,
              teamMembers: prev.attachments.teamMembers.map(member => 
                member.id === memberId 
                  ? { ...member, image: { file, preview: reader.result, name: `team-member-${memberId}` }}
                  : member
              )
            }
          }));
        } else if (imageType === 'additional') {
          setFormData(prev => ({
            ...prev,
            attachments: {
              ...prev.attachments,
              additionalImage: { file, preview: reader.result, name: 'additional-property-image' }
            }
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTeamMemberUpdate = (memberId, field, value) => {
    setFormData(prev => ({
      ...prev,
      attachments: {
        ...prev.attachments,
        teamMembers: prev.attachments.teamMembers.map(member =>
          member.id === memberId ? { ...member, [field]: value } : member
        )
      }
    }));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocuments = files.map((file, index) => ({
      file,
      name: `document-${Date.now()}-${index}`,
      displayName: file.name
    }));

    setFormData(prev => ({
      ...prev,
      attachments: {
        ...prev.attachments,
        documents: [...prev.attachments.documents, ...newDocuments]
      }
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Left Column - Form */}
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-navy-900">Single Property</h1>
        
        {/* Main Image Upload */}
        <div className="bg-white rounded-lg border p-6">
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => document.getElementById('mainImageUpload').click()}
          >
            {formData.mainImage ? (
              <div className="relative w-full">
                <img 
                  src={formData.mainImage.preview} 
                  alt="Main Property" 
                  className="max-h-48 mx-auto object-contain"
                />
              </div>
            ) : (
              <>
                <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload image</p>
              </>
            )}
            <input
              id="mainImageUpload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'main')}
            />
          </div>
        </div>

        {/* Property Description */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-medium mb-3">Property Description</h2>
          <div className="relative">
            <textarea
              value={formData.propertyDescription}
              onChange={(e) => handleInputChange(null, 'propertyDescription', e.target.value)}
              className="w-full min-h-[100px] p-3 border rounded-lg resize-none"
              placeholder="Write here..."
              maxLength={500}
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {formData.propertyDescription.length}/500
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-medium mb-3">Property for Sale | Details</h2>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(formData.details).map(([key, value]) => (
              <div key={key} className="relative">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange('details', key, e.target.value)}
                  placeholder={key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full border border-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property Highlights */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-medium mb-3">Property Highlights</h2>
          <div className="relative">
            <textarea
              value={formData.propertyHighlights}
              onChange={(e) => handleInputChange(null, 'propertyHighlights', e.target.value)}
              className="w-full min-h-[100px] p-3 border rounded-lg resize-none"
              placeholder="Write here..."
              maxLength={500}
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {formData.propertyHighlights.length}/500
            </div>
          </div>
        </div>

        {/* Attachments And Links */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-medium mb-4">Attachments And Links</h2>
          <div className="space-y-4">
            {/* Top buttons */}
            <div className="flex space-x-3">
              <button className="px-6 py-2.5 border rounded-full text-sm hover:bg-gray-50">
                Website Link
              </button>
              <button 
                className="px-6 py-2.5 border rounded-full text-sm hover:bg-gray-50"
                onClick={() => document.getElementById('documentUpload').click()}
              >
                Upload Documents
              </button>
              <input
                id="documentUpload"
                type="file"
                multiple
                className="hidden"
                onChange={handleDocumentUpload}
              />
            </div>
            
            {/* Add Link Box */}
            <div className="border rounded-lg p-4">
              <input
                type="text"
                value={formData.attachments.websiteLink}
                onChange={(e) => handleInputChange('attachments', 'websiteLink', e.target.value)}
                placeholder="Add Link Here"
                className="w-full text-sm focus:outline-none"
              />
            </div>

            {/* Document Links Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Team Members */}
              {[0, 1].map(row => (
                <div key={row} className="space-y-3">
                  {formData.attachments.teamMembers.slice(row * 2, (row * 2) + 2).map((member) => (
                    <div key={member.id} className="flex flex-col items-center">
                      <div 
                        className="w-12 h-12 rounded-full border flex items-center justify-center mb-1 cursor-pointer"
                        onClick={() => document.getElementById(`memberImage-${member.id}`).click()}
                      >
                        {member.image ? (
                          <img 
                            src={member.image.preview} 
                            alt={member.name || 'Team member'} 
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <input
                        id={`memberImage-${member.id}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'member', member.id)}
                      />
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleTeamMemberUpdate(member.id, 'name', e.target.value)}
                        placeholder="Click here to add name"
                        className="text-xs text-center w-full focus:outline-none"
                      />
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => handleTeamMemberUpdate(member.id, 'role', e.target.value)}
                        placeholder="Click here to add role"
                        className="text-xs text-center w-full focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              ))}

              {/* Additional Image Upload */}
              <div className="flex items-center justify-center">
                <div 
                  className="w-24 h-24 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-2 cursor-pointer"
                  onClick={() => document.getElementById('additionalImageUpload').click()}
                >
                  {formData.attachments.additionalImage ? (
                    <img 
                      src={formData.attachments.additionalImage.preview} 
                      alt="Additional" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-8 h-8 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-400 text-center">Click to upload image</span>
                    </>
                  )}
                </div>
                <input
                  id="additionalImageUpload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'additional')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border rounded-md text-sm hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
            Next
          </button>
        </div>
      </div>

      {/* Right Column - Preview */}
      <FlyerTemplate1Preview formData={formData} />
    </div>
  );
};

export default FlyerBuilderTemplate1;