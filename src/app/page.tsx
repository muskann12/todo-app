import TodoList from '@/components/TodoList';
import { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default Home;