import Link from 'next/link'

const Invoices = () => (
    <div>
      <p>This is the Invoice page</p>
      <Link href="/triplist">
        <button>trips</button>
    </Link>
    </div>
  )

  export default Invoices