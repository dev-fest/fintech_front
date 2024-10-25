// ReportPopup.js
import React from 'react';
import jsPDF from 'jspdf';

const ReportPopup = ({ reportData, onModify, onClose }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(reportData.title, 20, 20);
    doc.setFontSize(14);
    doc.text(reportData.description, 20, 40);
    doc.setFontSize(18);
    doc.text("Details", 20, 60);
    doc.setFontSize(12);
    reportData.content.forEach((item, index) => {
      doc.text(`${item.label}: ${item.amount}`, 20, 70 + (index * 10));
    });
    doc.save(`${reportData.title.replace(" ", "_")}.pdf`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">{reportData.title}</h2>
        <p className="mb-4">{reportData.description}</p>
        <h3 className="font-medium mb-1">Details</h3>
        <ul className="list-disc list-inside mb-4">
          {reportData.content.map((item, index) => (
            <li key={index}>{item.label}: {item.amount}</li>
          ))}
        </ul>
        <div className="flex justify-end space-x-2">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
            onClick={onModify}>
            Modify
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
            onClick={handleDownload}>
            Download
          </button>
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" 
            onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPopup;
