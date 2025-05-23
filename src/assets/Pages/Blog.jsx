
import Articles from "../../Components/Articles";
import { motion } from "framer-motion";
const Blog = () => {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[50vh] sm:h-[60vh] md;h-[70vh] bg-cover bg-center flex items-center justify-center text-white px-4 text-center bg-[url('/src/images/Blog2.jpeg')]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Our Blog
          </motion.h2>
        </motion.div>
        <div>
          <Articles />
        </div>
      </div>
    );
}
export default Blog;