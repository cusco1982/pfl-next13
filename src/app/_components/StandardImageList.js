import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './standardimagelist.module.css';


export default function StandardImageList(props) {
    const { images } = props

    return (
        <ImageList sx={{ width: 250, height: 250, overflow: 'hidden', mx: 'auto'}} cols={2} rowHeight={125} className={styles.imgList}>
            {images.map((item) => (



                <ImageListItem className={styles.imgListItem} key={item.title}>

                    <img
                        srcSet={`${item.img}?w=125&h=125&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=125&h=125&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            objectFit: 'contain',
                            height: '100px',
                            width: '100px',
                            maxWidth: '100%',
                        }}
                    />



                    <ImageListItemBar
                        className={styles.imgTitle}
                        title={item.title}
                    />

                </ImageListItem>



            ))}
        </ImageList>
    )
};


// import Image from 'next/image';

// <Image
//         alt="Random image"
//         src="https://source.unsplash.com/random"
//         width={640}
//         height={480}
//         style={{
//           maxWidth: '100%',
//           height: '200px',
//           objectFit: 'cover',
//         }}
//       />


// https://stackoverflow.com/questions/64993101/material-ui-changing-img-based-on-breakpoint

// https://stackoverflow.com/questions/61263669/does-material-ui-have-an-image-component