import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Summary({SummaryText}){
    return (
        <>
        <Card sx={{ maxWidth: 850 , minWidth: 850, backgroundColor : '#c4c2f3' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.shutterstock.com/image-vector/summary-concept-people-letters-icons-260nw-1346289404.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Summary of Website
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {SummaryText}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </>
    );
}

export default Summary;