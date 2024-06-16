import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Input from "@repo/ui/Input";
import Code from "@repo/ui/Code";
import {inputCodeString} from "../../../data/codeStrings";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Inputs</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick prosciutto kielbasa leberkas cow.
      </Typography>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <Input name='input' label='Text Input'/>
        <Input name='input' label='Number Input' type='number'/>
        <Input name='input' label='Required Input' required/>
        <Input name='input' label='Invalid Input' required isInvalid={true}/>
      </section>
      <section>
        <Code code={inputCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
