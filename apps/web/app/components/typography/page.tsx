import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {typographyCodeString} from "../../../data/codeStrings";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Typography</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick prosciutto kielbasa leberkas cow.
      </Typography>
    </div>
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
