import React from "react";
import styles from "../../page.module.css";
import Typography from "@repo/ui/Typography";
import Code from "@repo/ui/Code";
import {breadcrumbsCodeString} from "../../../data/codeStrings";
import Breadcrumbs from "@repo/ui/Breadcrumbs";


const Page: React.FC = () => {
  return <main className={styles.main}>
    <div>
      <Typography component='h1' variant='h1'>Breadcrumbs</Typography>
      <Typography component='h2' variant='h5'>
        Bacon ipsum dolor amet pork loin tail shank chislic cupim drumstick shoulder frankfurter sausage. Flank cupim jerky leberkas, jowl pig andouille. Pork chop pastrami pancetta corned beef fatback alcatra flank tail drumstick prosciutto kielbasa leberkas cow.
      </Typography>
    </div>
    <div className={styles.sideBySide}>
      <section>
        <Typography component='h2' variant='h5'>Standard</Typography>
        <Breadcrumbs/>

        <Typography component='h2' variant='h5'>Excluded path</Typography>
        <Breadcrumbs excludedPaths={['components']}/>

        <Typography component='h2' variant='h5'>Display only path</Typography>
        <Breadcrumbs displayPaths={['components']}/>

        <Typography component='h2' variant='h5'>Overwritten path</Typography>
        <Breadcrumbs overwritePaths={{components: <div>Overwritten path</div>}}/>

        <Typography component='h2' variant='h5'>Overwritten separator</Typography>
        <Breadcrumbs overwriteSeparator={'*'}/>
      </section>
      <section>
        <Code code={breadcrumbsCodeString}/>
      </section>
    </div>

  </main>
}

export default Page
