import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {selectCodeString} from "../../../data/codeStrings";
import Select from "@repo/ui/Select";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Select</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick prosciutto kielbasa leberkas cow.
      </Typography>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <Select
          label='Single select'
          name='Single select'
          selectedValue={{value: 'first', title: 'First Option'}}
          options={[{value: 'first', title: 'First Option'}, {value: 'second', title: 'Second Option'}]}
        />
        <Select
          label='Required Single select'
          name='Required Single select'
          required={true}
          options={[{value: 'first', title: 'First Option'}, {value: 'second', title: 'Second Option'}]}
        />
        <Select
          label='Multiple select'
          name='Multiple select'
          multiple={true}
          selectedValue={{value: 'first', title: 'First Option'}}
          options={[{value: 'first', title: 'First Option'}, {value: 'second', title: 'Second Option'}]}
        />
        <Select
          label='Searchable select'
          name='Searchable select'
          multiple={true}
          searchable={true}
          selectedValue={{value: 'first', title: 'First Option'}}
          options={[{value: 'first', title: 'First Option'}, {value: 'second', title: 'Second Option'}]}
        />
      </section>
      <section>
        <Code code={selectCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
