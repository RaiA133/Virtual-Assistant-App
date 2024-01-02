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
use App\Models\Message;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    public function dashboard(Request $request): Response
    {
        $messages = Message::all();
        return Inertia::render('Dashboard', [
            'username' => 'asd',
            'success_send_feedback' => session('success'),
            'dbMessages' => $messages,
        ]);
    }
    public function feedback()
    {
        $feedbacks = new FeedbackCollection(Feedback::orderBy('id', 'DESC')->paginate(5)); // di paginate + order terbaru
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
