import Link from 'next/link'

const Billings = () => (
    <div>
      <p>This is the Billings page</p>
      <Link href="/triplist">
        <button>Trip List</button>
        </Link>
    </div>
  )

  export default Billings