import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {useClickOutsideCodeString} from "../../../data/codeStrings";

const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Use Click outside</Typography>
      <Typography component='h2' variant='h4'>
        The useClickOutside is a custom React Hook that allows you to execute a callback function when a click event
        occurs outside of a specified element.
      </Typography>
    </section>
    <div className={styles.sideBySide}>
      <section>
        <Code code={useClickOutsideCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
