import { useRouter } from "next/router";
import { Link } from "next/link";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useQuery } from "@apollo/client"
import Button from '@mui/material/Button';
import ReactHtmlParser from "react-html-parser"
// import {withApollo} from "../../lib/apollo/apolloClient"
import { GET_PRODUCT } from "../../schema";
import Stack from '@mui/material/Stack';
import {
  Tooltip, Grid, Box, Chip,
  CircularProgress, IconButton, Typography,
  Card, CardActions, CardContent, CardMedia,
  Container
} from '@mui/material';
import { display } from "@mui/system";




const detailProduct = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const productName = router.query.productName
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      urlKey: productName
    }
  })
  if (loading) return <></>
  if (error) return <p>Error :(</p>
  const productDetail = data.products.items


  const addProduct = () => {
    localStorage.setItem('myCart', productName)
    console.log('added', productName)
  }

  return (
    <div>

      {productDetail.map((product, index) => {
        let parse = ReactHtmlParser(product.description.html)
        return (
          // eslint-disable-next-line react/jsx-key
          <Container fixed>
            <Box sx={{ flexGrow: 1 }} key={index} style={{ marginTop: "3rem" }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={product.image.url}
                      alt={product.name}
                      height="440"
                      width="300" />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <CardContent>
                    <Typography variant="h6" display="block" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                      {parse}
                    </Typography>

                    {product.categories.map((cat, index) => (
                      <Chip label={cat.name} size="small" variant="outlined" key={index} />
                    ))}
                  </CardContent>
                  <CardContent>
                    <Typography variant="caption" color="text.secondary">
                      {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Tooltip title="Add to Cart">
                      <IconButton aria-label="add to cart" onClick={addProduct}>

                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Grid>
                <Grid item xs={4} >
                <Stack spacing={2} direction="row">
                  <Button variant="outlined" color="success" style={{ marginTop: "50%"}}>Beli</Button>
                  <Button variant="contained" color="success" style={{ marginTop: "50%"}}> + Keranjang</Button>
                </Stack>
                </Grid>
              </Grid>


            </Box>
          </Container>
        );
      })}
    </div>
  )


}

export default detailProduct