import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from "@mui/system"


export default function PokemonCard({ name, image, types }) {

  const typeHandler = (types) => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        sx={{ height: 275 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler(types)}
          </Typography>
        </Box>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}