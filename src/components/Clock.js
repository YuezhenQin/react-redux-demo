import React, { useEffect,useState } from 'react';

function useCurrentDate(){
  //创建Data这个状态
  const [date, setCurrentDate] = useState(new Date());

  //tick()对Date更新
  const tick = () => {
    setCurrentDate(new Date())
  }

  useEffect(() => {
    //调用setInterval,创建定时任务:每隔一秒钟调用tick()
    const timer = setInterval(()=>{tick()}, 1000)
    return () => {
      //返回clearInterval,保证组件卸载时, 可以清除setInterval()创建的副作用逻辑, 防止存储泄露
      clearInterval(timer)
    }
  }, [])

  return date;
}

//函数组件
export default function Clock() {
  //取得当前时间 hook
  const date = useCurrentDate();

  return (
    <div>
      <h1>Current Time: {date.toLocaleTimeString()}.</h1>
    </div>
  );
}


//类组件

//对Date的状态管理,分散在一个组件生命周期的各个函数当中
//hook书写方法, 将这些逻辑封装到一个hook函数当中, 在函数组件中使用，hook实现自定义状态管理逻辑重复用的目的
// export default class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Current Time: {this.state.date.toLocaleTimeString()}.</h1>
//       </div>
//     );
//   }
// }
