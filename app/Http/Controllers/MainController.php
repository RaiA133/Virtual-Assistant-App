<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Feedback;

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
        return Inertia::render('Feedback', [
            'feedbacks' => Feedback::all()
        ]);
    }
    public function administrator()
    {
        return Inertia::render('Administrator', [
            'data' => "administrator"
        ]);
    }
}
