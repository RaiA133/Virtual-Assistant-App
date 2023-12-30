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
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem vitae pariatur sed quae, neque aut veritatis placeat minima fugit doloremque obcaecati tempore accusantium provident officia quo sunt voluptate suscipit?</td>
                    <td className='flex items-center'>
                      <button className='btn btn-xs'>delete</button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td className='flex items-center'>
                      <button className='btn btn-xs'>delete</button>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td className='flex items-center'>
                      <button className='btn btn-xs'>delete</button>
                    </td>
                  </tr>
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