import React, { ReactElement } from 'react'
import Image from 'next/image'


function HighlightContent(): ReactElement {
    return (
        <div className='help-image-hero'>
            <img className='help-image' src={'/assets/help01.png'} />
        </div>
    )
}

export default HighlightContent
