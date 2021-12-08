import * as React from 'react';
import Slider from "react-slick";
import {
  Grid, Card, Container, Typography
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'

// import Head from 'next/head'
import Link from 'next/link'
import { gql, useQuery } from "@apollo/client";
import { textAlign, typography } from '@mui/system';


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

const Category = () => {
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // eslint-disable-next-line react/jsx-key
    <div><div style={{height:"100px"}}></div>
    <Container fixed style={{ backgroundColor: "#EBE8F0", height: "320px" }}>
      
      <Grid container spacing={2} style={{ marginLeft: 10 }}>
      
      <Grid item xs={7} style={{ paddingLeft: "5px" }}>
          <typography><h1>Category</h1></typography>
          <Slider {...settings}>
            {ecategories.map(items => (
              // eslint-disable-next-line react/jsx-key
              // eslint-disable-next-line react/jsx-key
              <Link href={`categories/${items.id}`}><a style={{textDecoration:"none"}}><Card style={{ margin: "10px" }}>
                <typography>
                  <h2 style={{ textAlign: "center" }}>{items.name}</h2>
                </typography>
              </Card></a></Link>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={4}
          style={{
            verticalAlign: "middle", textAlign: "center", 
            marginLeft: 97, height: "320px", width: "70px",
            background:"white",
          }}>
          <typography><h1 style={{
            paddingTop: "20%", left: "50%"
          }}>Selamat Berbelanja</h1></typography>
        </Grid>
      </Grid>
    </Container></div>
  )

}

export default Category