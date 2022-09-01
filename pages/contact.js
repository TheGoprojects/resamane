import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Footer from '../components/Ui/Footer'
import Presentation from '../components/preinscription/Presentation'
import Form from '../components/contact/Form'

const Preinscription = () => {
  return (
    <>
      <Layout>
        <SEO />
        <Header />
        <Subheader title="" subtitle="" type="full" />

        <Form />

        <Footer />
      </Layout>
    </>
  )
}

export default Preinscription