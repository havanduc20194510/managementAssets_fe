import Footer from 'src/components/Footer'
import UserHeader from 'src/components/User/Header'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <UserHeader />
      {children}
      <Footer />
    </div>
  )
}
