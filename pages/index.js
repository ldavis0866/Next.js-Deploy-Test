
  // This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <p>Adventure Tracker Landing Page</p>
    <Link href="/triplist">
    <button>Buy Now</button>
    </Link>
    
  </div>
)

export default Index