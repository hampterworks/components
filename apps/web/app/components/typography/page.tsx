import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {typographyCodeString} from "../../../data/codeStrings";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Typography</Typography>
      <Typography component='h2' variant='h4'>
        Typography is a component that represents a block of text with specific styles and semantics. It accepts several
        properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          variant: An optional Variants type that represents the variant of the Typography component. The variant can
          be one of the following: ‘h1’, ‘h2’, ‘h3’, ‘h4’, ‘h5’, ‘h6’. This determines the style of
          the text.
        </p>
        <p>
          component: An optional Headings type that represents the HTML heading element to be used for
          the Typography component. The component can be one of the following: ‘h1’, ‘h2’, ‘h3’, ‘h4’, ‘h5’, ‘h6’. This
          determines the semantic meaning of the text in the context of the webpage.
        </p>
        <p>
          A React.ReactNode that represents the content of the Typography component. This is the text that will be
          displayed.
        </p>
      </div>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Typography variant='h1'>The quick brown fox jumps over the lazy dog</Typography>
        <Typography variant='h2'>The quick brown fox jumps over the lazy dog</Typography>
        <Typography variant='h3'>The quick brown fox jumps over the lazy dog</Typography>
        <Typography variant='h4'>The quick brown fox jumps over the lazy dog</Typography>
        <Typography variant='h5'>The quick brown fox jumps over the lazy dog</Typography>
        <Typography variant='h6'>The quick brown fox jumps over the lazy dog</Typography>
      </section>
      <section>
        <Code code={typographyCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
