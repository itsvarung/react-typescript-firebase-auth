import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function ServiceCard(props) {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: props.backgroundColor,
            color: props.textColor
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Button>
            <Card className={classes.root} >
                {/* <CardActions> */}

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>

                {/* </CardActions> */}
            </Card>
        </Button>
    );
}
