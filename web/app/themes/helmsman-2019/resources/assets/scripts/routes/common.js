//Import AOS
import AOS from 'aos/dist/aos.js'

export default {
  init() {
    // JavaScript to be fired on all pages
    AOS.init();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
