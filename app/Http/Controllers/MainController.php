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

class MainController extends Controller
{
    public function dashboard(Request $request): Response
    {
        return Inertia::render('Dashboard', [
            'username' => 'asd',
        ]);
    }
    public function feedback()
    {
        return Inertia::render('Feedback', [
            'data' => "feedback"
        ]);
    }
    public function administrator()
    {
        return Inertia::render('Administrator', [
            'data' => "administrator"
        ]);
    }
}