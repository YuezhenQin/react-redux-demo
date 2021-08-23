import {useState, useEffect} from 'react'
import ArticleList from './components/ArticleList';
import { client } from './api/client';

// const articles = [
//   { id: 1, title: 'Article 1' },
//   { id: 2, title: 'Article 2' },
//   { id: 3, title: 'Article 3' },
// ];

//App这个函数件中使用了useEffect, 去做网络请求的调用, 通过发送网络请求获取文章数据，这是一个副作用
function App() {
  const [articles, setArticles] = useState([])

  //useEffect
  useEffect(()=> {
    const fetchArticles = async () => {
      try{
        const response = await client.get('/fakeApi/posts');
        console.log(response)
        setArticles(response.posts);
      }catch(err){
        console.error(err)
      }
    }

    fetchArticles();
  }, [])

  return (
    <div>
      <ArticleList articles={articles}/>
    </div>
  )

}

export default App;
