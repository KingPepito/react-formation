import {getGUID} from "./index";

export const getFakeTodosPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // 1 in 5 chance to get a fake error
    const isError = Math.random() < 0.2
    if(isError) {
      reject('An error occured when loading your todo list. Please try again')
      return
    }
    resolve({
      data: [
        {
          title: 'Metro',
          completed: false,
          id: getGUID()
        },
        {
          title: 'Boulot',
          completed: false,
          id: getGUID()
        },
        {
          title: 'Dodo',
          completed: false,
          id: getGUID()
        }
      ]
    })
  }, 1200)
})