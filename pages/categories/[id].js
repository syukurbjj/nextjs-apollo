import { useRouter } from 'next/router'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
import { useQuery, gql } from '@apollo/client'
import { GET_CATEGORY_PRODUCTS } from '../schema'
import {
  Grid,Card,CardMedia,Container,Typography
} from '@mui/material';

const CategoryDetail = () => {
  const router = useRouter()
  const id = router.query.categoryDetail
  const { loading, error, data } = useQuery(GET_CATEGORY_PRODUCTS,{
    variables: {
      categoryId: id,
    }
  })
        if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <div>
          <Typography variant="h4" gutterBottom component="div">
            {data.category.name}
          </Typography>
          <Container maxWidth="xl">
          <Grid container spacing={3} columns={16}>
          {data.category.products.items.map((product)=> (
            <Grid item xs={4}>
              <Link href={`/categories/list/${product.url_key}`} key={product.id}>
                <Card key={product.id}sx={{ height: 450,width: 300 }}>
                  <h2>{product.name}</h2>
                  <CardMedia
                  component="img"
                  image={product.image.url}
                  alt={product.name}
                  height="350"
                  width="300"
                />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
export default CategoryDetail