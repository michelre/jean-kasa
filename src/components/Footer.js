import logo from '../assets/footer_logo.png';

export const Footer = () => {
  return (
    <footer style={{backgroundColor: "black"}}>
        <img src={logo} alt="Kasa logo" />
        <h2 style={{color: "white"}}>© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}
