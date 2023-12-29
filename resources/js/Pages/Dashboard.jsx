import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import ChatBoxMessage from './Dashboard/ChatBoxMessage';
import FeedbackModalForm from '@/Components/FeedbackModalForm';

export default function Dashboard({ auth }) {
    const user = usePage().props.auth.user; // get data user yang kita login kan

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {/* <div className="pt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in! {user.name}</div>
                    </div>
                </div>
            </div> */}

            <div className="pt-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5 ">

                        <div className='max-h-96 overflow-auto px-5'>
                            <ChatBoxMessage />
                        </div>

                        <div className='flex mt-4 gap-3 mx-5'>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            <button className='btn btn-neutral'>Submit</button>
                        </div>

                    </div>
                </div>
            </div>

            <FeedbackModalForm />

        </AuthenticatedLayout>
    );
}
