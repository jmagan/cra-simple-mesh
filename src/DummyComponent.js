import { useWallet } from "@meshsdk/react"

export default function DummyComponent() {
  const wallet = useWallet();

  return (
    <div>
      <h1>Hi, I'm a dummy component</h1>
      {wallet.name}
    </div>
  )
}