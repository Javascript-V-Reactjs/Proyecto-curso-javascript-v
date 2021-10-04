import './App.css';
import { students } from './students';
import { titles } from './keywords';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <List students={students} titles={titles} />
      <Footer />
    </Layout>
  );
}

export default App;
