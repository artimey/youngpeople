// import { Checkbox } from 'antd'
import React, { useState } from 'react'
import { tData } from '../../../../mockData/todoData'
import { TodoCheckbox } from './TodoCheckbox/TodoCheckbox'
import styles from './index.module.scss';
import useMediaQuery from '../../../../app/hooks/useMatchMedia';

export const Todo = () => {
  const [todoData, setTodoData] = useState(tData);
  const isMobile = useMediaQuery("(max-width: 766px)")

  const toggleIsComplete = (itemId) => {
    const data = todoData.map((item) => {
      if (item.id === itemId) {
        item.isComplete = !item.isComplete;
      }

      return item;
    });

    setTodoData(data);
  }

  return (
    <div>
      {
        isMobile ?
          <div className="w-full">
            {
              tData.map(item => {
                return (
                  <div key={item.id} className="rounded-[2rem] bg-white8 pt-[1.8rem] p-[1.6rem] mb-[1.2rem] last:mb-0">
                    <div className="flex items-start">
                      <TodoCheckbox
                        checked={item.isComplete}
                        onChange={() => toggleIsComplete(item.id)}
                      />

                      <div>
                        <span className={`${item.isComplete ? "line-through text-white50" : "text-white"} block mb-[1rem]`}>
                          {item.title}
                        </span>

                        <div className={`${item.isComplete ? "line-through text-white50" : "text-white"}`}>
                          {item.deadline}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          :
          <table className='w-full'>
            <thead>
              <tr className="text-left text-white50">
                <th>
                  <div className="ml-[5rem] mb-[2.7rem]">Задача</div>
                </th>
                <th>
                  <div className="mb-[2.7rem]">Дедлайн</div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                tData.map(item => {
                  return (
                    <tr key={item.id} className={`${styles.row} hover:bg-white8 rounded-[3rem]`}>
                      <td className="pl-[1.6rem] py-[0.8rem] rounded-l-2xl">
                        <div className="flex items-center">
                          <TodoCheckbox
                            checked={item.isComplete}
                            onChange={() => toggleIsComplete(item.id)}
                          />

                          <span className={`${item.isComplete ? "line-through text-white50" : "text-white"}`}>
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className={`${item.isComplete ? "line-through text-white50" : "text-white"}`}>
                        {item.deadline}
                      </td>
                      <td className='rounded-r-2xl pr-[1.6rem]'>
                        <button className={styles.button}>отклонить</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      }
    </div>
  )
}
