import { useState } from "react";
import { Link } from '@inertiajs/react';

const FeedbackTable = ({ feedbacks }) => {
  const [curentFeedback, setCurentFeedback] = useState([])

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
                <button className='btn btn-xs' onClick={() => {
                  setCurentFeedback(feedback)
                  document.getElementById('delete_message_modal').showModal()
                }
                }>delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      {/* modal confirm delete */}
      <dialog id="delete_message_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id="close-btn">✕</button>
          </form>
          <h3 className="font-bold text-lg">Delete</h3>
          <p className="py-4">Yakin hapus Feedback Message dari {curentFeedback.name} ?</p>
          <div className="flex justify-end gap-2">
            <Link
              className="btn btn-error btn-sm mt-3 text-base-100"
              href={route('feedback.destroy')}
              method="delete"
              data={{ id: curentFeedback.id }}
              as="button"
              onClick={() => document.getElementById('close-btn').click()} // klick tombol x diatas jika klik delete.
            >delete</Link>
            <form method="dialog">
              <button className="btn btn-ghost btn-sm mt-3">cencel</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default FeedbackTable;