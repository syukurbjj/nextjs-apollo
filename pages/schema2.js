import {useQuery, gql} from "@apollo/client"

export const GET_CATEGORY_PRODUCTS = gql`
    query getCategoryProducts($categoryId: Int) {
    category(id: $categoryId){
      id
      name
      url_key
      products{
        items{
          id
          name
          image{
            url
          }
          popular_icon
          rating_summary
          review_count
          url_key
          price_range{
            minimum_price{
              final_price{
                value
              }
              regular_price{
                value
              }
            }
          }
        }
        total_count
      }
    }
  }
`