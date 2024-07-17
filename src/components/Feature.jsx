import React from 'react'

export default function Feature({clasess}) {
  return (
    <div className="feature-section">
        <h2 className='fx-28 fw-bold text-center'>Feature</h2>
        <div className="container">
          <div className="feature-first-main-wrapper mb-wrap">
            <div className="w-51 d-flex align-items-center justify-content-center">
              <div className="blob-box">
                <Image src={featureFirstImage} alt='image'/>
              </div>
            </div>
            <div className="w-51">
              <h6 className='fs-24-16 fw-semibold '>Card Title</h6>
              <p className='fs-16-13 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas quas vel accusamus laborum mollitia, tenetur harum iste soluta.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
