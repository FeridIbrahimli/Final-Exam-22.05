import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Container from '../../components/Grid/Container';
import { Grid} from '@mui/material'

const Home = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    showproducts()
  }, [])

  async function showproducts() {
    const res = await fetch("http://localhost:8080/products")
    const data = await res.json()
    setproducts(data.data)
    
  }
  
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Colorlib</title>
    <link rel="icon" type="image/svg+xml" href="https://cdn.britannica.com/62/234462-050-6CDEB78F/color-wheels-RYB-RGB.jpg" />

      </Helmet>
  </HelmetProvider>
  <Container>
          <Grid container spacing={2}>
            <div className="cards">
              {products.map((x) => (


                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <div className="card" key={x._id}>
                    <img src={x.image} alt="" />
                    <h2>{x.name}</h2>
                    <h2>{x.price}</h2>
                  </div>
                </Grid>



              ))}
            </div>
          </Grid>
        </Container>
    </>
  )
}

export default Home