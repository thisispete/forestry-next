import { Switch, Case, Default } from 'jsx-switch';
import Head from 'next/head'
import styles from './app.module.scss'
import { TYPES } from 'lib/enums'
import Nav from './Nav';
import Blog from './contentTypes/Blog';
import Gallery from './contentTypes/Gallery';



export default function App({ navData, pageData }) {
  const { template } = pageData;



  let content
  switch (template) {
    case TYPES.BLOG:
      content = <Blog />
      break;
    case TYPES.GALLERY:
      content = <Gallery />
      break;
    default:
      content = <br />
      break;
  }

  return (
    <div className={styles.main} data-barba="wrapper">
      <Head>

      </Head>
      <Nav navData={navData} />
      <AnimatePresence exitBeforeEnter>
        <motion.div key={key} initial="hidden" animate="visible" exit="exit" variants={varients}>
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
