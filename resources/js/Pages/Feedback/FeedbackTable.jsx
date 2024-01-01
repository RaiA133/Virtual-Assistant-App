const FeedbackTable = ({ feedbacks }) => {
  return (
    <>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Names</th>
            <th className="min-w-[300px]">Feedback Messages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {feedbacks.map((feedback, i) => (
            <tr key={i}>
              <th>{feedback.id}</th>
              <td>{feedback.name}</td>
              <td>{feedback.feedback_message}</td>
              <td className='flex items-center'>
                <button className='btn btn-xs'>delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  );
}

export default FeedbackTable;