import React, { ReactElement } from 'react'
import Image from 'next/image'


function HighlightKeepKruContent(): ReactElement {
    return (
        <div className='keepkru-image-hero'>
            <img className='keepkru-image' src={'/assets/keepkrudemo01.png'} />
        </div>
    )
}

export default HighlightKeepKruContent
