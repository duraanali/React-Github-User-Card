import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: "50px auto"
    },
    media: {
        height: 400
    }
});

const Card = ({ userData, followers }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={userData.avatar_url}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {userData.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Bio: {userData.bio}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Location: {userData.location}
                </Typography>
            </CardContent>
            <CardActions style={{ paddingLeft: "50px" }}>
                <Button size="small" color="primary">
                    followers: {userData.followers}
                </Button>
                <Button size="small" color="primary">
                    following: {userData.following}
                </Button>
            </CardActions>
            {followers.map(follower => {
                return (
                    <li
                        key={follower.html_url}
                        style={{
                            listStyleType: "none",
                            textAlign: "center",
                            paddingBottom: "10px"
                        }}
                    >
                        {follower.login}
                    </li>
                );
            })}
        </Card>
    );
};

export default Card;