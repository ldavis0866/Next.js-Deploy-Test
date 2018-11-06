import Link from 'next/link'

const Settings = () => (
    <div>
      <p>This is the Settings page</p>
      <Link href="/invoices">
        <button>Invoices</button>
    </Link>
    </div>
  )

  export default Settings