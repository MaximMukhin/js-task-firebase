const toggleCompleteTask = async (id) => {
  const res = await fetch(`https://js-task-firebase-default-rtdb.firebaseio.com/task/${id}.json`,
    {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({completed})
    })
  const data = await res.json()
}

export default toggleCompleteTask;