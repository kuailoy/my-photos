import Form from '@/components/Form'
import Layout from '@/components/Layout'
import fetchJson, { FetchError } from '@/lib/fetchJson'
import useUser from '@/lib/useUser'
import hash from 'object-hash'
import { useState } from 'react'

export default function Login() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  return (
    <Layout>
      <div className="login">
        <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault()
            const username = hash({ name: event.currentTarget.username.value })
            // const body = {
            //   username
            // }

            try {
              mutateUser(
                await fetchJson(`/api/login?s=${username}`, {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' },
                  // body: JSON.stringify(body),
                }),
              )
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message)
              } else {
                console.error('An unexpected error happened:', error)
              }
            }
          }}
        />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  )
}
