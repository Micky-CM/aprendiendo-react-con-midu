import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'micky_shark',
    name: 'Miguel Colque',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: false
  },
]
export const App = ()=> {
  return (
    <>
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing })=> (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    </>
  )
}