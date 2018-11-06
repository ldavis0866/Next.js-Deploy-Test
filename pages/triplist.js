import Link from 'next/link'

const TripList = () => (
    <div>
        <p>Trip List Page</p>
        <Link href="/billings">
            <button>Billings</button>
        </Link>
        <Link href="/settings">
            <button>Settings</button>
        </Link>


    </div>
  )

  export default TripList