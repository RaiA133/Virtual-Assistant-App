<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\FeedbackCollection;
use Illuminate\Http\Request;
use App\Models\Feedback;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    public function dashboard(Request $request): Response
    {
        return Inertia::render('Dashboard', [
            'username' => 'asd',
            'success_send_feedback' => session('success'),
        ]);
    }
    public function feedback()
    {
        $feedbacks = new FeedbackCollection(Feedback::paginate(5));
        // $feedbacks = Feedback::all();
        // dd($feedbacks);
        return Inertia::render('Feedback', [
            'feedbacks' => $feedbacks,
        ]);
    }
    public function administrator()
    {
        return Inertia::render('Administrator', [
            'data' => "administrator"
        ]);
    }
}
