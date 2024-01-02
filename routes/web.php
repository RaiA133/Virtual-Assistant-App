<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Feedback\FeedbackController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\Message\MessageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', [MainController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/feedback/store', [FeedbackController::class, 'store'])->name('feedback.store');
    Route::post('/message/store', [MessageController::class, 'store'])->name('message.store');
});


Route::middleware(['auth', 'verified', 'checkUserRole:1,2'])->group(function () {
    Route::get('/feedback', [MainController::class, 'feedback'])->name('feedback');
    Route::delete('/feedback/delete', [FeedbackController::class, 'destroy'])->name('feedback.destroy');
});

Route::middleware(['auth', 'verified', 'checkUserRole:2'])->group(function () {
    Route::get('/administrator', [MainController::class, 'administrator'])->name('administrator');
});


require __DIR__.'/auth.php';
