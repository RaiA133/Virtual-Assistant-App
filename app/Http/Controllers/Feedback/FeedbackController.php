<?php

namespace App\Http\Controllers\Feedback;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Store a newly created feedback in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'feedback_message' => 'required|string|max:255',  // Remove extra pipe here
        ]);
        Feedback::create([
            'name' => $request->name,
            'feedback_message' => $request->feedback_message,
        ]);
        return redirect()->back()->with('success', 'Feedback berhasil dikirim!');
    }

    public function destroy(Request $request) 
    {
        $feedback = Feedback::find($request->id);
        $feedback->delete();
        return redirect()->back()->with('success', 'Feedback berhasil dihapus!');
    }
}
