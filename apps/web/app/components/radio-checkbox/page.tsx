import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {checkboxCodeString, radioCodeString} from "../../../data/codeStrings";
import Checkbox from "@repo/ui/Checkbox";
import Radio from "@repo/ui/Radio";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Radio group and Checkbox</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim
        jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick
        prosciutto kielbasa leberkas cow.</Typography>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <Checkbox
          label='Checkbox'
          name='Checkbox'
        />
        <Checkbox
          label='Checked Checkbox'
          name='Checked Checkbox'
          isChecked={true}
        />
        <Checkbox
          label='Required Checkbox'
          name='Required Checkbox'
          required={true}
        />
      </section>
      <section>
        <Code code={checkboxCodeString}/>
      </section>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <Radio
          label='Radio Group'
          name='Radio Group'
          options={
            [
              {title: 'First Option', value: 'first'},
              {title: 'Second Option', value: 'second'}
            ]
          }/>
        <Radio
          label='Required Radio Group'
          name='Required Radio Group'
          required
          options={
            [
              {title: 'Required First Option', value: 'Rfirst'},
              {title: 'RequiredSecond Option', value: 'Rsecond'}
            ]
          }/>
      </section>
      <section>
        <Code code={radioCodeString}/>
      </section>
    </div>
  </main>
}

export default Page
