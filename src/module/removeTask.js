const removeTask = async (id) => {
  const res = await fetch(`https://js-task-firebase-default-rtdb.firebaseio.com/task/${id}.json`,
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    })
  const data = await res.json()
}

export default removeTask;