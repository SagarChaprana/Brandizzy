import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Home({ products }) {
  return (
    <Container>
      <Head>
        <title>Demo Blog</title>
      </Head>
      <h1>Welcome to my blog</h1>
      <p>This is a subtitle idk what to type here</p>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/product/${product.slug}`}>
              {product.date}:{product.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
