import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MediaCard() {
  return (
    <div className="gridContainer"> 
    <Card sx={{ maxWidth: 345, display: 'grid'}}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.iheartberlin.de/wp-content/uploads/2020/12/Benedict-Berlin-Classic-Box_1800x1800-1080x675.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Yelp
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Restaurant details here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
