import React from 'react'


const Language = () => {
    return (
        <div>
            <div className="flex">
                <ul className="w-full flex justify-around py-6">
                    <li>
                        <Image width={100} height={100} className=" invert" src="/assets/HTML5_logo.png" alt="HTML5" />
                    </li>
                    <li>
                        <Image width={70} height={70} className=" invert" src="/assets/CSS3_Logo.png" alt="CSS3" />
                    </li>
                    <li>
                        <Image width={100} height={100} className=" " src="/assets/javascript.jpg" alt="JavaScript" />
                    </li>
                    <li>
                        <Image width={100} height={100} className=" " src="/assets/react_logo.svg" alt="React" />
                    </li>
                    <li>
                        <Image width={100} height={100} className=" invert" src="/assets/nextjs.svg" alt="Next.js" />
                    </li>
                    <li>
                        <Image width={100} height={100} className=" invert" src="/assets/MongoDB_Logo.svg" alt="MongoDB" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Language
