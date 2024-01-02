<?php

namespace App\Http\Controllers\Message;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|max:128',
            'sender' => 'required|string|max:128',
            'message' => 'required|string',
        ]);
        Message::create([
            'users_id' => $request->user_id,
            'name' => $request->name,
            'sender' => $request->sender,
            'message' => $request->message,
        ]);
        // Message::create([
        //     'users_id' => $request->input('user_id'),
        //     'name' => $request->input('name'),
        //     'sender' => $request->input('sender'),
        //     'message' => $request->input('message'),
        // ]);      
        return redirect()->back()->with('success', 'Message berhasil dikirim!');
    }
}
