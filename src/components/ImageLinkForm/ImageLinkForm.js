import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return(
        <div>
            <p className='f3'>
                {'This is text explaining the function'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input 
                        onChange={onInputChange} 
                        className='f4 pa2 w-70 center' type='text' 
                    />
                    <button 
                        onClick={onImageSubmit} 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
                            Detect
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;