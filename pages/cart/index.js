import * as React from 'react';
import Card from '@mui/material/Card';
import { Container, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser"

const Cart = () => {


    const [state, setstate] = useState([]);

    useEffect(() => {
        let x = localStorage.getItem("kategori");
        let result = JSON.parse(x)
        setstate(result)
    }, []);
    console.log(state[0])

    return (
        <Container style={{marginTop:50}}>
            <Typography><h1 style={{textAlign:"center"}}>This Add Product </h1></Typography>
            <Grid container spacing={3} columns={12} style={{marginLeft:200}}>

                {state.map(items => {

                    let parse = ReactHtmlParser(items[0].description.html)
                    return (
                        <Grid item xs={4}>


                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia component="img"
                                        height="500"
                                        image={items[0].image.url}
                                        alt="green iguana" />
                                    <CardContent>
                                        <Typography><h1 key={items.id}>{items[0].name}</h1></Typography>
                                        <Typography>{parse}</Typography>
                                    </CardContent>

                                </CardActionArea>

                            </Card>

                        </Grid>
                    )
                })}

            </Grid>
        </Container>
    )
}


export default Cart