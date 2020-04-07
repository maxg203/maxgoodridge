import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Gallery from 'react-grid-gallery';

import TopSectionGraphic from '../custom-404.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px 0 20px 0',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  statHeading: {
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
  },
  stat: {
    textAlign: 'center',
    fontSize: '48pt',
    color: '#626262',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 'lighter',
    margin: '0 0 0 0',
  }
}));

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={5}>
          <div>
            <h2>Animal Exposé</h2>
            <p>This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. </p>
          </div>
        </Grid>
        <Grid item sm={12} md={7}>
          <img src={TopSectionGraphic} style={{ maxHeight: '300px' }} alt="Software Engineering X Animal Rights" />
        </Grid>

        <Grid item xs={12}>
          <h2>YouTube</h2>
        </Grid>
        <br></br>
        <Grid item sm={12} md={4}>
          <div>
            <h2 className={classes.statHeading}>Videos</h2>
            <p className={classes.stat}>146</p>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div>
            <h2 className={classes.statHeading}>Subscribers</h2>
            <p className={classes.stat}>20.6K</p>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div>
            <h2 className={classes.statHeading}>Channel Views</h2>
            <p className={classes.stat}>2,644,348</p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <h2>Activism</h2>
          <Gallery images={IMAGES} enableImageSelection={false} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
