import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import picture from "../common/assets/img/01_Server-Side-Scripting.png"
import {Path} from "../Routes/Routes";
import CheckIcon from '@material-ui/icons/Check';


const firstSkillsBlock: string[] = [
    'Duis aute irure dolor Nisl nisi scelerisque eu ultrices',
    'Nunc eget maximus orci. Sed gravida, ex a aliquam',
    'Aliquam facilisis est eu ante placerat iaculis  finibus',
]

const secondSkillsBlock: string[] = [
    'Curabitur egestas mire vitae neque tristique sodales',
    'Aute irure dolor nisl duis nisi scelerisque eu ultrices',
    'Nisl nisi scelerisque eu ultrices Duis aute irure dolor',
]

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    margin: 'auto',
    marginTop: 20
  },
});

export const Skills = () => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>

        <Typography gutterBottom variant="h5" component="h2" align={"center"}>
            Skills
        </Typography>

        {/*<CardActionArea>*/}
        <div >
          <CardMedia
              component="img"
              alt="React developer"
              height="280"
              image={picture}
              title="React developer"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Stack of technologies
          </Typography>
            <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {firstSkillsBlock.map(skill => <p> <CheckIcon style={{fontSize: '14px', color: '#62309d'}}/> {skill}</p>)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {secondSkillsBlock.map(skill => <p> <CheckIcon style={{fontSize: '14px', color: '#62309d'}}/> {skill}</p>)}
                </Typography>
            </div>
        </CardContent>
        {/*</CardActionArea>*/}
        <CardActions>
          <Button size="small" color="primary">
            <NavLink to={Path.AboutMe} >
              About Me
            </NavLink>
          </Button>
          <Button size="small" color="primary">
            <NavLink to={Path.Contacts} >
              Contacts
            </NavLink>
          </Button>
        </CardActions>
      </Card>
  )
}