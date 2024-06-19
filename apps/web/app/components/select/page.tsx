import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {selectCodeString} from "../../../data/codeStrings";
import Select from "@repo/ui/Select";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <section>
      <Typography component='h1' variant='h1' className={styles.header}>Select</Typography>
      <Typography component='h2' variant='h4'>
        The Select is a component that represents a dropdown list, allowing the user to select one or more options from
        a set. It accepts several properties:
      </Typography>
      <div className={styles.textBody}>
        <p>
          An array of SelectItem objects that represent the options available for the Select component. Each SelectItem
          has a value (the value of the item) and a title (the title or display text of the item).
        </p>
        <p>
          label: An
          optional string that represents the label for the Select component. This is typically displayed above the
          dropdown list to inform users what it represents.
        </p>
        <p>
          name: An optional string that represents the name of the
          Select component. This is used to identify the dropdown list in form submissions.
        </p>
        <p>
          required: An optional boolean property that indicates whether the Select component is required or not. If
          true, one of the options must be selected before the form can be submitted.
        </p>
        <p>
          selectedValue: An optional
          SelectItem that represents the currently selected value in the Select component. This is the default value of
          the dropdown list.
        </p>
        <p>
          multiple: An optional boolean property that indicates whether multiple options can be
          selected in the Select component. If true, users can select more than one option.
        </p>
        <p>
          searchable: An optional boolean property that indicates whether the Select component is searchable. If true,
          users can search for options within the dropdown list, which can be useful for long lists of options.
        </p>
      </div>
    </section>
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
