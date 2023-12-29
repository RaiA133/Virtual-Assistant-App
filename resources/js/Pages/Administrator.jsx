import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

const Test = ({ data, auth }) => {
  const user = usePage().props.auth.user;
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Administrator</h2>}
    >
      <Head title="Administrator" />

    </AuthenticatedLayout>
  );
}

export default Test;