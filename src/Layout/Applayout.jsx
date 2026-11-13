import Footer from '../Component/Footer.jsx'
import Header from '../Component/Header.jsx'

function Applayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Applayout