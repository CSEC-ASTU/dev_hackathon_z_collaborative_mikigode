import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
const RefreshTokenHandler = ({
  setInterval,
}: {
  setInterval: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!!session) {
      const sessionData = session as SessionType
      const timeRemaining = new Date(sessionData.user.exp * 1000).getSeconds()
      console.log(timeRemaining);

      setInterval(timeRemaining > 0 ? timeRemaining : 0)
    }
  }, [session])

  return null
}

export default RefreshTokenHandler
