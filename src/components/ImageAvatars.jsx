import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();
    const users = [
        {
            alt: 'Tim Cook',
            url: 'http://img.dni.ru/binaries/v3_preview/318206.jpg'
        },
        {
            alt: 'Mark Zuckerberg',
            url: 'https://i.imgflip.com/2/185wka.jpg'
        },
        {
            alt: 'Elon Musk',
            url: 'https://internetua.com/uploads/blogs/e0/3f/ib-dugtq1beh_61ea8c1d.jpg'
        },
        {
            alt: 'Jack Ma',
            url: 'https://cdn.alza.sk/Foto/ImgGalery/Image/jackma.jpg'
        }
    ];

    return (
        <div className={classes.root}>
            {
                users.length ? users.map((user, i) => <Avatar key={i} alt={user.alt} src={user.url} />) : <div>No data...</div>
            }
        </div>
    );
}
