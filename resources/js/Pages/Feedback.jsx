import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

const Test = ({ data, auth }) => {
  const user = usePage().props.auth.user;
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feedback</h2>}
    >
      <Head title="Feedback" />

    </AuthenticatedLayout>
  );
}

export default Test;