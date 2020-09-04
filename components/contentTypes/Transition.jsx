import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default funciton Transition() {

  const router = useRouter();
  const key = router.query.slug.join('');

  let varients = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  return(
    <AnimatePresence exitBeforeEnter>
      <motion.div key={key} initial="hidden" animate="visible" exit="exit" variants={varients}>
        {children}
      </motion.div>
    </AnimatePresence>
  )

}