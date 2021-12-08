import * as React from 'react';
import {
  Grid,Card,Container,Typography
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'

// import Head from 'next/head'
import Link from 'next/link'
import { gql, useQuery } from "@apollo/client";


const GET_CATEGORIES = gql`
  query getCategories{
    categories{
      items{
        id
        name
        description
        children{
          id
          name
          image
          description
          url_key
          products{
            total_count
          }
          include_in_menu
          popular_icon
        }
      }
      total_count
    }
  }
`

const Category =()=>{
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (error) return (<p>Error :(</p>)
  let ecategories = []
  let items = []
  if (!loading) {
    items = data.categories.items
    // totalCount = data.categories.total_count
    items.forEach((groupCategory) => {
      ecategories = [...groupCategory.children]
    })
  }
  
  
  
  return (ecategories.map(item =>
   (
    // eslint-disable-next-line react/jsx-key
    <div className={styles.pageContainer}>
      <Container maxWidth="xl">
          <Grid container spacing={3} columns={16}>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Link href={`categories/${item.id}`}><a>
        <Button size="small">Klik Detail</Button>
        </a></Link>
      </CardActions>
    </Card>
    </Grid>
    
    </Container>
    </div>
  )));
  
}

export default Category