import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import FeedbackTable from './Feedback/FeedbackTable';
import Paginator from './Feedback/Paginator';

const Feedback = ({ feedbacks, auth }) => {
  // console.log(usePage().props)
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
              <FeedbackTable feedbacks={feedbacks.data} />
            </div>
          </div>
          <Paginator meta={feedbacks.meta} />
        </div>
      </div>
      

    </AuthenticatedLayout>
  );
}

export default Feedback;