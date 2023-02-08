import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import Contact from "../components/Contact";
import { Grid, GridItem } from "../lib/Grid";

import CONTACTIMG from "../public/assets/contact-us.svg";
import Hero from "../components/Hero";

export default function Home({ products }) {
  return (
    <Container className="container">
      <Head>
        <title>Brandizzy</title>
      </Head>
      <Hero />

      <h2 id="products" className="title">
        Choose your online business!
      </h2>
      <Container className="products">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            link={product.slug}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
      </Container>

      <Grid container>
        <GridItem sm={12} xs={12} md={6} lg={6}>
          <Image src={CONTACTIMG} alt="" />
        </GridItem>
        <GridItem sm={12} xs={12} md={6} lg={6}>
          <Container id="contact" className="contact-form">
            <h2>Contact Us</h2>
            <Contact />
          </Container>
        </GridItem>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/products");

  // Get the front matter and slug (the filename without .md) of all files
  const products = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/products/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      products,
    },
  };
}

const Container = styled.div`
  &.container {
    padding: ${(props) => props.theme.sectionPadding};
    .title {
      text-align: center;
      font-size: calc(2vw + 1rem);
      margin: 2rem auto;
      color: #515ac5;
    }
    img {
      height: auto;
      width: 100%;
    }
  }

  &.products {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  &.contact-form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    h2 {
      text-align: left;
    }
  }
`;
