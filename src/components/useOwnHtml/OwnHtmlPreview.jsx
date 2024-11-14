import React, { useState } from 'react'


const OwnHtmlPreview = ({ownHtml}) => {
    // const ownHtmlCode=useState(sampleHtmlCode)

    return (
        <div className="flex flex-col items-center pt-3 pb-8">
            {/* <div
                className={`relative w-full max-w-md aspect-[3/4] rounded-xl border-2 border-dashed `}
            > */}
            <div
                className={`relative  max-w-md w-[645px] h-[1220px] rounded-xl border-2 border-dashed `}
            >
                <iframe
                    className="w-full h-full rounded-lg"
                    srcDoc={ownHtml}
                />
            </div>
        </div>
    )
}

export default OwnHtmlPreview;


const sampleHtmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>House of the Week</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: white;
            color: #333;
        }
        .header {
            background: #f44336;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
        }
        .header-buttons {
            display: flex;
            gap: 10px;
        }
        .header-button {
            background: #ff5c5c;
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            text-decoration: none;
        }
        .title-banner {
            background: url('/api/placeholder/800/150') center/cover;
            padding: 20px;
            text-align: center;
        }
        .title-text {
            color: white;
            font-size: 36px;
            font-style: italic;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .main-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        .gallery {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: #f5f5f5;
        }
        .gallery img {
            width: 32%;
            height: 120px;
            object-fit: cover;
        }
        .property-info {
            background: #2b579a;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .price {
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
        }
        .description {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
        }
        .agent-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: white;
        }
        .agent-info {
            display: flex;
            gap: 20px;
            align-items: center;
        }
        .agent-photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }
        .agent-details h3 {
            margin: 0;
            color: #333;
        }
        .company-logo {
            width: 100px;
            height: auto;
        }
        .footer {
            background: #f5f5f5;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">BigBoysBlast.com</div>
        <div class="header-buttons">
            <a href="#" class="header-button">REPLY TO SENDER</a>
            <a href="#" class="header-button">UNSUBSCRIBE</a>
        </div>
    </div>

    <div class="title-banner">
        <h1 class="title-text">House of the Week</h1>
    </div>

    <img src="/api/placeholder/800/600" alt="Main House View" class="main-image">

    <div class="gallery">
        <img src="/api/placeholder/250/150" alt="Living Room">
        <img src="/api/placeholder/250/150" alt="Bathroom">
        <img src="/api/placeholder/250/150" alt="Kitchen">
    </div>

    <div class="property-info">
        <h2>4 Bed 2.5 Bath 3500 sf Family Home</h2>
        <div class="description">
            Deep water canal, views of bay from this superb updated 3 bedroom home. 
            Pergo floors throughout Living, Dining & Kitchen areas. Brick wall encases 
            Wood Burning Fireplace in Living room.
        </div>
        <div class="price">$430,000</div>
    </div>

    <div class="agent-section">
        <div class="agent-info">
            <img src="/api/placeholder/100/100" alt="Agent Photo" class="agent-photo">
            <div class="agent-details">
                <h3>PRESENTED BY</h3>
                <p>Lucy Green<br>
                ABC Realty<br>
                Phone: 888-362-4547<br>
                lucyg@mycompany.com<br>
                www.lginc.com</p>
            </div>
        </div>
        <img src="/api/placeholder/100/100" alt="Company Logo" class="company-logo">
    </div>

    <div class="footer">
        <p>This email was delivered to you by BigBoysBlast.com</p>
        <p>100 S Belcher Rd #7407 | Clearwater | FL | 33765 | US</p>
        <p>
            <a href="#">Change Preferences</a> | 
            <a href="#">Unsubscribe</a> | 
            <a href="#">Support</a>
        </p>
    </div>
</body>
</html>
`