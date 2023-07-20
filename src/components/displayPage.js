import * as React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Picture from '../images/image-hero-desktop.png'
import logo1 from '../images/client-audiophile.svg'
import logo2 from '../images/client-databiz.svg'
import logo3 from '../images/client-meet.svg'
import logo4 from '../images/client-maker.svg'
const HomePage = () => {
    return (
        <div>
            <NavigationMenu.Root>
                <div>
                    <img src={Picture} alt="home" className='major-picture' />
                </div>
                <p className='major-text'>
                    Make 
                    remote work
                </p>
                <div className='container-2'>
                    <p className='more-text'>
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch productivity soar.
                    </p>

                    <button className='learn-more-button'>
                        Learn more
                    </button>
                   
                </div>
                <div className='botton-logos'>
                    <img src={logo2} alt='databiz' className='databiz-picture' />
                    <img src={logo1} alt='audio-phile' className='audioPhile-picture' /> 
                    <img src={logo3} alt='meet' className='meet-picture' />
                    <img src={logo4} alt='maker' className='maker-picture' />
                    </div>

                {/* <NavigationMenu.Link className='learn-more-button' href=''>
            Learn More
            </NavigationMenu.Link> */}


            </NavigationMenu.Root>


        </div>

    )
}
export default HomePage;