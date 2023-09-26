'use client'
import { useEffect } from 'react';
import Button from '@mui/material/Button';


export default function OverlayButton() {




    var i = 0;
    var txt = 'Passionate about changing the world with technology!';
    var speed = 100;


    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('typewriter').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    useEffect(() => { typeWriter() }, [])





    function introScroll() {
        document.getElementById('mainContent').scrollIntoView({ behavior: "smooth", block: "start" });
    }


    return (



        <Button
            onClick={introScroll}
            variant="outlined"
            sx={{
                color: 'white',
                border: '1.5px solid white',
                fontSize: '1.3rem',
                transition: 'all 1s',
                textTransform: 'none',
                '&:hover': {
                    color: 'black',
                    backgroundColor: 'white',
                    border: '1.5px solid white'
                }
            }}>

            More about me

        </Button>



    )
};