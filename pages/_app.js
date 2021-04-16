import '../styles/globals.css';
import '../styles/home.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "quill/dist/quill.core.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
