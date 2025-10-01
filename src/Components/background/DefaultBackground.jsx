import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DefaultBackground({}) {
    // Use useEffect para reagir à mudança de toggleVisibility
    return (
        <>
  {/* Gradiente 3 */}
  <div className="bg-gradient-to-r from-black via-gray-900 to-gray-700 h-screen flex items-center justify-center text-white">
  </div>

        </>
    );
}

export default DefaultBackground;