import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
        <span className='headerTitleSm'>RadiantLife</span>
        <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
        className='headerImg' 
        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png" 
        alt="" />
    </div>
  )
}
