import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

const Test = ({ feedbacks, auth }) => {
  const user = usePage().props.auth.user;

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feedback</h2>}
    >
      <Head title="Feedback" />

      <div className="pt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
            <div className="overflow-x-auto">
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
                      <th>{i + 1}</th>
                      <td>{feedback.name}</td>
                      <td>{feedback.feedback_message}</td>
                      <td className='flex items-center'>
                        <button className='btn btn-xs'>delete</button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  );
}

export default Test;