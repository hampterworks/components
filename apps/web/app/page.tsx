"use client";
import React from "react";
import Typography from "@repo/ui/Typography";
import styles from "./page.module.css";

const Page: React.FC = () => {
  return <main className={styles.main}>
    <Typography variant='h1' component='h1'>Hampter Components</Typography>
    <section>
      Welcome to Hampter Components! We provide a robust collection of Next.js components designed to make your web development process smoother and more efficient. Our library includes a variety of components, each with customizable properties to fit your specific needs.

      Each component is meticulously crafted with flexibility and ease-of-use in mind. Whether you’re building a complex form or a simple user interface, Hampter Components has got you covered. Explore our components and let them empower your Next.js projects! Happy coding! 🚀
    </section>
  </main>
}

export default Page
