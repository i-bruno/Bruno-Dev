import React from 'react'
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';

const Redes = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/ignaciobruno/" target='_blank'> <IconBrandLinkedin color="black" /> </a>
            <a href="https://github.com/i-bruno" target='_blank'> <IconBrandGithub color="black" /></a>
            <a href="https://twitter.com/elcarbunia" target='_blank'> <IconBrandX color="black" /></a>
            <a href="https://www.instagram.com/elcarbunia/" target='_blank'> <IconBrandInstagram color="black" /> </a>
        </div>
    )
}

export default Redes