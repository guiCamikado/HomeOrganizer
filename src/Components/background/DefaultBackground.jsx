import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DefaultBackground({}) {
    // Use useEffect para reagir à mudança de toggleVisibility
    return (
        <>
            <div className='bg-gradient-to-r from-gray-400 via-indigo-900 to-blue-950 min-h-screen'>
                
            </div>
        </>
    );
}

export default DefaultBackground;