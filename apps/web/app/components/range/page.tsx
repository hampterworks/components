import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {rangeCodeString} from "../../../data/codeStrings";
import RangeSlider from "@repo/ui/RangeSlider";



const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Range</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick prosciutto kielbasa leberkas cow.
      </Typography>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <RangeSlider label='Range input' name='range' min={-150} max={100} marks={25} step={25}/>
      </section>
      <section>
        <Code code={rangeCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
