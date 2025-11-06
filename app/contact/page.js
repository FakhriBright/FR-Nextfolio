'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // for demo we just show success
    setSent(true)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      {sent ? <p className="p-4 bg-green-100 rounded">Pesan terkirim! (demo)</p> : (
        <form onSubmit={submit} className="max-w-md">
          <input className="w-full mb-2 p-2 border rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="w-full mb-2 p-2 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <textarea className="w-full mb-2 p-2 border rounded" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
      )}
    </section>
  )
}
